class RemoveUniqueIndexFromVotes < ActiveRecord::Migration[5.0]
  def change
    remove_index :votes, [:type, :votable_id], unique: true
  end
end
