import { connect } from 'react-redux';
import { deleteComment } from '../../actions/comments';
import Comments from './comments';

const mapStateToProps = ({ session, storis }) => ({
  currentUser: session.currentUser,
  comments: storis.stori.comments,
});

const mapDispatchToProps = dispatch => ({
  deleteComment: commentId => dispatch(deleteComment(commentId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Comments);
