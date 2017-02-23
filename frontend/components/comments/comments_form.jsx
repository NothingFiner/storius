import React from 'react';

class CommentForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      content: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ content: e.currentTarget.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const comment = {
      content: this.state.content,
      stori_id: this.props.storiId,
    };
    this.props.createComment(comment)
      .then(() => this.setState({ content: '' }));
  }

  render() {
    if (!this.props.loggedIn) return null;
    const errors = this.props.errors.map((error, i) => <li key={`error-${i}`}>{error}</li>);
    return (
      <form onSubmit={this.handleSubmit} className="column bg-white">
        <ul>
          {errors}
        </ul>
        <label htmlFor="commentContent">New Comment</label>
        <textArea onChange={this.handleChange} id="commentContent" value={this.state.content} />
        <button className="btn btn-square">Add Comment</button>
      </form>
    );
  }
}

CommentForm.propTypes = {
  storiId: React.PropTypes.number.isRequired,
  errors: React.PropTypes.arrayOf(React.PropTypes.string).isRequired,
  loggedIn: React.PropTypes.bool.isRequired,
  createComment: React.PropTypes.func.isRequired,
};

export default CommentForm;
