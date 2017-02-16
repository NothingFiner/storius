class AddUniqueIndexToStoris < ActiveRecord::Migration[5.0]
  def change
    add_index :storis, [:title, :author], unique: true
  end
end
