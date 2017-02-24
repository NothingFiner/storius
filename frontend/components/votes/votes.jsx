import React from 'react';

const Votes = (props) => {
  return (
    <div className="vote-buttons group">
      <button
        className="fa fa-thumbs-o-up"
        onClick={() => props.upvote(props.votableId)}
      />
      <div>{props.votes}</div>
      <button
        className="fa fa-thumbs-o-down"
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
};

Votes.defaultProps = {
  votableId: null,
  votes: 0,
};

export default Votes;
