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
              <ReactQuill
                value={this.state.text}
                onChange={this.onTextChange}
                theme="snow"
              />
            </form>
          </div>
        </section>
      </div>
    );
  }
}

export default StoriForm;
