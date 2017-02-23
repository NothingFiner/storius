import { connect } from 'react-redux';
import { deleteComment } from '../../actions/comments';
import CommentItem from './comment_item';

const mapStateToProps = ({ session }) => ({
  currentUser: session.currentUser,
});

const mapDispatchToProps = dispatch => ({
  deleteComment: commentId => dispatch(deleteComment(commentId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CommentItem);
