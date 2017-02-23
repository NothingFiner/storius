class AddUniqueIndexToVotes < ActiveRecord::Migration[5.0]
  def change
    add_index :votes, [:type, :votable_id], unique: true
  end
end
