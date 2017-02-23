class CreateComments < ActiveRecord::Migration[5.0]
  def change
    create_table :comments do |t|
      t.integer :user_id, null: false, index: true
      t.text :content, null: false
      t.integer :stori_id, null: false, index: true

      t.timestamps
    end
  end
end
