json.extract! @stori, :id, :user_id, :title, :author, :content, :image_url, :metadata, :audio_video, :tags
json.photo_url @stori.photo.url
json.annotations do
  @stori.annotations.each do |annotation|
    json.set! annotation.id do
      json.extract! annotation, :id, :start_idx, :length
    end
  end
end
json.comments do
  @stori.comments.each do |comment|
    json.set! comment.id do
      json.extract! comment, :id, :content, :user_id, :updated_at
      json.created_at time_ago_in_words(comment.created_at)
      json.username comment.user.username
      json.votes comment.num_votes
      json.userVote comment.user_vote(current_user.id) if logged_in?
      json.photo_url comment.user.photo.url
    end
  end
end
