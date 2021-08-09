class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string :email, null: false
      t.string :password_digest, null: false
      t.string :session_token, null: false

      t.string :first_name
      t.string :last_name
      t.text :about_me
      t.string :city
      t.string :state
      t.string :gender
      t.date :bday

      t.timestamps
    end
    add_index :users, :email, unique: true
    add_index :users, :session_token, unique: true
  end
end
