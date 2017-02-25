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
      <form onSubmit={this.handleSubmit} className="bg-brand-white comment-form">
        <ul>
          {errors}
        </ul>
        <div className="profile-icon">
          <img alt="header-profile" src={window.images.storiusTriple} />
        </div>
        <textArea onChange={this.handleChange} id="commentContent" value={this.state.content} />
        <button className="btn btn-square green">Add Comment</button>
      </form>
    );
  }
}

CommentForm.propTypes = {
  storiId: React.PropTypes.number.isRequired,
  errors: React.PropTypes.arrayOf(React.PropTypes.string),
  loggedIn: React.PropTypes.bool.isRequired,
  createComment: React.PropTypes.func.isRequired,
};

CommentForm.defaultProps = {
  errors: [],
};

export default CommentForm;
