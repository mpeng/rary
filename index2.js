const lib = require('lib');
const request = require("request");
rary_util = require('rary_utils');
const _ = require('lodash');

function IsJsonString(str) {
    try {
        JSON.parse(str);
    } catch (e) {
        return false;
    }
    return true;
}





		var param = "{\"action\":\"findAll\", \"title\":\"John Churchill\", \"content\":\"To kill a mockingbird\" }";

		console.log(param + " is a valid JSON ? " + IsJsonString(param));

		lib.rary.functions.service( param ).then( function(result) {
	        console.log(  "MMMMMMMMMMMMMMMMMMMMMMMMM  " + param + " = " + result );	
			console.log(  typeof( result ) );
			console.log(  typeof( JSON.stringify( result ) ) );

			rary_util.printify(result);

		});


var str = "{ 'hello': 'world', places: ['Africa', 'America', 'Asia', 'Australia'] }"
str = eval('('+str+')');
console.log( "str=" + str.places[0] );

var jsonObj = { hello: 'world', places: ['Africa', 'America', 'Asia', 'Australia'] }

console.log( "jsonObj=" + jsonObj.places[1] );

var jsonstring = '{ "name":"John", "age":30, "city":"New York"}';
var obj = JSON.parse( jsonstring );
console.log( "str=" + obj + ", " + obj.age );

//str =  '{ "name":"John", "age":30, "city":"New York"}';
str =  'aa';

console.log( str + " is a valid JSON ? " + IsJsonString( str ));
console.log( str + " is a valid JSON ? " + IsJsonString2( str ));

console.log( str + " is a valid JSON ? " + IsJsonString2( str ));
function IsJsonString(str) {
    try {
        JSON.parse(str);
    } catch (e) {
        return false;
    }
    return true;
}


function IsJsonString2(str) {
    try {
        eval('('+str+')');
    } catch (e) {
        return false;
    }
    return true;
}


