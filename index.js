const lib = require('lib');
const request = require("request");
rary_util = require('rary_utils');
const _ = require('lodash');

/*  convert an object of array into a series of words that Alexa can speak. i.e.: '["iphone", "iphone x"]' -> 'iphone,iphone x' */
function arrayWordify( anArray) {
	return JSON.stringify( anArray ).replace(/\[|\]|\"/g, '');
}


function wordify( str ) {
	return str.replace(/\_|\_|\"/g, ' ');
}


function prettify( object ) {
	return JSON.parse(JSON.stringify(object));
}

function printify( object ) {
	console.dir(prettify(object), {depth: null, colors: true})
}

param = { a: 3, b: 4 };

lib.rary.functions['@dev']( "Michael" ).then( function(result) {
	console.log(  "==========library function result = " + result );	
});

lib.rary.functions( "Michael" ).then( function(result) {
	printify(result);				
});

// https://rary.lib.id/functions/getAddresses/?name=John

lib.rary.functions.add( param ).then( function(result) {
	console.log(  "**********library function result = " + result );	
});

lib.rary.functions.getAddresses("John").then( function(result) {
	printify(result);				
});

lib.mpeng.mathgenius['@dev'].add( param ).then( function(result) {
	console.log(  param.a + " + " + param.b + " = " + result );	
});

lib.mpeng.mathgenius['@dev'].multiply( param ).then( function(result) {
	console.log(  param.a + " x " + param.b + " = " + result );	
});

lib.mpeng.mathgenius['@dev'].substract( param ).then( function(result) {
	console.log(  param.a + " - " + param.b + " = " + result );	
});

promise = lib.mpeng.mathgenius['@dev'].multiply( param ).then( function(result){ 
	return result + 1;
});

promise.then( function(result) {
	console.log( result );	
});

promise = lib.mpeng.mathgenius['@dev'].getAllPatients( "john" ).then( function(result){ 
	console.log( "getAllPatients 1=" + JSON.stringify(result) );	
});


stdlibURLRoot =
"http://audenty.herokuapp.com/rest/service/getAllAddresses";

request.get(stdlibURLRoot, (error, response, body) => {
  response =  body;
  console.log( response + " END");
});


promise = lib.mpeng.mathgenius['@dev'].multiply( param ).then( function(result){ 
	console.log("Hi");
});


console.log([1,2]); console.dir([1,2]);


var param1 = "top";

var appleCatalogs =  {
	"top" : ["Mac", "iPad", "iPhone", "Watch", "TV", "Music", "Accessories"],
	"mac" : ["MacBook", "MacBookAir"],
	"ipad" : ["iPad pro", "iPad mini 4"],
	"iphone" : ["iPhone X", "iPhone 8"],
	"watch" : ["Apple Watch Series 3"],
	"tv" : ["Apple TV 4K"],
	"music" : ["HomePod", "iPod touch"],
	"accessories" : ["Apple Accessories"]
};
console.log("----------------");
printify(appleCatalogs.top);		
console.log("----------------");



stdlibURLRoot =
"https://rary.lib.id/functions/getAppleCatalogs/?name=iphone";

request.get(stdlibURLRoot, (error, response, body) => {
  response =  body;
  printify( response + " END");
});


lib.rary.functions.getAppleCatalogs( "iphone" ).then( function(result){ 
	rary_util.printify(result + " ====!!");
});

promise = lib.rary.functions.getAppleCatalogs( "iphone" );

promise.then(
  function(data) {
    /* process the data */
  	rary_util.printify("----------------" + data + " ====##==== " + JSON.stringify(data));
  },
  function(error) {
    /* handle the error */
  	rary_util.printify("----------------" + error + " ====KK");
  }
);


		promise = lib.rary.functions.getAppleCatalogs( "iphone" );

		promise.then(
		  function(data) {
			/* process the data */
			console.log("----------------" + data + "----------------" + JSON.stringify(data));
		  },
		  function(error) {
			/* handle the error */
			console.log("----------------" + error + "----------------");
		  }
		);



		var tt = "all";
		if ( tt == 'all' ) 
			console.log('equal=============================');
		else	
			console.log('not equal++++++++++++++++++++++++++++++');


			var a = null;

			console.log("Check null == " + ( a == null ));
			console.log("Check null === " + ( a === null ));





			        /* todo */
        var param = { a: 3, b: 4 };
        lib.mpeng.mathgenius['@dev'].add( param ).then( function(result) {
	        console.log(  "FFFFFFFFFFFFFFFFFFFFFF stdlib " + param.a + " + " + param.b + " = " + result );	
        });
		param = "iphone";

var re = /apples/gi;
var str = '[Apples are round, and apples are juicy.]';
var newstr = str.replace(re, 'oranges');
console.log("0000000000000000" + newstr);  // oranges are round, and oranges are juicy.
		
		lib.rary.functions.getAppleCatalogs( param ).then( function(result) {
	        console.log(  "HHHHHHHHHHHHHHHHHHHHHHHHHHH " + param + " = " + result );	
			console.log(  typeof( result ) );
			console.log(  typeof( JSON.stringify( result ) ) );

			var arrayStr = JSON.stringify( result );
			console.log( "aaa" + arrayStr );
			arrayStr = arratStr.replace('/iPhone X/i', 'Toy');
			console.log( "bbb" + arrayStr );
		});

		param = "iphone X";

		lib.rary.functions.getAppleProducts( param ).then( function(result) {
	        console.log(  "IIIIIIIIIIIIIIIIIIIIIIIIIII  " + param + " = " + result );	
			console.log(  typeof( result ) );
			console.log(  typeof( JSON.stringify( result ) ) );

			rary_util.printify(result);

			var topCat =  _.get(result, "name");
			rary_util.printify("topCat=" + topCat + "=");
			topCat =  _.get(result, "options.model.key");
			rary_util.printify("topCat=" + topCat + "=");
			topCat =  _.get(result, "shippingInformation.deliveryInformation.destinations[0].method");
			rary_util.printify("shippingMethod=" + topCat + "=");

		});
*/

		console.log( "KKKKKKKKK=" + wordify( "DOMESTIC_SHIPPING" ) );



		lib.rary.functions.service( param ).then( function(result) {
	        console.log(  "MMMMMMMMMMMMMMMMMMMMMMMMM  " + param + " = " + result );	
			console.log(  typeof( result ) );
			console.log(  typeof( JSON.stringify( result ) ) );

			rary_util.printify(result);

			var topCat =  _.get(result, "name");
			rary_util.printify("topCat=" + topCat + "=");
			topCat =  _.get(result, "options.model.key");
			rary_util.printify("topCat=" + topCat + "=");
			topCat =  _.get(result, "shippingInformation.deliveryInformation.destinations[0].method");
			rary_util.printify("shippingMethod=" + topCat + "=");

		});

		console.log( "KKKKKKKKK=" + wordify( "DOMESTIC_SHIPPING" ) );
