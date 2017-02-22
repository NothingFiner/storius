json.extract! @stori, :id, :user_id, :title, :author, :content, :image_url, :header_image_url, :metadata, :audio_video, :tags
json.annotations do
  @stori.annotations.each do |annotation|
    json.set! annotation.id do
      json.extract! annotation, :id, :start_idx, :length
    end
  end
end
