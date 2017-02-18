class ChangeColumnNameOnStoris < ActiveRecord::Migration[5.0]
  def change
    rename_column :storis, :artist_image_url, :image_url
  end
end
