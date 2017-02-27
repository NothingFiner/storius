import React from 'react';
import { values, sortBy } from 'lodash';
import CommentItemContainer from './comment_item_container';

const Comments = ({ comments }) => {
  const commentItems = sortBy(values(comments), 'created_at')
    .map(comment => <CommentItemContainer key={comment.id} comment={comment} />);
  return (
    <section className="comments-container bg-brand-white">
      {commentItems}
    </section>
  );
};

Comments.propTypes = {
  comments: React.PropTypes.shape({}),
};

Comments.defaultProps = {
  comments: {},
};

export default Comments;
