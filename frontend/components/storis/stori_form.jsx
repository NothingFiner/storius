import React from 'react';
import Quill from 'quill';
import { withRouter } from 'react-router';
import Errors from '../errors/errors';

class StoriForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      content: '',
      title: '',
      author: '',
      youtube: '',
      writer: '',
      production: '',
      editor: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.quill = new Quill('#contentQuill');
    this.quill.on('text-change', () => {
      if (this.quill.getText() !== '\n') {
        const content = JSON.stringify(this.quill.getContents());
        this.setState({ content });
      } else {
        this.setState({ content: '' });
      }
    });
  }

  componentWillUnmount() {
    this.props.clearErrors();
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const stori = {
      author: this.state.author,
      title: this.state.title,
      content: this.state.content,
      metadata: {
        editor: this.state.editor,
        writer: this.state.writer,
        production: this.state.production,
      },
      audio_video: {
        youtube: this.state.youtube,
      },
    };
    this.props.createStori(stori).then(data => (
       this.props.router.push(`storis/${data.stori.id}`)
    ));
  }

  render() {
    return (
      <div className="stori-form">
        <section>
          <h1 className="column header-text">Add Stori</h1>
          <div className="column">
            <form className="width-full" onSubmit={this.handleSubmit}>
              <div className="width-full display-flex-between header-label">
                <h3>Primary Info</h3>
                <small>*required</small>
              </div>
              <div className="form-primary primary flex-column">
                <label htmlFor="author">By*</label>
                <Errors errorsArray={this.props.errors.author} />
                <input
                  id="author"
                  placeholder="The primary author, artist, or creator"
                  onChange={this.update('author')}
                  type="text"
                />
                <label htmlFor="title">Title*</label>
                <Errors errorsArray={this.props.errors.title} />
                <input id="title" onChange={this.update('title')} placeholder="Title" type="text" />
                <label htmlFor="contentQuill">Text*</label>
                <Errors errorsArray={this.props.errors.content} />
                <div id="contentQuill" />
              </div>
              <div className="width-full display-flex-between header-label">
                <h3>
                  Additional Info
                </h3>
              </div>
              <div className="form-primary primary flex-column">
                <label htmlFor="writer">Writing Credits</label>
                <input id="writer" onChange={this.update('writer')} placeholder="Writers" type="text" />
                <label htmlFor="production">Production Credits</label>
                <input id="production" onChange={this.update('production')} placeholder="Producers" type="text" />
                <label htmlFor="editor">Editing Credits</label>
                <input id="editor" onChange={this.update('editor')} placeholder="Editors" type="text" />
                <label htmlFor="youtube">Youtube URL</label>
                <input id="youtube" onChange={this.update('youtube')} placeholder="youtube.com/watch?v=2HQaBWziYvY" type="text" />
              </div>
              <button className="btn btn-dark">Submit</button>
            </form>
          </div>
        </section>
      </div>
    );
  }
}

StoriForm.propTypes = {
  createStori: React.PropTypes.func.isRequired,
  router: React.PropTypes.shape({
    push: React.PropTypes.func,
  }).isRequired,
  errors: React.PropTypes.shape({
    title: React.PropTypes.array,
    author: React.PropTypes.array,
    content: React.PropTypes.array,
  }).isRequired,
  clearErrors: React.PropTypes.func.isRequired,
};

export default withRouter(StoriForm);
