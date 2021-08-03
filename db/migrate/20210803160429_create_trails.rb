class CreateTrails < ActiveRecord::Migration[5.2]
  def change
    create_table :trails do |t|
      t.string :name
      t.float :latitude
      t.float :longitude
      t.string :location
      t.string :city
      t.string :state
      t.string :country
      t.string :difficulty
      t.text :description
      t.float :length
      t.integer :gain
      t.string :type
      t.text :directions
      t.timestamps
    end
  end
end
