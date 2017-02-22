class CreateAnnotations < ActiveRecord::Migration[5.0]
  def change
    create_table :annotations do |t|
      t.integer :start_idx, null: false
      t.integer :length, null: false
      t.text :content, null: false
      t.integer :stori_id, null: false, index: true
      t.integer :user_id, null: false, index: true

      t.timestamps
    end
  end
end
