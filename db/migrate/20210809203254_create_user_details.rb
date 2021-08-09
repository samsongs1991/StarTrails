class CreateUserDetails < ActiveRecord::Migration[5.2]
  def change
    create_table :user_details do |t|
      t.integer :user_id, null: false
      t.string :first_name
      t.string :last_name
      t.string :email 
      t.text :about_me
      t.string :city 
      t.string :state 
      t.string :gender 
      t.date :bday
      t.timestamps
    end
    index_on :user_details, :user_id, unique: true
  end
end
