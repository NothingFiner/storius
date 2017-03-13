class AddAttachmentPhotoToStoris < ActiveRecord::Migration
  def self.up
    change_table :storis do |t|
      t.attachment :photo
    end
  end

  def self.down
    remove_attachment :storis, :photo
  end
end
