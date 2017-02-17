import React from 'react';
import ReactQuill from 'react-quill';

class StoriForm extends React.Component {
  constructor() {
    super();
    this.state = { content: '' };
  }

  onTextChange(value) {
    this.setState({ text: value });
  }

  render() {
    return (
      <div className="stori-form">
        <section>
          <h1 className="column header-text">Add Stori</h1>
          <div className="column">
            <form>
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
                  type="text"
                />
                <label htmlFor="title">Title*</label>
                <input id="title" placeholder="Title" className="half" type="text" />
                <ReactQuill
                  value={this.state.text}
                  onChange={this.onTextChange}
                  theme="snow"
                />
              </div>
              <div className="column">
                <h3 className="width-full display-flex-between header-label">
                  Additional Metadata
                </h3>
              </div>
            </form>
          </div>
        </section>
      </div>
    );
  }
}

export default StoriForm;
