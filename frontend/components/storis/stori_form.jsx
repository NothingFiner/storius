import React from 'react';
import Quill from 'quill';
import { withRouter } from 'react-router';

class StoriForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      content: '',
      title: '',
      author: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.quill = new Quill('#contentQuill');
    this.quill.on('text-change', () => {
      if (this.quill.getText() !== '\n') {
        const text = JSON.stringify(this.quill.getContents());
        this.setState({ content: text });
      } else {
        this.setState({ content: '' });
      }
    });
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
            <form onSubmit={this.handleSubmit}>
              <div className="width-full display-flex-between header-label">
                <h3>Primary Info</h3>
                <small>*required</small>
              </div>
              <div className="form-primary column flex-column">
                <label htmlFor="author">By*</label>
                <input
                  id="author"
                  placeholder="The primary author, artist, or creator"
                  onChange={this.update('author')}
                  type="text"
                />
                <label htmlFor="title">Title*</label>
                <input id="title" onChange={this.update('title')} placeholder="Title" type="text" />
                <div id="contentQuill" />
              </div>
              <div className="column">
                <h3 className="width-full display-flex-between header-label">
                  Additional Metadata
                </h3>
              </div>
              <button className="btn btn-square bg-white">Submit</button>
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
};

export default withRouter(StoriForm);
