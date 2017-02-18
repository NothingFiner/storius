class CreateStoris < ActiveRecord::Migration[5.0]
  def change
    create_table :storis do |t|
      t.string :title, null: false, index: true
      t.string :author, null: false, index: true
      t.text :content, null: false
      t.string :artist_image_url
      t.string :header_image_url
      t.text :tags, array: true, default: []
      t.json :audio_video, default: {}
      t.json :metadata, default: {}
      t.integer :user_id, null: false, index: true

      t.timestamps
    end
  end
end
