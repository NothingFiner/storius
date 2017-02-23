class ChangeColumnNameOnVotes < ActiveRecord::Migration[5.0]
  def change
    rename_column :votes, :type, :votable_type
  end
end
