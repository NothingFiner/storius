class CreateStoris < ActiveRecord::Migration[5.0]
  def change
    create_table :storis do |t|

      t.timestamps
    end
  end
end
