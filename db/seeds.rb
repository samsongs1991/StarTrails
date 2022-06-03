# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)



# *************************************
# *********** S E E D I N G ***********
# ************ T R A I L S ************
# *************************************

trails_seed = [
    [
        "White Rock Lake Trail", 
        32.832344, 
        -96.713040,
        "White Rock Trail Park", 
        "Dallas", 
        "Texas", 
        "United States", 
        "easy", 
        9.2, 
        180, 
        "loop"
    ]
]

trails_seed.each do |name, latitude, longitude, location, city, state, country, difficulty, length, gain, category|
    Trail.create( 
        name: name, 
        latitude: latitude, 
        longitude: longitude, 
        location: location, 
        city: city, 
        state: state, 
        country: country, 
        difficulty: difficulty, 
        length: length, 
        gain: gain, 
        category: category, 
    )
end

# *************************************
# *********** S E E D I N G ***********
# ************* U S E R S *************
# *************************************

User.create(
    email: "demo@gmail.com", 
    password: "123456", 
    first_name: "Samuel", 
    last_name: "Song", 
    about_me: "I love the outdoors! I always take my dog, Mochi, along with me on every hike. All you dog-lovers out there, I will see you on the trail!", 
    city: "Dallas", 
    state: "Texas", 
    gender: "Male", 
    bday: "1991-10-28"
)

# *************************************
# *********** S E E D I N G ***********
# ************* L I S T S *************
# *************************************

List.create(
    title: "Favorites", 
    user_id: 1
)

List.create(
    title: "Relaxing", 
    user_id: 1
)

List.create(
    title: "Dog-Friendly", 
    user_id: 1
)

# *************************************
# *********** S E E D I N G ***********
# ***** L I S T S - T R A I L S *******
# *************************************

# lists_trails_seed = [
#     [1, 0], [1, 2], [1, 4], [1, 6]
# ]

# lists_trails_seed.each do |list_id, trail_id|
#     ListsTrail.create(
#         list_id: list_id, 
#         trail_id: trail_id
#     )
# end

# *************************************
# *********** S E E D I N G ***********
# *********** R E V I E W S ***********
# *************************************

Review.create(
    trail_id: 1, 
    user_id: 1, 
    body: "This is an awesome trail. I loved the scenic views.", 
    rating: 5
)