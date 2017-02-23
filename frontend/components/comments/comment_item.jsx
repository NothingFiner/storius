import React from 'react';

class CommentItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      content: this.props.comment.content,
    };

    this.handleDelete = this.handleDelete.bind(this);
  }

  isUser() {
    return this.props.comment.user_id === this.props.currentUser.id;
  }

  handleDelete() {
    this.props.deleteComment(this.props.comment.id);
  }

  buttons() {
    if (this.isUser()) {
      return (
        <button className="btn btn-square" onClick={this.handleDelete}>Delete</button>
      );
    }
    return null;
  }

  render() {
    return (
      <article className="comment">
        <header className="comment-header display-flex">
          <div className="profile-icon" />
          <span>{this.props.comment.username}</span>
        </header>
        <textArea disabled value={this.state.content} />
        <div className="display-flex-between comment-footer">
          <em>{`${this.props.comment.created_at} ago....` || 'Just now....'}</em>
          { this.buttons() }
        </div>
      </article>
    );
  }
}

CommentItem.propTypes = {
  comment: React.PropTypes.shape({
    content: React.PropTypes.string,
    created_at: React.PropTypes.string,
    user_id: React.PropTypes.number,
    id: React.PropTypes.id,
    username: React.PropTypes.string,
  }).isRequired,
  currentUser: React.PropTypes.shape({
    id: React.PropTypes.number,
  }),
  deleteComment: React.PropTypes.func.isRequired,
};

CommentItem.defaultProps = {
  currentUser: null,
};

export default CommentItem;
