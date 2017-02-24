json.extract! @annotation, :id, :user_id, :stori_id, :content, :start_idx, :length
json.username @annotation.user.username
json.created_at time_ago_in_words(@annotation.created_at)
json.votes @annotation.num_votes
json.userVote @annotation.user_vote(current_user.id) if logged_in?
