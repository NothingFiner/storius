import React from 'react';
import Quill from 'quill';
import VotesContainer from '../votes/votes_container';
import Errors from '../errors/errors';

class Annotation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      content: '',
      top: 0,
    };

    this.cancelAnnotation = this.cancelAnnotation.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleEditSubmit = this.handleEditSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.getTop = this.getTop.bind(this);
  }

  componentDidMount() {
    this.props.clearErrors();
    this.quill = new Quill('#annotationText');
    this.quill.on('text-change', () => {
      if (this.quill.getText() !== '\n') {
        const content = JSON.stringify(this.quill.getContents());
        this.setState({ content });
      } else {
        this.setState({ content: '' });
      }
    });
    if (this.props.selectedId !== null) {
      this.props.fetchAnnotation(this.props.selectedId)
        .then((data) => {
          this.quill.setContents(JSON.parse(data.annotation.content));
          this.quill.disable();
          this.props.storiQuill.setSelection(null);
        });
    }
    this.quill.focus();
  }

  componentWillReceiveProps(newProps) {
    if (this.props.selectedId !== newProps.selectedId) {
      this.props.fetchAnnotation(newProps.selectedId)
        .then((data) => {
          this.quill.setContents(JSON.parse(data.annotation.content));
          this.quill.disable();
          this.setState({ top: this.getTop() });
        });
    }
    if (this.props.editing !== newProps.editing) {
      this.quill.setContents(JSON.parse(newProps.annotation.content));
      this.quill.enable(newProps.editing);
      if (newProps.editing) {
        this.quill.focus();
      }
    }
  }

  componentWillUnmount() {
    if (this.props.editing === true) {
      this.props.toggleEdit();
    }
    this.props.clearSelection();
    this.props.clearAnnotation();
    this.props.clearErrors();
  }

  getTop() {
    const selectionBounds = this.props.storiQuill
      .getBounds(this.props.annotation.start_idx, this.props.annotation.length);
    const top = selectionBounds.bottom - (selectionBounds.height / 2);
    return top > 0 ? top : 0;
  }

  cancelAnnotation(e) {
    e.preventDefault();
    this.props.toggleAnnotation();
    this.props.clearSelection();
  }

  handleSubmit(e) {
    e.preventDefault();
    const annotation = {
      content: this.state.content,
      start_idx: this.props.start_idx,
      length: this.props.length,
    };

    this.props.createAnnotation(annotation, this.props.storiId)
      .then((data) => {
        this.props.receiveStoriAnnotation(data);
        this.quill.disable();
        this.props.clearSelection();
      });
  }

  handleEditSubmit() {
    this.props.updateAnnotation({ id: this.props.annotation.id, content: this.state.content })
      .then(
        () => {
          this.props.toggleEdit();
        },
    );
  }

  handleDelete() {
    this.props.deleteAnnotation(this.props.selectedId);
  }

  buttons() {
    if (this.props.selectedId === null || this.props.editing) {
      return (
        <div>
          <button
            onClick={this.props.selectedId === null
              ? this.handleSubmit
              : this.handleEditSubmit}
            className="btn btn-square"
          >
            Save
          </button>
          <button
            onClick={this.props.editing ? this.props.toggleEdit : this.cancelAnnotation}
            className="btn btn-square"
          >
            Cancel
          </button>
        </div>
      );
    }
    return (
      <div>
        <button onClick={this.props.toggleEdit} className="btn btn-square">Edit</button>
        <button onClick={this.handleDelete} className="btn btn-square">Delete</button>
      </div>
    );
  }

  header() {
    if (this.props.selectedId === null) return null;
    return (
      <header>
        Created by
        <span> {this.props.annotation.username} </span>
        {
          this.props.annotation.created_at
          ? `${this.props.annotation.created_at} ago`
          : 'just now....'
        }
      </header>
    );
  }

  render() {
    let top = this.props.annotation.length ? this.getTop() : this.top;
    if (this.props.selectedId === null) {
      top = this.props.top;
    }
    const containerTop = (top - 121) > 0 ? top - 121 : 0;
    const arrowTop = top > 50 ? top + 50 : 60;
    return (
      <section className="annotation-bar">
        <div style={{ top: arrowTop }} className="arrow">
          <svg viewBox="0 0 128 128">
            <path d="M95 128L39 63.8 95 0" />
          </svg>
        </div>
        <aside
          style={{ top: containerTop }}
          className="annotation-container"
        >
          { this.header() }
          <Errors errorsArray={this.props.errors.content} />
          <div id="annotationText" />
          <footer className="display-flex">
            {
              this.props.selectedId === null
                ? null
                : <VotesContainer
                  votes={this.props.annotation.votes}
                  userVote={this.props.annotation.userVote}
                  votableId={this.props.annotation.id}
                  type="annotations"
                />
            }
            { this.buttons() }
          </footer>
        </aside>
      </section>
    );
  }
}

Annotation.propTypes = {
  fetchAnnotation: React.PropTypes.func.isRequired,
  selectedId: React.PropTypes.number,
  toggleAnnotation: React.PropTypes.func.isRequired,
  clearSelection: React.PropTypes.func.isRequired,
  storiId: React.PropTypes.number.isRequired,
  createAnnotation: React.PropTypes.func.isRequired,
  receiveStoriAnnotation: React.PropTypes.func.isRequired,
  start_idx: React.PropTypes.number.isRequired,
  length: React.PropTypes.number.isRequired,
  editing: React.PropTypes.bool.isRequired,
  toggleEdit: React.PropTypes.func.isRequired,
  updateAnnotation: React.PropTypes.func.isRequired,
  annotation: React.PropTypes.shape({
    id: React.PropTypes.number,
    content: React.PropTypes.string,
    length: React.PropTypes.number,
    start_idx: React.PropTypes.number,
    created_at: React.PropTypes.string,
    username: React.PropTypes.string,
    userVote: React.PropTypes.number,
    votes: React.PropTypes.number,
  }).isRequired,
  deleteAnnotation: React.PropTypes.func.isRequired,
  top: React.PropTypes.number.isRequired,
  storiQuill: React.PropTypes.shape({
    getBounds: React.PropTypes.func,
    setSelection: React.PropTypes.func,
  }).isRequired,
  errors: React.PropTypes.shape({
    content: React.PropTypes.array,
  }).isRequired,
  clearErrors: React.PropTypes.func.isRequired,
  clearAnnotation: React.PropTypes.func.isRequired,
};

Annotation.defaultProps = {
  selectedId: null,
};

export default Annotation;
