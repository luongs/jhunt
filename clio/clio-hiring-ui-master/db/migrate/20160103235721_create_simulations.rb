class CreateSimulations < ActiveRecord::Migration
  def change
    create_table :simulations do |t|
      t.string :name
      t.integer :width
      t.integer :height
    end
  end
end
