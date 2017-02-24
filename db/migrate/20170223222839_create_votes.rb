class CreateVotes < ActiveRecord::Migration[5.0]
  def change
    create_table :votes do |t|
      t.integer :user_id, null: false, index: true
      t.integer :votable_id, null: false, index: true
      t.string :type, null: false
      t.integer :status, null: false

      t.timestamps
    end
  end
end
