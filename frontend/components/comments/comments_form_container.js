import { connect } from 'react-redux';
import { createComment } from '../../actions/comments';
import CommentForm from './comments_form';

const mapStateToProps = ({ errors, session, storis }) => ({
  loggedIn: !!session.currentUser,
  errors,
  storiId: storis.stori.id,
});

const mapDispatchToProps = dispatch => ({
  createComment: comment => dispatch(createComment(comment)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CommentForm);
