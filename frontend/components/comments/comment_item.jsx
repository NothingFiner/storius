import React from 'react';
import VotesContainer from '../votes/votes_container';

class CommentItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      content: this.props.comment.content,
    };

    this.handleDelete = this.handleDelete.bind(this);
  }

  isUser() {
    if (this.props.currentUser !== null) {
      return this.props.comment.user_id === this.props.currentUser.id;
    }
    return false;
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
    console.log(this.props.comment);
    return (
      <article className="comment">
        <header className="comment-header display-flex-between">
          <div className="display-flex">
            <div className="profile-icon">
              <img alt="header-profile" src={this.props.comment.photo_url} />
            </div>
            <span>{this.props.comment.username}</span>
          </div>
          <small>{this.props.comment.created_at ? `${this.props.comment.created_at} ago` : 'Just now....'}</small>
        </header>
        <textArea disabled value={this.state.content} />
        <div className="comment-footer">
          <VotesContainer votableId={this.props.comment.id} type="comments" />
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
