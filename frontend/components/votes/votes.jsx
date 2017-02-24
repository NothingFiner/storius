import React from 'react';

const Votes = (props) => {
  let classNames = 'vote-buttons';
  if (props.votes > 0) {
    classNames += ' positive';
  } else if (props.votes < 0) {
    classNames += ' negative';
  }
  if (props.userVote === 1) {
    classNames += ' up';
  } else if (props.userVote === -1) {
    classNames += ' down';
  }
  return (
    <div className={classNames}>
      <button
        className="fa fa-thumbs-up"
        onClick={() => props.upvote(props.votableId)}
      />
      <span>{props.votes}</span>
      <button
        className="fa fa-thumbs-down"
        onClick={() => props.downvote(props.votableId)}
      />
    </div>
  );
};

Votes.propTypes = {
  downvote: React.PropTypes.func.isRequired,
  upvote: React.PropTypes.func.isRequired,
  votableId: React.PropTypes.number,
  votes: React.PropTypes.number,
  userVote: React.PropTypes.number,
};

Votes.defaultProps = {
  votableId: null,
  votes: 0,
  userVote: 0,
};
export default Votes;
