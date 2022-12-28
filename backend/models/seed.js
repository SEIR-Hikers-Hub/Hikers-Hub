//dependencies

const db = require("./")

const admin_user =
{
    username: 'admin',
    password: 'admin',
    admin: true
}

const initial_trails = [
    {
        name: 'Round Valley Regional Preserve',
        state: 'CA',
        location: 'Brentwood, CA',
        difficulty: 'Beginner',
        description: 'Miwok trail runs through Round Valley, Los Vaqueros and Morgan Territory preserves.',
        terrain: 'hill',
        activity: 'hiking',
        waterfalls: 'no',
        distance: 5,
        image: 'https://i.imgur.com/Hkz4Dn3.jpg'
    },
    {
        name: 'Twenty Lakes Basin and Saddlebag Lake Loop',
        state: 'CA',
        location: 'Mammoth Lakes, CA',
        difficulty: 'Intermediate',
        description: 'A moderately challenging route, it takes an average of 3 h 2 min to complete. This is a popular trail for backpacking, fishing, and hiking, but you can still enjoy some solitude during quieter times of day.',
        terrain: 'hill',
        activity: 'backpacking',
        waterfalls: 'yes',
        distance: 8,
        image: 'https://boundtoexplore.com/wp-content/uploads/2020/07/20-lakes-basin-19.jpg'
    },
    {
        name: 'Brushy Peak Regional Preserve',
        state: 'CA',
        location: 'Livermore, CA',
        difficulty: 'Intermediate',
        description: 'Brushy Peak and West side loop trail spans 4.5 miles on very hilly terrain',
        terrain: 'hill',
        activity: 'hiking',
        waterfalls: 'no',
        distance: 5,
        image: 'https://i.imgur.com/KMwaUeK.jpg'
    },
    {
        name: 'Alamere Falls and Wildcat Camp via Bear Valley Trail',
        state: 'CA',
        location: 'Point Reyes Station, CA',
        difficulty: 'Advanced',
        description: 'Beautiful trail, lovely view of the coast with a waterfall at the end, 18 mile round trip from Bear Valley trailhead',
        terrain: 'hill',
        activity: 'backpacking',
        waterfalls: 'yes',
        distance: 18,
        image: 'https://i.imgur.com/RiEaatH.jpg'
    },
    {
        name: 'Bunny Flat to Panther Meadow',
        state: 'CA',
        location: 'Mt Shasta, CA',
        difficulty: 'Beginner',
        description: 'Out and back trail, 7 miles, easy route. Popular for camping and hiking. Best times to visit are June through October',
        terrain: 'hill',
        activity: 'hiking',
        waterfalls: 'yes',
        distance: 7,
        image: 'https://i.imgur.com/4XDMhn1.jpg'
    },
    {
        name: 'Mosaic Canyon Trail',
        state: 'CA',
        location: 'Death Valley, CA',
        difficulty: 'Intermediate',
        description: 'Generally considered a moderately challenging route, it takes an average of 1 h 57 min to complete.',
        terrain: 'desert',
        activity: 'hiking',
        waterfalls: 'no',
        distance: 5,
        image: 'https://images.squarespace-cdn.com/content/v1/5ca3e1daca525b6d60ba7012/1557192379739-SGJ09O2FFUZ0KIEIAWZT/IMG_5814.jpg'
    },
    {
        name: 'Tumalo Creek Falls via North Fork Trail',
        state: 'OR',
        location: 'Bend, OR',
        difficulty: 'Intermediate',
        description: 'Out and back trail, 6 miles, moderate route. Popular for biking and hiking. Best times to visit are March through October',
        terrain: 'hill',
        activity: 'hiking',
        waterfalls: 'yes',
        distance: 6,
        image: 'https://i.imgur.com/9BOAdPy.jpg'
    },
    {
        name: 'Wallace Falls Trail',
        state: 'WA',
        location: 'Gold Bar, WA',
        difficulty: 'Intermediate',
        description: 'Hike along the Wallace River and enjoy views of several waterfalls, all of varying shapes and sizes.',
        terrain: 'hill',
        activity: 'hiking',
        waterfalls: 'yes',
        distance: 6,
        image: 'https://images.world-of-waterfalls.com/Wallace_Falls_017_05262006.jpg'
    },
    {
        name: 'Vance Creek Bridge',
        state: 'WA',
        location: 'Matlock, WA',
        difficulty: 'Beginner',
        description: 'An easy hike along a gravel road to an old loggin bridge. Being on the bridge is prohibited due to safety reasons.',
        terrain: 'hill',
        activity: 'hiking',
        waterfalls: 'no',
        distance: 1,
        image: 'http://www.highestbridges.com/wiki/images/0/00/VanceCreekDrone.jpg'
    },
    {
        name: 'Colchuck Lake',
        state: 'WA',
        location: 'Leavenworth, WA',
        difficulty: 'Intermediate',
        description: 'A aquamarine, icy lake, nestled between some of Washington\'s highest peaks. ',
        terrain: 'mountain',
        activity: 'hiking',
        waterfalls: 'no',
        distance: 8,
        image: 'https://westcoastwayfarers.com/wp-content/uploads/2021/05/Hiking-to-Colchuck-Lake-at-sunrise-scaled.jpg'
    },
    {
        name: 'Tolmie Peak',
        state: 'WA',
        location: 'Ashford, WA',
        difficulty: 'Intermediate',
        description: 'Hike up to an old fire lookout that offers a great view of Mount Rainier sitting atop a beautiful turquoise lake.',
        terrain: 'mountain',
        activity: 'hiking',
        waterfalls: 'no',
        distance: 8,
        image: 'https://149799271.v2.pressablecdn.com/wp-content/uploads/2014/07/IMG_4216.jpg'
    },
    {
        name: 'Skyline Loop Trail',
        state: 'WA',
        location: 'Ashford, WA',
        difficulty: 'Intermediate',
        description: 'Hike up the mountain to a fire lookout sitting at the very top with views of the neHike along the base of the Mount Rainier Glacier. Views of cascading waterfalls, large glaciers, sprawling meadows and vibrant rivers surround the trail.',
        terrain: 'mountain',
        activity: 'hiking',
        waterfalls: 'yes',
        distance: 6,
        image: 'https://t5z4d2m6.rocketcdn.me/wp-content/uploads/2020/04/DSC06289.jpg'
    },
    {
        name: 'Mount Pilchuck',
        state: 'WA',
        location: 'Verlot, WA',
        difficulty: 'Advanced',
        description: 'Hike up the mountain to a fire lookout sitting on the peak. You will be met with views of mountains and surrounding valleys.',
        terrain: 'mountain',
        activity: 'hiking',
        waterfalls: 'no',
        distance: 6,
        image: 'https://i.pinimg.com/originals/f3/39/9b/f3399bab75e692fdf4d9dceb71eba509.jpg'
    },
    {
        name: 'Rattlesnake Ledge',
        state: 'WA',
        location: 'Snoqualmie, WA',
        difficulty: 'Beginner',
        description: 'Hike up to one of Washington\'s most iconic views, overlooking a beautiful serene lake.',
        terrain: 'mountain',
        activity: 'hiking',
        waterfalls: 'no',
        distance: 4,
        image: 'https://mtsgreenway.org/wp-content/uploads/2021/04/RattlesnakeLedge_KatieEgresi_032321-scaled.jpg'
    },
    {
        name: 'The Enchantments',
        state: 'WA',
        location: 'Leavenworth, WA',
        difficulty: 'Advanced',
        description: 'An alpine trail of beautiful pristine lakes, surrounded by granite mountains, mountain goats, and tall peak.',
        terrain: 'mountain',
        activity: 'backpacking',
        waterfalls: 'yes',
        distance: 18,
        image: 'https://s27363.pcdn.co/wp-content/uploads/2020/08/Enchantments-for-Facebook-1.jpg'
    },
    {
        name: 'Feather Falls',
        state: 'CA',
        location: 'Oroville, CA',
        difficulty: 'Intermediate',
        description: 'Hike through the Plumas National Forest to Feather Falls, a 640 foot waterfall',
        terrain: 'hill',
        activity: 'hiking',
        waterfalls: 'yes',
        distance: 9
    },
    {
        name: 'Grizzly Peak Trail',
        state: 'OR',
        location: 'Ashland, OR',
        difficulty: 'Intermediate',
        description: 'It takes an average of 2 h 18 min to complete. This is a very popular area for hiking. The best times to visit this trail are May through November.',
        terrain: 'mountain',
        activity: 'backpacking',
        waterfalls: 'no',
        distance: 5,
        image: 'https://trekbaron.com/wp-content/uploads/2020/10/grizzly-peak-or-Oct62020-min.jpg'
    },
    {
        name: 'Mosaic Canyon Trail',
        state: 'CA',
        location: 'Death Valley, CA',
        difficulty: 'Intermediate',
        description: 'Generally considered a moderately challenging route, it takes an average of 1 h 57 min to complete.',
        terrain: 'desert',
        activity: 'hiking',
        waterfalls: 'no',
        distance: 5,
        image: 'https://images.squarespace-cdn.com/content/v1/5ca3e1daca525b6d60ba7012/1557192379739-SGJ09O2FFUZ0KIEIAWZT/IMG_5814.jpg'
    },
    {
        name: 'South Sisters Trail',
        state: 'OR',
        location: 'Sisters, OR',
        difficulty: 'Advanced',
        description: 'Head out on this 12 mile out and back trail near Sisters, Oregon. This is a challenging route, more suitable for backpacking. Best times to visit are from June through October',
        terrain: 'hill',
        activity: 'backpacking',
        waterfalls: 'no',
        distance: 12,
        image: 'https://i.imgur.com/kUYSs8b.jpg'
    },
    {
        name: 'Half Dome',
        state: 'CA',
        location: 'Yosemite Valley, CA',
        difficulty: 'Advanced',
        description: 'The trail to Half Dome from Yosemite Valley is an extremely steep and strenuous hike covering over 14-16 miles. Hikers gain 4,800 feet of elevation along the trail that passes highlights such as Vernal Fall and Nevada Fall, before reaching the cables on Half Domes steep granite domes.',
        terrain: 'hill',
        activity: 'hiking',
        waterfalls: 'yes',
        distance: 15,
        image: 'https://madera.objects.liquidweb.services/photos/16842-half-dome-closeup-from-glacier-point-steve-montalto-hmi-Rectangle-600x400.jpg'
    },
    {
        name: 'Lake Serene',
        state: 'WA',
        location: 'Skykomish, WA',
        difficulty: 'Advanced',
        description: 'The hike to lake Serene is a 7 Mile round trip with 1,300 feet of elevation gain. As you can imagine thats a lot of climbing. Lots and lots of stairs. But the hike to get to the lake is worth it. The water is a gorgeous color and it is so peaceful and quiet. It is secluded from the rest of the world as it sits so high surrounded by mountains. The water comes from the glaciers so it is very cold. You can get some of the best views from lunch Rock. You can also get amazing views from the overlooks. I also recommend taking the side trail to bridal veil falls. Again lots of stairs to get up there but totally worth it. I would totally do this like again. The trail is well maintained and marked. It is just a very strenuous hike to get to the top. Make sure to bring water. This hike took about four and a half hours to complete including the side trail. This does not account for the fact that we stopped at the top for at least 30 minutes. I would recommend saving the day for it.',
        terrain: 'hill',
        activity: 'hiking',
        waterfalls: 'yes',
        distance: 8,
        image: 'https://images.rove.me/w_1920,q_85/kbfesdvqdquiu9rukkgo/seattle-lake-serene-and-bridal-veil-falls.jpg'

    },
    {
        name: 'Natural Bridges Viewpoint Trail',
        state: 'OR',
        location: 'Brookings, OR',
        difficulty: 'Beginner',
        description: 'Natural Bridges are beautiful ocean arch rocks that tower over the foamy sea on the Oregon Coast. However, the steep cliffs in the area make this spot dangerous. It is recommended to always stay on the marked trails and viewpoint areas. It is not safe to cross into closed areas or scramble to try to get closer to the bridges.',
        terrain: 'coast',
        activity: 'hiking',
        waterfalls: 'no',
        distance: 1,
        image: 'https://www.trailkeepersoforegon.org/wp-content/uploads/2022/05/a2634a93e4841091b05272a649631b8d-1ZkZlW.tmp_.jpg'

    }, {
        name: 'Garfield Peak',
        state: 'OR',
        location: 'Crater Lake National Park, OR',
        difficulty: 'Beginner',
        description: 'This is the one of the most popular hiking trails, primarily due to its close proximity to the Rim Village and Crater lake Lodge. There are spectacular panoramic views of the entire lake and other high cascades features to the north and to the south the Klamath Basin and southern Cascade features.',
        terrain: 'mountain',
        activity: 'hiking',
        waterfalls: 'no',
        distance: 4,
        image: 'https://cdn2.apstatic.com/photos/hike/7009808_medium_1554397219.jpg'

    },
    {
        name: 'Pogonip',
        state: 'CA',
        location: 'Santa Cruz, CA',
        difficulty: 'Intermediate',
        description: 'The word Pogonip means icy fog in Shoshone. The Pogonip area consists of a mix of forested areas and meadow. Of the 8 miles of singletrack and fire road in the Pogonip, approximately 2.5 miles are open to bikes: Rincon Connector, Rincon Road and U-Con Trail plus the MBoSC-built Emma McCrary Trail, a beginner friendly, 1.5 mile multi-use trail that provides vehicle-free access to UCSC from downtown Santa Cruz.',
        terrain: 'mountain',
        activity: 'mountain-biking',
        waterfalls: 'no',
        distance: 11,
        image: 'https://images.singletracks.com/blog/wp-content/uploads/2017/02/pogonip.jpg'

    },
    {
        name: 'Miller Jeep Trail',
        state: 'CA',
        location: 'Frazier Park, CA',
        difficulty: 'Advanced',
        description: 'Generally takes an average of 14 h 56 min to complete. This trail is great for off-road driving, and it\'s unlikely you\'ll encounter many other people while exploring.',
        terrain: 'mountain',
        activity: 'offroading',
        waterfalls: 'no',
        distance: 30,
        image: 'https://images-prod.trailsoffroad.com/trails/1019/trail_reviews/1536252825687_resized_1%20Hard%20spot%20of%20me.jpg'
    }
]

db.Trail.deleteMany({});
db.User.deleteMany({});

db.Trail.create(initial_trails, (err, trails) => {

    if (err) {
        console.log("Error on creating trails:", err)
    } else {
        console.log("Created", trails.length, "trails")
    }

    db.User.create(admin_user, (err, user) => {
        if (err) {
            console.log("Error on creating user:", err)
        } else {
            console.log("Created", user.length, "user")
        }
    })

})