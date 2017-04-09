import { connect } from 'react-redux';
import { deleteComment, updateComment } from '../../actions/comments';
import CommentItem from './comment_item';

const mapStateToProps = ({ session }) => ({
  currentUser: session.currentUser,
});

const mapDispatchToProps = dispatch => ({
  deleteComment: commentId => dispatch(deleteComment(commentId)),
  updateComment: comment => dispatch(updateComment(comment)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CommentItem);
