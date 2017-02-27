json.extract! @comment, :id, :user_id, :stori_id, :content
json.votes @comment.num_votes
json.userVote @comment.user_vote(current_user.id) if logged_in?
json.username @comment.user.username
