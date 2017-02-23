import { connect } from 'react-redux';
import { createComment } from '../../actions/comments';
import CommentForm from './comments_form';

const mapStateToProps = ({ session, storis }) => ({
  loggedIn: !!session.currentUser,
  errors: storis.errors,
  storiId: storis.stori.id,
});

const mapDispatchToProps = dispatch => ({
  createComment: comment => dispatch(createComment(comment)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CommentForm);
