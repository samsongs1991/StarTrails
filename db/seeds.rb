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

# , 

trails_seed = [
    # ---------------
    # - EL PASO, TX -
    # ---------------
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
    # ---------------
    # - Dallas, TX -
    # ---------------
    ["Cedar Brake Trail via Cattail Pond Trail", 32.63836, -96.95848, "Cedar Ridge Preserve", "Dallas", "Texas", "United States", "easy", "Cedar Brake Trail via Cattail Pond Trail is a 4.5 mile heavily trafficked loop trail located near Dallas, Texas that features a lake and is good for all skill levels. The trail is primarily used for hiking, walking, and running and is accessible year-round. Dogs are also able to use this trail but must be kept on leash.", 4.5, 485, "loop", "For preserve hours, see the preserve page here: https://audubondallas.org/cedar-ridge-preserve/"], 
    ["White Rock Lake Trail", 32.84095, -96.7152, "White Rock Trail Park", "Dallas", "Texas", "United States", "easy", "White Rock Lake Trail is a 9.2 mile heavily trafficked loop trail located near Dallas, Texas that features a lake and is good for all skill levels. The trail offers a number of activity options and is accessible year-round. Dogs are also able to use this trail but must be kept on leash.", 9.2, 180, "loop", "This is a peaceful, family-friendly, paved pedestrian and cycling path through a park that loops White Rock Lake. There are multiple parking lots around the pathway.

        White Rock Lake is a city water reservoir constructed circa 1900 to supply water to the growing Dallas area. The surrounding land has been turned into a picturesque city park and is, in turn, surrounded by neighborhoods. A paved multi-use pathway circumnavigates the lake with several (apparently older and unmaintained) walking pathways branching off at various points. It interconnects with other pathways. 
        
        Accessibility: There are at least 3 designated accessible spaces in the paved parking lot off of East Lawther Drive at the east end of the trail. All of them are van-accessible with striped access aisles. The trail surface is paved asphalt or concrete and smooth. It is typically at least 8 feet wide. There is a painted dividing line along some of the trail which reduces the width. 
        
        The majority of the trail is estimated to be in the mostly gentle (5% or less) grade category. This trail will likely be navigable for most wheelchairs/mobility equipment or stroller users. There are benches along the route for resting."], 
    ["Oak Cliff Nature Preserve Outer Loop", 32.71385, -96.86578, "Oak Cliff Nature Preserve", "Dallas", "Texas", "moderate", "Oak Cliff Nature Preserve Outer Loop is a 6.5 mile heavily trafficked loop trail located near Dallas, Texas that features a great forest setting and is rated as moderate. The trail is primarily used for hiking, running, nature trips, and mountain biking and is accessible year-round. Dogs are also able to use this trail but must be kept on leash.", 6.5, 344, "loop", "SEASONAL CLOSURE: This area is subject to seasonal closure due to weather conditions. For more information, please visit https://texaslandconservancy.org/oak-cliff-nature-preserve/.

        Very nice trails in a well wooded area. Very easy to get lost, though, so make sure to stay on the trail. Be aware that trails cross each other. Only way to get out of the park is near the entrance."], 
    ["Boulder Park Trail", 32.66871, -96.87402, "Boulder Park", "Dallas", "Texas", "moderate", "Boulder Park Trail is a 4 mile heavily trafficked loop trail located near Dallas, Texas that features a great forest setting and is rated as moderate. The trail is primarily used for hiking, running, and mountain biking and is best used from March until October. Dogs are also able to use this trail but must be kept on leash.", 4, 259, "loop", "Although this trail is heavily used by mountain bikers, hikers are more than welcome. Make sure to go the opposite direction of the bikers so you can see them coming!

        This park may close depending on weather conditions. For more information, please see https://www.dallasparks.org/417/Boulder"], 
    # ---------------
    # - Seattle, WA -
    # ---------------
    ["Disovery Park and Lighthouse Loop Trail", 47.365812, -122.40613, "Discovery Park", "Seattle", "Washington", "United States", "easy","Discovery Park and Lighthouse Loop Trail is a 4.4 mile heavily trafficked loop trail located near Seattle, Washington that offers the chance to see wildlife and is good for all skill levels. The trail offers a number of activity options and is best used from May until December. Dogs are also able to use this trail but must be kept on leash.", 4.4, 472, "loop", "The park provides an open space away from the stress and activity of the city, a sanctuary for wildlife, and an outdoor classroom for people to learn about the natural world. The park is also home to the Daybreak Star Indian Cultural Center.

        Discovery Park is a 534 acre natural area park, located next to the peninsular Magnolia neighborhood in Seattle, and overlooking Puget Sound, with views of the Cascade and Olympic mountains. The park is built on the historic grounds of Fort Lawton, which was originally a Confederate prisoner-of-war camp during the Civil War. The park includes two miles of protected tidal beaches, a lighthouse, open meadow lands, dramatic sea cliffs, forest groves, active sand dunes, thickets, and streams.
        
        No dogs allowed on the beach."], 
    ["Green Lake Trail", 47.68137, -122.32888, "Green Lake Park", "Seattle", "Washington", "United States", "easy", "Green Lake Trail is a 2.9 mile heavily trafficked loop trail located near Seattle, Washington that features a lake and is good for all skill levels. The trail is primarily used for walking, running, and road biking and is accessible year-round. Dogs are also able to use this trail but must be kept on leash.", 2.9, 29, "loop", "Inside one of Seattle's most beloved parks, this paved path loops around Green Lake.

        Geologists say the Vashon Glacial Ice Sheet, which also formed Puget Sound and other area lakes, formed Green Lake 50,000 years ago. Dredgings of Green Lake have produced volcanic ash from an eruption of Glacier Peak that occurred about 6,700 years ago.
        
        The lake was included in the Olmsted Brothers' comprehensive parks plan and was given to the City by the State of Washington in 1905. Green Lake underwent a series of changes over the next 15 years- it was diked, dredged, and filled until it shrunk by nearly 100 acres! The last fill deposited in Green Lake was from the excavation of Aurora Avenue.
        
        In more recent times, Green Lake has suffered from stagnation and pollution problems, as well as algae blooms. Milfoil and swimmers itch (caused by parasites from waterfowl) is still a consideration for those who swim in the lake.
        
        Accessibility: There are 4 designated accessible spaces in the paved parking lot off of East Green Lake Drive North at the east end of the trail. All of them are van-accessible with striped access aisles. The trail surface is paved asphalt or wooden boardwalk with edge barriers. It is typically at least 8 feet wide. There is a painted dividing line along some of the trail which reduces the width. 
        
        The majority of the trail is estimated to be in the flat (1% or less) grade category. This trail will likely be navigable for most wheelchairs/mobility equipment or stroller users. There are benches and picnic tables along the route for resting."], 
    ["Alki Trail to Hamilton Viewpoint and Seacrest Parks", 47.57765, -122.4159, "Alki Beach Park", "Seattle", "Washington", "United States", "easy", "Alki Trail to Hamilton Viewpoint and Seacrest Parks is a 7.6 mile heavily trafficked out and back trail located near Seattle, Washington that features a river and is good for all skill levels. The trail offers a number of activity options and is accessible year-round. Dogs are also able to use this trail but must be kept on leash.", 7.6, 101, "outAndBack", "This is a portion of the Alki Trail between Riverside and the Port of Seattle Jack Block Park, this trail follows the northern and eastern shore of West Seattle along Alki Avenue and has beautiful views of Puget Sound and the Olympic Mountains. Largely riding on a widened sidewalk separated from traffic by a parking lane and curb, traffic on the trail is separated for bikes and walkers, providing a less stressful experience for walkers and cyclists alike.

        Accessibility: There does not appear to be any designated accessible spaces in the paved street parking lot off of Alki Avenue Southwest at the west end of the trail. However, there are 2 designated accessible spaces in the paved parking lot off of Harbor Avenue Southwest at about 2.2 miles at the Don Armeni Boat Ramp. Both of them are van-accessible with striped access aisles. This parking lot has been marked with a waypoint. 
        
        The trail surface is paved concrete and smooth. It is typically at least 5 feet wide. The majority of the trail is estimated to be in the gentle (3% or less) grade category. This trail will likely be navigable for most wheelchairs/mobility equipment or stroller users. There are benches and picnic tables along the route for resting."], 
    # ---------------------
    # - San Francisco, CA -
    # --------------------- 
    ["Lands End Trail", 37.78003, -122.51165, "Golden Gate National Recreation Area", "San Francisco", "California", "United States", "moderate", "Lands End Trail is a 3.4 mile heavily trafficked loop trail located near San Francisco, California that features beautiful wild flowers and is rated as moderate. The trail is primarily used for hiking, walking, running, and nature trips and is accessible year-round. Dogs are also able to use this trail but must be kept on leash.", 3.4, 538, "loop", "Lands End Trail is a favorite among both locals and visitors alike! This trail explores the historic Sutro Baths and offers great views of the Golden Gate Bridge and the Pacific Ocean. A must see for any visitor to San Francisco. Hikers and walkers in this area can also visit nearby Mile Rock Beach, Fort Miley, Palace of the Legion of Honor Museum, a USS San Francisco Memorial, the visitor center, and more.  Trails at Lands End offer a cliff-top walk through dark cypress and open grass and 30-mile views up and down the California coast. 

        This is the wildest, rockiest corner of San Francisco. A corner strewn with shipwrecks and a history of landslides. This area was once called Point Lobos by the Spanish, after the “lobos marinos” or sea lions that once made this area their home. Point Lobos Avenue, which was once a private toll road, now provides access to Lands End and the Camino Del Mar Trail.  The sea lions have since relocated to the calmer waters of San Francisco Bay."], 
    ["Batteries to Bluffs Trail", 37.80483, -122.47676, "Presidio of San Francisco", "San Francisco", "California", "United States", "easy", "Batteries to Bluffs Trail is a 2.2 mile heavily trafficked loop trail located near San Francisco, California that features beautiful wild flowers and is good for all skill levels. The trail offers a number of activity options and is accessible year-round.", 2.2, 449, "loop", "Experience the wild western shoreline on the Batteries to Bluffs Trail. This rugged route takes visitors along the cliffs bordering the Pacific Ocean, allowing hikers to explore historic gun batteries, seeps and springs, coastal plants and wildlife, and stunning views.

        This short trail provides a great way to see the bluffs near the Presidio and offers views of the Golden Gate Bridge and Marin that are hard to beat.  The trail has several places with steps and some climbing if you decide to take the side trip down to Marshall Beach - a quiet, isolated area surrounded by rocky serpentine cliffs with breathtaking views of the Golden Gate Bridge. Try hiking this trail near the end of the day to enjoy a long sunset over the Pacific Ocean and the lights of the Golden Gate Bridge."], 
    ["Mount Sutro Loop", 37.76135, -122.45194, "Mount Sutro Open Space Reserve", "San Francisco", "California", "United States", "moderate", "Mount Sutro Loop is a 2 mile heavily trafficked loop trail located near San Francisco, California that features beautiful wild flowers and is rated as moderate. The trail is primarily used for hiking, running, nature trips, and mountain biking and is accessible year-round. Dogs are also able to use this trail but must be kept on leash.", 2, 495, "loop", "Explore this nook of wilderness that is near the UCSF campus, this greenbelt has a native garden and is a great respite from busy urban life of the city. Although this loop can be accessed from several locations, the mapped route on this page begins along the Historic Trail at the intersection of 17th and Stanyan. Street parking is also available on Clarendon Avenue near Johnstone Drive.

        Starting along the Historic Trail, turn left at the wooden carving to get on the Fairy Gates Trail. Using the East Ridge Trail to reach the peak of Mt. Sutro, you will descend back down to the Historic Trail, which will wind you through the woods and back to the starting point."], 
    # ----------------
    # - New York, NY -
    # ---------------- 
    ["Mount Tammany: Red Dot and Blue Dot Loop Trail", 40.97342, -75.12188, "Worthington State Forest", "New York", "New Jersey", "United States", "moderate", "Mount Tammany: Red Dot and Blue Dot Loop Trail is a 3.6 mile heavily trafficked loop trail located near Pahaquarry, New Jersey that features a river and is rated as moderate. The trail is primarily used for hiking. Dogs are also able to use this trail.", 3.6, 1243, "loop", "Mount Tammany is one of the most popular hikes in New Jersey, and for good reason! The trail offers sweeping views of the Delaware Water Gap, without too much of a challenge. The trailhead is also easily accessed, right off of Interstate 80.

        Although there are several large parking areas, they do fill up quickly on warm weekends. It’s best to arrive early to secure a spot. Wherever you end up parking, it will be a short walk to the trailhead at the Dunfield Creek Natural Area Trailhead.
        
        This loop can be done in either direction, but most people choose the counter-clockwise route mapped on this page. There is a section along the Red Dot Trail that requires scrambling up a steep rocky face. This scramble is best done going up hill, so counter-clockwise up the Red Dot Trail and then down the Blue Dot Trail (Pahaquarry Trail).
        
        There are views the whole way up the Red Dot Trail. After making it to the summit, continue westward on the Blue Dot Trail. This trail has a more gradual decline, eventually passing a swimming hole with some small waterfalls. 
        
        You’ll take a left and briefly hike along Dunnfield Creek on the Appalachian Trail. After a short walk you’ll be back at the parking area.
        
        If you’re looking for something shorter, you can forego Mount Tammany and simply walk along Dunnfield Creek to the swimming hole instead."], 
    ["Bear Mountain Loop Trail", 41.3103, -73.99063, "Bear Mountains State Park", "", "New York", "United States", "moderate", "Bear Mountain Loop Trail is a 3.8 mile heavily trafficked loop trail located near Bear Mountain, New York that features a lake and is rated as moderate. The trail is primarily used for hiking and running and is best used from April until November. Dogs are also able to use this trail but must be kept on leash.", 3.8, 1154, "loop", "There is a fee per vehicle. Fees are collected on weekdays between 6/22-9/2. For the rest of the year, fees are only collected on the weekend. Empire Passholders can get in for free.

        Although relatively short, this great hike features some scrambling up rock slabs as the trail climbs to the Perkins Memorial Tower. Located near Hessian Lake in the Hudson Valley, this loop trail is a great option for a day trip from New York City. Be sure to arrive early as Bear Mountain State Park is a popular destination for hikers and runners on weekends.
        
        Starting at the parking lot near the Bear Mountain Inn, you’ll walk alongside Hessian Lake for a short distance before reaching the Major Welch Trail. This is where you’ll begin climbing as views of the Hudson River and Bear Mountain Bridge come into sight. Sections of this loop include hiking over flat rock faces. You’ll cross Perkins Memorial Drive, at which point you’ll be about a half mile from the tower and paved paths at the top.
        
        Descend along the Appalachian Trail and return to the parking lot. Be sure to stop at the overlook on the way down for a final view of the Hudson River!"], 
    ["Indian Head and Rainbow Falls", 44.14949, -73.7682, "Adirondack Mountain Reserve", "", "New York", "United States", "moderate", "Indian Head and Rainbow Falls is a 10.8 mile heavily trafficked loop trail located near Keene, New York that features a waterfall and is rated as moderate. The trail is primarily used for hiking, running, nature trips, and bird watching and is best used from April until October.", 10.8, 1978, "loop", "Beginning May 1, and through Oct. 31, 2021, DEC and AMR will require reservations for the 70 available parking spots at the AMR parking lot for daily access to trails on AMR property, as well as the Round Mountain and Noonmark Mountain trailheads accessed through AMR lands. 

        Walk-in users without a reservation will not be permitted. 
        
        Those arriving to Keene Valley via Greyhound or Trailways bus lines may access with a valid bus ticket from within 24 hours of arrival. Those arriving by bus must check in at the AMR hiker parking lot. The AMR parking lot is only accessible between the hours of 5 a.m. and 7 p.m. daily, with the exception of overnight parking.
        
        Advance reservations are required and can be made between 24 hours and two weeks in advance. Visitors can make reservations for day or overnight use, including overnight parking. It is not necessary to have a vehicle to make a reservation to hike. 
        
        Those being dropped off and those arriving by bicycle must check in at the AMR hiker parking Lot and produce a valid reservation. All bicycles must be left at the hiker parking lot where a bike rack will be provided and portable restrooms will be available at the parking lot for visitor use. 
        
        Visitors can begin registering at the new Hiker Reservation web portal, hikeamr.org, which will go live on April 15, with reservations beginning May 1.
        
        In an effort to keep the area safe, clean, and enjoyable for all users, parking is limited at other popular trailheads along the Route 73 corridor. Visitors should come prepared with back-up plans in case trailhead parking lots are full:
        Roadside parking on Route 73 in the vicinity of AMR is dangerous and illegal. Visitors should park only in designated lots and adhere to posted parking restrictions. Illegally parked vehicles will be ticketed and potentially towed at the owner's expense.
        
        Other restrictions for recreation on the AMR Conservation Easement continue to apply. These include, but are not limited to:
        Bicycles are not allowed past the parking area;
        Hikers must stay on marked hiking trails;
        Dogs are not allowed on the property;
        Hunting, trapping, and fishing are prohibited;
        The public is not allowed to enter on the shores, swim, or boat on any and all lakes, streams, or rivers, or cross the frozen lakes in winter;
        Entering buildings is prohibited
        
        A great family hike. Park at St Huberts in Keene, follow Lake Rd from Ausable Club to Gill Brook Trail. This pristine trail is dotted with waterfalls and great views. The destination -- Indian Head -- has amazing, iconic Adirondack high peak views. It's a long, but easy hike with no rock hopping or scrambles so is one of the most approachable day hikes in the Adirondack mountains.
         
        Beware that no dogs are allowed and this restriction is strictly enforced. The parking lot is across the highway from the Roaring Brook access to Giant Mt. and is at the southerly of the two junctions of Rt. 73 and Ausable Rd. (not Ausable Club Rd.) Beware of the No Parking signs along Rt. 73.  From the parking area, walk 1/2-mile up the road past a golf course. Just before reaching the large clubhouse, turn left on Lake Road and down between two tennis courts to the gate house and trail register. 
         
        This hike is now subject to advance registration. Go to hikeamr.org for details and to obtain a reservation.
        
        "],
    # ------------
    # - Michigan -
    # ------------ 
    ["Mosquito Falls and Chapel Falls via Chapel Loop", 46.51961, -86.46202, "Pictured Rocks National Lakeshore", "", "Michigan", "United States", "moderate", "Mosquito Falls and Chapel Falls via Chapel Loop is a 10.2 mile heavily trafficked loop trail located near Munising, Michigan that features a lake and is rated as moderate. The trail is primarily used for hiking and camping and is best used from April until October.", 10.2, 754, "loop", "SEASONAL ROAD CLOSURE: Roads leading to this trailhead are subject to seasonal closure. For more information, please visit https://www.nps.gov/piro/planyourvisit/index.htm.

        Chapel Loop takes you to both Mosquito Falls and Chapel Falls, with stunning views and options to pit stop at Mosquito Beach and Chapel Beach along the way. Start early from the large parking area so you can enjoy lots of time at each scenic overlook. Some parts of the trail run right along the cliff edge on Lake Superior, but not so much that it’s entirely dangerous. Chapel Beach at the bottom is the perfect treat for a long trek. Bring a swimsuit! Once you’re finished, catch Chapel Rock Trail back to the starting point.
        
        This route is around ten miles round trip, but there are many trails leading to various points around Chapel basin, so it is easy to customize your trip based on your needs. Dogs, however, are not allowed and users have reported there is a $180 fine for bringing dogs on the trail."], 
    ["Empire Bluff Trail", 44.79932, -86.05873, "Sleeping Bear Dunes National Lakeshore", "", "Michigan", "United States", "moderate", "Empire Bluff Trail is a 1.5 mile heavily trafficked out and back trail located near Empire, Michigan that features a lake and is rated as moderate. The trail offers a number of activity options and is best used from March until November. Dogs are also able to use this trail but must be kept on leash.", 1.5, 170, "outAndBack", "This beautiful trail climbs through a beech-maple forest rife with wildflowers to a high, coastal bluff featuring the iconic double-dune view that is the subject of paintings, posters, and postcards. Boardwalks and an observation deck atop this lofty perch look out over Lake Michigan and a large chunk of the national lakeshore. A few hill climbs (with some stairs built into the trails) on the way up to the bluff give this trip its moderate difficulty rating, but the effort is well worth it!

        Benches line the trail and there are several spots at the top to kick back and soak it all in. This is also a popular place to enjoy a sunset. Just a short time after those spectacular sunsets are over, the stars come out in a brilliance and profusion that you can rarely find on Lake Michigan. The pure darkness here makes this a favorite destination for viewing meteor showers. But come early, this place will be full of families out to enjoy the show."], 
    ["Penosha Trail", 31.93248, -106.44919, "Brighton State Recreation Area", "", "Michigan", "United States", "moderate", "Penosha Trail is a 5 mile heavily trafficked loop trail located near Brighton, Michigan that features a lake and is rated as moderate. The trail is primarily used for hiking and nature trips and is accessible year-round. Dogs are also able to use this trail but must be kept on leash.", 5, 387, "loop", ""], 
    # ------------
    # - Nebraska -
    # ------------ 
    ["Platte River State Park Trail Loop", 40.99206, -96.2111, "Platte River State Park", "", "Nebraska", "United States", "moderate", "Platte River State Park Trail Loop is a 6.7 mile heavily trafficked loop trail located near South Bend, Nebraska that features a river and is rated as moderate. The trail offers a number of activity options and is best used from March until October. Dogs and horses are also able to use this trail.", 6.7, 797, "loop", "A park entry permit is required and may be purchased at the park, statewide Game and Parks offices and permit vendors or in advance of your arrival online. "], 
    ["Flanagan Lake Trail", 41.31144, -96.1824, "Flanagan Lake Park", "", "Nebraska", "United States", "easy", "Flanagan Lake Trail  is a 5.2 mile moderately trafficked loop trail located near Elkhorn, Nebraska that features a lake and is good for all skill levels. The trail is primarily used for walking, running, and road biking and is accessible year-round. Dogs are also able to use this trail but must be kept on leash.", 5.2, 213, "loop", "This is a paved trail around a man-made lake. The path is wide and in great condition with several benches along the way to stop and relax. 

        Accessibility: There are 2 designated accessible spaces in the paved parking lot off of Himebaugh Avenue at the southeast end of the trail. Both of them are van-accessible with striped access aisles. The trail surface is paved concrete, smooth, and typically at least 5 feet wide. The estimated grade is mostly gentle (5% or less) except for steep sections at about 0.2, 2.7, 3.4, 4.6, and 5.1 miles when going counterclockwise. Wheelchair/mobility equipment or stroller users may need assistance in the steeper sections or to avoid them for safety. There are benches along the route for resting."], 
    ["Saddle Rock Trail", 41.82845, -103.70732, "Scotts Bluff National Monument", "", "Nebraska", "United States", "moderate", "Saddle Rock Trail is a 3 mile moderately trafficked out and back trail located near Gering, Nebraska that features beautiful wild flowers and is rated as moderate. The trail is primarily used for hiking, walking, nature trips, and bird watching and is accessible year-round. Dogs are also able to use this trail but must be kept on leash.", 3, 564, "outAndBack", "An excellent paved hike from the visitor's center to the top of Scotts Bluff. There are some very steep sections but the route is fully paved.

        Accessibility: There are 3 designated accessible spaces in the paved parking lot off of Old Oregon Trail at the southwest end of the trail. All of them are van-accessible with striped access aisles. The trail surface is paved asphalt. It is typically 3 to 5 feet wide. 
        
        The majority of the trail is estimated to be in the moderately steep grade category (8% or less) but there are steeper sections after about 0.4 miles when going northeast. Hikers using wheelchairs/mobility equipment or strollers may need assistance along most of this route due to the consistent sections above a 5% grade (especially if using manual equipment).
        
        There are wheelchair-accessible bathrooms at the southwest end of the trail. The visitor center is wheelchair-accessible. According to the park website, the most accessible portion of the trail is the first 700 yards from the visitor center with its own trail page here: https://www.alltrails.com/trail/us/nebraska/scotts-bluff-visitor-center-and-saddle-rock."], 
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