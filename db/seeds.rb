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
    ["Tin Mines Trail", 31.93248, -106.44919, "Franklin Mountains State Park", "El Paso", "Texas", "United States", "easy", "El Paso Tin Mines Trail is a 6.6 mile heavily trafficked out and back trail located near El Paso, Texas that features beautiful wild flowers and is good for all skill levels. The trail offers a number of activity options and is best used from March until October. Dogs are also able to use this trail.", 6.6, 1023, "outAndBack", "On eastern side of the Franklin Mountains, go to the western end of Jon Cunningham Blvd to reach the trail head. There is a parking lot right at the trail head."], 
    ["Aztec Cave Trail", 31.9282, -106.50939, "Franklin Mountains State Park", "El Paso", "Texas", "United States", "moderate", "Aztec Cave Trail is a 1.2 mile out and back trail located near El Paso, Texas that features a cave and is rated as moderate. The trail is primarily used for hiking, walking, nature trips, and bird watching and is accessible year-round. Dogs are also able to use this trail.", 1.2, 419, "outAndBack", "From the trailhead, follow the trail up in a S-SE direction for 0.72 miles to arrive at the cave.  There are benches for resting at several scenic overlooks along the trail. This is a good trail for kids and dogs."], 
    ["Mundys Gap Overlook", 31.91675, -106.50923, "Franklin Mountains State Park", "El Paso", "Texas", "United States", "hard", "Mundys Gap Overlook is a 3.9 mile heavily trafficked out and back trail located near El Paso, Texas that features beautiful wild flowers and is rated as difficult. The trail is primarily used for hiking, running, horses, and mountain biking and is best used from September until May. Dogs and horses are also able to use this trail.", 3.9, 1003, "outAndBack", "Follow the main trail. At 0.58 miles there is a junction. Follow the main trail left. At 1.22 miles there is a wooden bridge. At 1.68 miles you arrive at Mundys Gap."], 
    ["B-36 Crash Hike", 31.80781, -106.49988, "Franklin Mountains State Park", "El Paso", "Texas", "United States", "hard", "B-36 Crash Hike is a 2.3 mile moderately trafficked loop trail located near El Paso, Texas that features beautiful wild flowers and is rated as difficult. The trail is primarily used for hiking, running, nature trips, and bird watching and is best used from March until October. Dogs are also able to use this trail but must be kept on leash.", 2.3, 1069, "loop", "From the parking area, climb the road to the water tank.  Follow the trail east from the tank and up hill.  The trail will turn right around the arroyo, then right again and downhill.  When the trail turns left, look for a large rock on the right (west) of the trail.  This is waypoint W-1 (N 31.80579  W 106.49340).  Turn left (east) and follow the arroyo up.  When the arroyo splits, follow the left side.  You will return down the right side.  See photo one.  The red trail is up.  The blue trail is down.  The yellow circles are rock out-crops used as markers.  The major wreckage is at the south (right) rock outcrop at N 31.80662 W 106.48733."], 
    ["Lazy Cow Trail", 31.93254, -106.44943, "Franklin Mountains State Park", "El Paso", "Texas", "United States", "easy", "Lazy Cow Trail is a 6.8 mile moderately trafficked out and back trail located near El Paso, Texas that features beautiful wild flowers and is good for all skill levels. The trail offers a number of activity options and is accessible year-round. Dogs are also able to use this trail.", 6.8, 406, "outAndBack", "On eastern side of the Franklin Mountains, go to the western end of Jon Cunningham Blvd to reach the trail head. There is a parking lot right at the trail head."], 
    ["Maze-Cardia Hill Loop Trail", 31.9324, -106.44916, "Franklin Mountains State Park", "El Paso", "Texas", "United States", "moderate", "Maze-Cardiac Hill Loop Trail is a 5 mile moderately trafficked loop trail located near El Paso, Texas that features beautiful wild flowers and is rated as moderate. The trail offers a number of activity options and is accessible year-round. Dogs are also able to use this trail but must be kept on leash.", 5.0, 639, "loop", "To get to the trailhead, take US-54 on direction to Alamogordo. Exit on Kenworthy St. Turn to your left to the Martin Luther King Jr. Blvd. Then, turn to your left on the Jon Cunningham Blvd. Straight ahead you will find a big city park where you can leave your car. To access the Franklin Mountains State Park, just climb the big water contention ditch and go left. When you reach the park entrance you will be in the Old Tin Mine Trail Road. Be alert because not very far from there you will see the sign for The Maze Trail. You will follow the Maze Trail that runs kind of parallel with the Old Tin Mine Road. In about 2.3 miles, this trail merge with the Cardiac Hill Trail. Follow the Cardiac Hill Trail to the right. Ahead you will find a junction on the trail. Go to your left. Keep going until you reach a dirt road. That road is the Blue Moon Road and it marks the end of your walk. You will see a sign for the Cardiac Hill Trail there."], 
    ["Lost Dog Trail Loop", 31.7722, -106.54934, "Franklin Mountains State Park", "El Paso", "Texas", "United States", "moderate", "Lost Dog Trail Loop is a 7.7 mile moderately trafficked loop trail located near El Paso, Texas that offers the chance to see wildlife and is rated as moderate. The trail offers a number of activity options. Dogs are also able to use this trail but must be kept on leash.", 7.7, 987, "loop", ""], 
    ["Palisades Canyon Loop", 31.78775, -106.48726, "Arroyo Park", "El Paso", "Texas", "United States", "moderate", "Palisades Canyon Loop is a 5 mile moderately trafficked loop trail located near El Paso, Texas that features beautiful wild flowers and is rated as moderate. The trail offers a number of activity options and is accessible year-round. Dogs are also able to use this trail.", 5.0, 1079, "loop", "This trail is part of a series of trails that head towards Bliss Army and up into Franklin Mountain Park offering you the ability to connect with other trails."], 
    ["Palisades Canyon to Crazy Cat Loop", 31.78859, -106.48709, "Arroyo Park", "El Paso", "Texas", "United States", "easy", "Palisades Canyon to Crazy Cat Loop is a 2.8 mile moderately trafficked loop trail located near El Paso, Texas that offers the chance to see wildlife and is good for all skill levels. The trail is primarily used for hiking and mountain biking.", 2.8, 518, "loop", ""], 
    ["Schaeffer Shuffle Trail", 31.93106, -106.51326, "Franklin Mountains State Park", "El Paso", "Texas", "United States", "moderate", "Schaeffer Shuffle Trail is a 2.6 mile moderately trafficked loop trail located near El Paso, Texas that features beautiful wild flowers and is rated as moderate. The trail offers a number of activity options and is best used from March until October. Dogs are also able to use this trail but must be kept on leash.", 2.6, 698, "loop", "Start downhill from the trailhead.  Several plants are marked with signs, and benches are provided to rest on at several points on the hike.   Proceed 0.43 mi downhill to the junction marked with a sign.  Take the trail left.  Follow the trail into the canyon, up over the hilltop, and back down and around into the main valley.  When you rejoin the main trail at 1.90 mi, follow it southeast and up-hill, past the previous junction, and back up to the starting point."], 
]

trails_seed.each do |name, latitude, longitude, location, city, state, country, difficulty, description, length, gain, category, directions|
    Trail.create( 
        name: name, 
        latitude: latitude, 
        longitude: longitude, 
        location: location, 
        city: city, 
        state: state, 
        country: country, 
        difficulty: difficulty, 
        description: description, 
        length: length, 
        gain: gain, 
        category: category, 
        directions: directions
    )
end

# *************************************
# *********** S E E D I N G ***********
# ************* U S E R S *************
# *************************************

User.create(
    email: "demo@gmail.com", 
    password: "123456", 
    first_name: "Rick", 
    last_name: "Fulano", 
    about_me: "I love the outdoors! I always take my dog, Yippy, along with me on every hike. All you dog-lovers out there, I will see you on the trail!", 
    city: "El Paso", 
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
    title: "Family-Friendly", 
    user_id: 1
)

# *************************************
# *********** S E E D I N G ***********
# ***** L I S T S - T R A I L S *******
# *************************************

lists_trails_seed = [
    [1, 0], [1, 2], [1, 4], [1, 6],
    [2, 1], [2, 3], [2, 6]
]

lists_trails_seed.each do |list_id, trail_id|
    ListsTrail.create(
        list_id: list_id, 
        trail_id: trail_id
    )
end