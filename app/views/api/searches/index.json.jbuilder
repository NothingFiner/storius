json.array! @results do |result|
  json.extract! result, :searchable_id, :searchable_type
  if result.searchable_type == 'Stori'
    json.title result.searchable.title
    json.author result.searchable.author
    json.image_url result.searchable.image_url
  end
end
