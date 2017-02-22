import React from 'react';
import Quill from 'quill';

class Annotation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      content: '',
    };

    this.cancelAnnotation = this.cancelAnnotation.bind(this);
    // this.cancelEdit = this.cancelEdit.bind(this);
    // this.startEdit = this.startEdit.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleEditSubmit = this.handleEditSubmit.bind(this);
  }

  componentDidMount() {
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
        });
    }
    if (this.props.editing !== newProps.editing) {
      debugger
      this.quill.setContents(JSON.parse(newProps.annotation.content));
      this.quill.enable(newProps.editing);
    }
  }

  cancelAnnotation(e) {
    e.preventDefault();
    this.props.toggleAnnotation();
    this.props.clearSelection();
  }

  // cancelEdit(e) {
  //   e.preventDefault();
  //   this.props.toggleEdit();
  //   this.quill.setContents(JSON.parse(this.props.annotation));
  //   this.quill.disable();
  // }
  //
  // startEdit(e) {
  //   e.preventDefault();
  //   this.props.toggleEdit();
  //   this.quill.enable();
  // }

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
      });
  }

  handleEditSubmit() {

  }

  buttons() {
    if (this.props.selectedId === null || this.props.editing) {
      return (
        <div>
          <button className="btn btn-square">Save</button>
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
      <button onClick={this.props.toggleEdit} className="btn btn-square">Edit</button>
    );
  }

  render() {
    const containerTop = (this.props.top - 121) > 0 ? this.props.top - 121 : 0;
    const arrowTop = this.props.top > 50 ? this.props.top + 50 : 60;
    return (
      <section className="annotation-bar">
        <div style={{ top: arrowTop }} className="arrow">
          <svg viewBox="0 0 128 128">
            <path d="M95 128L39 63.8 95 0" />
          </svg>
        </div>
        <form
          onSubmit={this.props.selectedId === null ? this.handleSubmit : this.handleEditSubmit}
          style={{ top: containerTop }}
          className="annotation-container"
        >
          <div id="annotationText" />
          { this.buttons() }
        </form>
      </section>
    );
  }
}

Annotation.propTypes = {
  fetchAnnotation: React.PropTypes.func.isRequired,
  selectedId: React.PropTypes.number,
  toggleAnnotation: React.PropTypes.func.isRequired,
  top: React.PropTypes.number.isRequired,
  clearSelection: React.PropTypes.func.isRequired,
  storiId: React.PropTypes.number.isRequired,
  createAnnotation: React.PropTypes.func.isRequired,
  receiveStoriAnnotation: React.PropTypes.func.isRequired,
  start_idx: React.PropTypes.number.isRequired,
  length: React.PropTypes.number.isRequired,
  editing: React.PropTypes.bool.isRequired,
  annotation: React.PropTypes.object.isRequired,
  toggleEdit: React.PropTypes.func.isRequired,
};

Annotation.defaultProps = {
  selectedId: null,
};

export default Annotation;
