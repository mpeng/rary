const fetch = require("node-fetch");
const _ = require('lodash');

var appleCatalogs =  {
	"top" : ["Mac", "iPad", "iPhone", "Watch", "TV", "Music", "Accessories"],
	"mac" : ["MacBook", "MacBook Air", "MacBook Pro", "iMac", "iMac pro", "Mac Pro", "Mac Mini" ],
	"ipad" : ["iPad pro", "iPad", "iPad mini 4", "iPad Accessories"],
	"iphone" : ["iPhone X", "iPhone 8", "iPhone 7", "iPhone 6s", "iPhone SE" ],
	"watch" : ["Apple Watch Series 3", "Apple Watch Nike+", "Apple Watch Hermès", "Apple Watch Edition" ],
	"tv" : ["Apple TV 4K", "Apple TV", "TV Accessories" ],
	"music" : ["HomePod", "iPod touch", "Music Accessories"],
	"accessories" : ["Apple Accessories", "Mac Accessories", "iPad Accessories", "iPhone Accessories", "Apple Watch Accessories", "Music Accessories" ]
};

module.exports = (name = 'all', callback) => {
   if ( name != 'all' ) {		
		var rtn = _.get(appleCatalogs, name);
	    if ( rtn == null )
			rtn = {};	
   		return callback(null, rtn);		
   } else
   		return callback(null, appleCatalogs);		
};

