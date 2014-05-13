var env = require('../env.json');
var twitter = require('twit');
//var ig = require('instagram-node').instagram();

// Initialize our Twitter module
var twit = new twitter({
    consumer_key: env.twitter_consumer_key,
    consumer_secret: env.twitter_consumer_secret,
    access_token: env.twitter_access_token,
    access_token_secret: env.twitter_access_token_secret
});

// Initialize our Instagram module
//ig.use({
//    client_id: env.instagram_client_id,
//    client_secret: env.instagram_client_secret
//})
//
// Initialize our Foursquare  module
//var foursquareConfig = {
//  'secrets' : {
//    'clientId' : env.foursquare_clientId,
//    'clientSecret' : env.foursquare_clientSecret,
//    'redirectUrl' : 'http://localhost:3000/callback'
//  }
//};

//var foursquare = require('node-foursquare')(foursquareConfig);

exports.index = function(req, res){
  res.render('index', { title: 'Social Wall' });
};

exports.tweets = function(req, res) {
    twit.get('statuses/user_timeline', { screen_name: 'ProBirdRights', count: 10 }, function(err, data, response) {
        res.json(data);
    });
};

exports.instagram = function(req, res) {
    // ig.user_media_recent('USER_ID_HERE', function(err, medias, pagination, limit) {
    //     res.json(medias);
    // });
};

exports.foursquare = function(req, res) {
    // foursquare.Venues.getHereNow('VENUE_ID_HERE', null, null, function(error, data) {
    //     res.json(data);
    // });
};

exports.socialfeed = function(req, res) {
	
	var data = [
    {
			"network": "twitter",
        "text": "You notice how bagel have a hole in them? But where is the extra bagel go????? WAK UP AMERICA. #GovormentBaggelConspiracy",
        "user": {
            "id": 448476934,
            "name": "birdsrightsactivist",
            "screen_name": "ProBirdRights",
        }
    },
    {
			"network": "twitter",
        "text": "My ice cram cone melt before I have it all. THANKS GLOBAL WARMING ALARMISTS. #scienceKills(icecram)",
        "user": {
            "id": 448476934,
            "name": "birdsrightsactivist",
            "screen_name": "ProBirdRights",
        }
    },
    {
			"network": "twitter",
        "text": "Hello youth: I am a cool one just like you I wear a backward hat. Choose bird not drug. Skateboards.",
        "user": {
            "id": 448476934,
            "name": "birdsrightsactivist",
            "screen_name": "ProBirdRights",
        }
    },
    {
			"network": "twitter",
        "text": "Dear medical: what if instead of \"doctor\" and \"obamahealth\" we have breadicine? #iHaveCuredScience",
        "user": {
            "id": 448476934,
            "name": "birdsrightsactivist",
            "screen_name": "ProBirdRights",
        }
    },
    {
			"network": "twitter",
        "text": "I should be the head of things.",
        "user": {
            "id": 448476934,
            "name": "birdsrightsactivist",
            "screen_name": "ProBirdRights",
        }
		},
    {
			"network": "instagram",
        "text": "You notice how bagel have a hole in them? But where is the extra bagel go????? WAK UP AMERICA. #GovormentBaggelConspiracy",
        "user": {
            "id": 448476934,
            "name": "birdsrightsactivist",
            "screen_name": "ProBirdRights",
        }
    },
    {
			"network": "instagram",
        "text": "You notice how bagel have a hole in them? But where is the extra bagel go????? WAK UP AMERICA. #GovormentBaggelConspiracy",
        "user": {
            "id": 448476934,
            "name": "birdsrightsactivist",
            "screen_name": "ProBirdRights",
        }
    },
    {
			"network": "instagram",
        "text": "You notice how bagel have a hole in them? But where is the extra bagel go????? WAK UP AMERICA. #GovormentBaggelConspiracy",
        "user": {
            "id": 448476934,
            "name": "birdsrightsactivist",
            "screen_name": "ProBirdRights",
        }
    },
    {
			"network": "instagram",
        "text": "You notice how bagel have a hole in them? But where is the extra bagel go????? WAK UP AMERICA. #GovormentBaggelConspiracy",
        "user": {
            "id": 448476934,
            "name": "birdsrightsactivist",
            "screen_name": "ProBirdRights",
        }
    },
    {
			"network": "instagram",
        "text": "You notice how bagel have a hole in them? But where is the extra bagel go????? WAK UP AMERICA. #GovormentBaggelConspiracy",
        "user": {
            "id": 448476934,
            "name": "birdsrightsactivist",
            "screen_name": "ProBirdRights",
        }
    },
    {
			"network": "instagram",
        "text": "You notice how bagel have a hole in them? But where is the extra bagel go????? WAK UP AMERICA. #GovormentBaggelConspiracy",
        "user": {
            "id": 448476934,
            "name": "birdsrightsactivist",
            "screen_name": "ProBirdRights",
        }
    },
    {
			"network": "foursquare",
        "text": "You notice how bagel have a hole in them? But where is the extra bagel go????? WAK UP AMERICA. #GovormentBaggelConspiracy",
        "user": {
            "id": 448476934,
            "name": "birdsrightsactivist",
            "screen_name": "ProBirdRights",
        }
    }
]

	
	
	res.json(data);
};
