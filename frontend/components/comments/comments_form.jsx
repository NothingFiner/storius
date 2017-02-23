import React from 'react';

class CommentForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      content: '',
    };
  }

  render() {
    return (
      <form className="column bg-white">
        <label htmlFor="commentContent">New Comment</label>
        <textArea id="commentContent" value={this.state.content} />
        <button className>Add Comment</button>
      </form>
    );
  }
}

export default CommentForm;
