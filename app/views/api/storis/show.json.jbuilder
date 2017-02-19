json.extract! @stori, :id, :user_id, :title, :author, :content, :image_url, :header_image_url, :metadata, :audio_video, :tags
json.annotations do
  json.array! @stori.annotations, :id, :start_idx, :length
end
