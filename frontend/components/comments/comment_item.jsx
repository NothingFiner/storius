import React from 'react';
import VotesContainer from '../votes/votes_container';

class CommentItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      content: this.props.comment.content,
      editing: false,
    };

    this.handleDelete = this.handleDelete.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.editContent = this.editContent.bind(this);
  }

  isUser() {
    if (this.props.currentUser !== null) {
      return this.props.comment.user_id === this.props.currentUser.id;
    }
    return false;
  }

  handleChange(e) {
    this.setState({ content: e.currentTarget.value });
  }

  handleDelete() {
    this.props.deleteComment(this.props.comment.id);
  }

  handleSubmit() {
    const comment = {
      content: this.state.content,
      id: this.props.comment.id,
    };
    this.props.updateComment(comment)
      .then(
        () => {
          this.setState({ editing: false });
        },
      );
  }

  handleCancel() {
    this.setState({
      content: this.props.comment.content,
      editing: false,
    });
  }

  editContent() {
    this.setState({ editing: true });
  }

  buttons() {
    if (this.isUser()) {
      if (this.state.editing) {
        return (
          <div>
            <button onClick={this.handleSubmit} className="btn btn-square green">Save</button>
            <button onClick={this.handleCancel} className="btn btn-square">Cancel</button>
          </div>
        )
      }
      return (
        <div>
          <button className="btn btn-square" onClick={this.editContent}>Edit</button>
          <button className="btn btn-square" onClick={this.handleDelete}>Delete</button>
        </div>
      );
    }
    return null;
  }

  commentBody() {
    if (this.state.editing) {
      return (
        <textArea value={this.state.content} onChange={this.handleChange} />
      );
    }
    return (
      <div className="comment-display">
        {this.state.content}
      </div>
    );
  }

  render() {
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
        {this.commentBody()}
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
    photo_url: React.PropTypes.string,
  }).isRequired,
  currentUser: React.PropTypes.shape({
    id: React.PropTypes.number,
  }),
  deleteComment: React.PropTypes.func.isRequired,
  updateComment: React.PropTypes.func.isRequired,
};

CommentItem.defaultProps = {
  currentUser: null,
};

export default CommentItem;
