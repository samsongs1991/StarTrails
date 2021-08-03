class CreateTrails < ActiveRecord::Migration[5.2]
  def change
    create_table :trails do |t|
      t.string :name, null: false
      t.float :latitude
      t.float :longitude
      t.string :location
      t.string :city, null: false
      t.string :state, null: false
      t.string :country, null: false
      t.string :difficulty
      t.text :description
      t.float :length
      t.integer :gain
      t.string :type
      t.text :directions
      t.timestamps
    end
    add_index :trails, [:name, :city], unique: true
  end
end
