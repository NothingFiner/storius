import React from 'react';
import ReactQuill from 'react-quill';

class StoriForm extends React.Component {
  constructor() {
    super();
    this.state = {
      content: '',
      title: '',
      author: '',
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.onTextChange = this.onTextChange.bind(this);
  }


  onTextChange(value) {
    this.setState({ content: value });
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
    this.props.createStori(stori).then((data) => {
      this.router.push(`storis/${data.id}`);
    });
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
              <div className="form-primary column">
                <label htmlFor="author">By*</label>
                <input
                  id="author"
                  placeholder="The primary author, artist, or creator"
                  className="half"
                  onChange={this.update('author')}
                  type="text"
                />
                <label htmlFor="title">Title*</label>
                <input id="title" onChange={this.update('title')} placeholder="Title" className="half" type="text" />
                <ReactQuill
                  value={this.state.content}
                  onChange={this.onTextChange}
                  theme="snow"
                />
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

export default StoriForm;
