# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2021_08_03_160429) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "trails", force: :cascade do |t|
    t.string "name", null: false
    t.float "latitude"
    t.float "longitude"
    t.string "location"
    t.string "city", null: false
    t.string "state", null: false
    t.string "country", null: false
    t.string "difficulty"
    t.text "description"
    t.float "length"
    t.integer "gain"
    t.string "type"
    t.text "directions"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["name", "city"], name: "index_trails_on_name_and_city", unique: true
  end

  create_table "users", force: :cascade do |t|
    t.string "email", null: false
    t.string "password_digest", null: false
    t.string "session_token", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["session_token"], name: "index_users_on_session_token", unique: true
  end

end
