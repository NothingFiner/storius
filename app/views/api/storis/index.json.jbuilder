json.array! @storis do |stori|
  json.extract! stori, :id, :title, :author, :updated_at, :image_url
  json.annotation_count stori.annotations.count
end
