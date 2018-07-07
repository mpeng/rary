



const lib = require('lib');
const request = require("request");
rary_util = require('rary_utils');
const _ = require('lodash');

//https://translation.googleapis.com/language/translate/v2?key=AIzaSyCnckrcwXKq3L6mooYIZA5hAO20hli5ZWQ&target=fr&q=%22Hello%22
const GOOGLE_HOST = 'translation.googleapis.com';
const GOOFLE_PATH = '/language/translate/v2?key=AIzaSyCnckrcwXKq3L6mooYIZA5hAO20hli5ZWQ';

const superagent = require('superagent');
 
superagent.get('https://translation.googleapis.com/language/translate/v2')
.query({ key: 'AIzaSyCnckrcwXKq3L6mooYIZA5hAO20hli5ZWQ', target: 'fr', q: 'Li is beautiful !' })
.end((err, res) => {
  if (err) { return console.log(err); }
  console.log("Herepp1==" + JSON.parse(res.text).data.translations[0].translatedText);
});

const URL = "https://translation.googleapis.com//language/translate/v2?key=AIzaSyCnckrcwXKq3L6mooYIZA5hAO20hli5ZWQ&target=fr&q=%22Hello%22";
superagent.get( URL )
.end((err, res) => {
  if (err) { return console.log(err); }
  console.log("Herepp2==" + JSON.parse(res.text).data.translations[0].translatedText);
});


getTargetSentences( "fr", "Richard is a boy" );

/*  convert an object of array into a series of words that Alexa can speak. i.e.: '["iphone", "iphone x"]' -> 'iphone,iphone x' */
function arraysWordify( anArray) {
	return JSON.stringify( anArray ).replace(/\[|\]|\"|\,/g, ' ');
}

function getTargetSentences( targetLangage, sourceSentences ) {
	superagent.get('https://translation.googleapis.com/language/translate/v2')
	.query({ key: 'AIzaSyCnckrcwXKq3L6mooYIZA5hAO20hli5ZWQ', target: targetLangage, q: sourceSentences })
	.end((err, res) => {
		  if (err) { return console.log(err); }
		  console.log("Herepp1==" + JSON.parse(res.text).data.translations[0].translatedText);
		  return JSON.parse(res.text).data.translations[0].translatedText;
	});
}

function wordify( str ) {
	return str.replace(/\_|\_|\"/g, ' ');
}

function wordify2( str ) {
	return str.replace(/\"|\\|\[|\]/g, '');
}

function prettify( object ) {
	return JSON.parse(JSON.stringify(object));
}

function printify( object ) {
	console.dir(prettify(object), {depth: null, colors: true})
}




function printAll(a, b ) {
	if ( a ) console.log( "aa=" + a );	
	if ( b ) console.log( "bb=" + b );	
}

function printAll(a, b, c, d) {
	if ( a ) console.log( "a=" + a );	
	if ( b ) console.log( "b=" + b );	
	if ( c ) console.log( "c=" + c );	
	if ( d ) console.log( "d=" + d );	
}

var notes = [{"_id":"5b05538536d2ec648b5769ed","title":"home","content":"\"go to pta meeting\"","createdAt":"2018-05-23T11:41:57.906Z","updatedAt":"2018-05-23T11:41:57.906Z","__v":0},{"_id":"5b05545d36d2ec77aa5769f2","title":"home","content":"\"go to pta meeting\"","createdAt":"2018-05-23T11:45:33.445Z","updatedAt":"2018-05-23T11:45:33.445Z","__v":0},{"_id":"5b05635c5e27edc317c66d59","title":"home","content":"\"buy milk\"","createdAt":"2018-05-23T12:49:32.775Z","updatedAt":"2018-05-23T12:49:32.775Z","__v":0},{"_id":"5b05636e5e27eda047c66d5a","title":"home","content":"\"buy milk\"","createdAt":"2018-05-23T12:49:50.394Z","updatedAt":"2018-05-23T12:49:50.394Z","__v":0},{"_id":"5b0563a75e27edfe93c66d5c","title":"home","content":"\"go to pta meeting\"","createdAt":"2018-05-23T12:50:47.111Z","updatedAt":"2018-05-23T12:50:47.111Z","__v":0},{"_id":"5b05834f86a7f0fbc9326436","title":"home","content":"go to pta meeting","createdAt":"2018-05-23T15:05:51.827Z","updatedAt":"2018-05-23T15:05:51.827Z","__v":0},{"_id":"5b0586f091408e8428f8a22e","title":"home","content":"buy milk","createdAt":"2018-05-23T15:21:20.064Z","updatedAt":"2018-05-23T15:21:20.064Z","__v":0}];

var topCat =  _.uniq(_.map(notes, "content"), "content" );

console.log( "topCat=" + topCat + ", " + typeof JSON.stringify(topCat) + ",\n" + wordify2(JSON.stringify(topCat)) );

printAll( "A", "B", {"a":"b"}, [1, 2] );
printAll( "A" );


var data = "Li is pretty in spanish";
console.log(data.split(" ").splice(-1)[0]);



var str=data.split(' ');
var lastword=str.pop();
str.pop();
console.log(str.join(' '));


		var sourceSentences = "Li is pretty in spanish";
/*		
		var targetLanguage = sourceSentences.split(" ").splice(-1)[0];

		console.log( sourceSentences.split(" ").reverse().slice(2).reverse().join(" ") + "==" + targetLanguage );
*/


		var targetLanguage = sourceSentences.split(" ").splice(-1)[0];
		var sourceWords = sourceSentences.split(" ").reverse().slice(2).reverse().join(" ");
		var targetLanguageCode = "fr";

		console.log("sourceWords=" + sourceWords + ", targetLanguage=" + targetLanguage );



var a = ['','one ','two ','three ','four ', 'five ','six ','seven ','eight ','nine ','ten ','eleven ','twelve ','thirteen ','fourteen ','fifteen ','sixteen ','seventeen ','eighteen ','nineteen '];
var b = ['', '', 'twenty','thirty','forty','fifty', 'sixty','seventy','eighty','ninety'];


function inWords (num) {
    if ((num = num.toString()).length > 9) return 'overflow';
    n = ('000000000' + num).substr(-9).match(/^(\d{2})(\d{2})(\d{2})(\d{1})(\d{2})$/);
    if (!n) return; var str = '';
    str += (n[1] != 0) ? (a[Number(n[1])] || b[n[1][0]] + ' ' + a[n[1][1]]) + 'crore ' : '';
    str += (n[2] != 0) ? (a[Number(n[2])] || b[n[2][0]] + ' ' + a[n[2][1]]) + 'lakh ' : '';
    str += (n[3] != 0) ? (a[Number(n[3])] || b[n[3][0]] + ' ' + a[n[3][1]]) + 'thousand ' : '';
    str += (n[4] != 0) ? (a[Number(n[4])] || b[n[4][0]] + ' ' + a[n[4][1]]) + 'hundred ' : '';
    str += (n[5] != 0) ? ((str != '') ? 'and ' : '') + (a[Number(n[5])] || b[n[5][0]] + ' ' + a[n[5][1]]) + 'only ' : '';
    return str;
}





function noNumber( longsentencewithnumber ) {
		var arrayOfStrings = longsentencewithnumber.split(' ');
		for (var i = 0, len = arrayOfStrings.length; i < len; i++) {
			if ( !isNaN( arrayOfStrings[i] ))
				arrayOfStrings[i] = inWords( arrayOfStrings[i] );
		}

	    return	arraysWordify(arrayOfStrings) ;
} 

console.log( "1123=" + inWords( 123 ) );
console.log( "1=" + inWords( 1 ) );
console.log( "This is 31231=" + noNumber( "This is 31231" ) );
var longsentencewithnumber = "how to say 1  ";

console.log( longsentencewithnumber );
console.log( noNumber(longsentencewithnumber) );

		

var numberToWords = require('number-to-words');
console.log( numberToWords.toWords(13)); // => “thirteen”
console.log( numberToWords.toWords(31231)); // => “thirteen”
console.log( numberToWords.toWords(331234)); // => “thirteen”
console.log( numberToWords.toWords(33)); // => “thirteen”
console.log( numberToWords.toWords(133)); // => “thirteen”

var emptyString = "";

if ( emptyString && !isNaN(emptyString ))
	console.log( emptyString + " is a number " );  
else	
	console.log( emptyString + " is NOT a number " );  


function returnArray() {
	var rtn = {"languageCode":"fr", "voiceID": "Celine"};

	rtn.languageCode = "kr";
	rtn.voiceID = "Celine";
	return rtn;
}	

console.log( "Array=" + returnArray().languageCode + ", " + returnArray().voiceID);


var bagOfGolds = ['silver eagle', 'Rome Gold Coin'];
var groupOfDogs = ['gold', 'silver', 123, 'chi', bagOfGolds];

console.log( "==" + groupOfDogs );

delete groupOfDogs[1];
console.log( "==" + groupOfDogs );

let address1 = "550 Pharr Rd";
let address2 = "550 Pharr Rd";
let address3 = address1;


console.log ( "address1 === address2 ->" + (address1 === address2) );

address1 = "320 Main";

console.log ( "address1 === address2 ->" + (address1 === address2) );
console.log( "address1=" + address1 + "; address3=" + address3 );

function passByValue( arg ) {
	arg = "Cool bean";
}

let arg1 = "Hot bean";

console.log("Before arg1=" + arg1);
passByValue( arg1 );
console.log("After arg1=" + arg1);

console.log( Object + ", " + Object.prototype );

let obj = {};
console.log( "obj==" + obj + ", "  );
delete obj;
console.log( "obj==" + obj + ", "  );


function foo() {
}
console.log( "foo()=" + (typeof foo.prototype) + ", " + (typeof foo)  ); // ‘object’

function Dog() {
}
Dog.prototype.bark = function() {
 console.log("woof!");
};
var fido = new Dog();
fido.bark(); // ‘woof!’


const symbol1 = Symbol();
const symbol2 = Symbol(42);
const symbol3 = Symbol('foo');

console.log( symbol1  );
console.log( symbol2  );
console.log( symbol3  );

console.log(typeof symbol1);
// expected output: "symbol"

console.log(symbol3.toString());
// expected output: "Symbol(foo)"

console.log(Symbol('foo') === Symbol('foo'));

console.log( fido.hasOwnProperty('bark')); //=== false





lib.rary.functions.getAppleCatalogs( "iphone" ).then( function(result){ 
	rary_util.printify(result + " ====!!");
});


// async/await
async function getBooksByAuthorWithAwait( name ) {
  const books = await lib.rary.functions.getAppleCatalogs( name );
  console.log( "Here1" );
  rary_util.printify(books);
  console.log( "Here2" );
}

// promise
function getBooksByAuthorWithPromise(name) {
lib.rary.functions.getAppleCatalogs( name ).then( function(result){ 
	rary_util.printify(result + "==B2");
	rary_util.printify(result);
});
}






getBooksByAuthorWithPromise("iphone");
getBooksByAuthorWithAwait("iphone");

function Face() {}

Face.prototype.has_nose = function() {
	console.log("Has nose");
}

var face = new Face();

face.has_nose();



function People( name ) { this.name = name; }
function People( name, address ) { 
	this.name = name; 
	this.address = address;  
	function canTalk( name ) {
		console.log( name + " can talk" );
	}
	canTalk(this.name);
}

People.prototype.canWalk = function() {
	console.log( this.name + " can walk for " + this );
}

People.prototype.arrow = "Big Arrow";

var john = new People( "John" );
console.log("------------------" + john.arrow);
john.canWalk();


Object.prototype.log = function(with_message) {
  console.log(with_message + ":" + this);
}

var y = "string";
y.log("y");


var x = "string";
x.log("x");

Object.prototype.my_name_is = function() {
	console.log("My name is " + this );
}

var john = "John";

john.my_name_is();


let p = new Array();
p = [a, 2];

String.prototype.print = function( message ) {
	console.log( message + ":" + this );
}
let name = "John";
name.print("hi");
console.log( "Length=" + name.length );


function array_max( ){  
    var i, max = this[0];  
    for (i = 1; i < this.length; i++)  
    {  
    if (max < this[i])  
    max = this[i];  
    }  
    return max;  
}  
Array.prototype.max = array_max;  
//var myArray = new Array(7, 1, 3, 11, 25, 9 );  
var myArray = [7, 1, 3, 11, 25, 25, 9];  
console.log(myArray.max());  


console.log( myArray.sort( (a, b) => a - b ) );

var mmap = {};

mmap["a"] = 1;
mmap["b"] = 2;
mmap["c"] = 3;

console.log( mmap );



var origArray = [7, 1, 3, 11, 25, 25, 9]; 
var filterArray = [9];
var sortedArray = origArray.filter(function(e) { return this.indexOf(e) < 0; }, filterArray  ).sort( (a, b) => b - a );
console.log( sortedArray );

origArray = ["B", "C", "B", "B", "B", "A", "D"]; 
filterArray = ["D"];
sortedArray = origArray.filter(function(e) { return this.indexOf(e) < 0; }, filterArray  ).sort( (a, b) => (b.localeCompare(a)) );
console.log( sortedArray );

var list = ["A", "C", "B" ];
list.sort(function (a, b) {
    return (b.localeCompare(a));
})
console.log( list );

origArray = ["B", "C", "B", "B", "B", "2", "D", "d"]; 
filterArray = ["D"];
sortedArray = origArray.filter(function(e) { return this.indexOf(e) < 0; }, filterArray  ).sort( (a, b) => (b.localeCompare(a)) );
console.log( sortedArray );

for ( i = 1; i < sortedArray.length; i++ ) {
	console.log(sortedArray[i]);
}



function countWords(origArray, filterArray) {

		returnArray = [];
		if ( origArray.length < 1 ) 
			return returnArray;	

		origArray = origArray.filter(function(e) { return this.indexOf(e) < 0; }, filterArray  )

		let counter = 0;
		let map = new Map();

		for ( i = 0; i < origArray.length; i++ ) {
			if ( map.has( origArray[i] )) {
				counter = map.get( origArray[i] ); 
				counter++;
				map.set( origArray[i], counter );
			} else {
				counter = 1;	
				map.set( origArray[i], counter );
			} 

		}

		const sortedMap = new Map([...map.entries()].sort((a, b) => b[1] - a[1]));

		var keys = sortedMap.keys();
		firstKey = keys.next().value;
		firstValue = sortedMap.get( firstKey );

		returnArray.push( firstKey );
		for ( i = 1; i < sortedMap.size; i++ ) {
			let key = keys.next().value;	
			if ( firstValue == sortedMap.get( key ))
				returnArray.push( key );
			else
				break;	
		}

		return returnArray;

}

origArray = ["E", "E", "E", "B", "C", "B", "B", "B", "A", "E", "D"]; 
filterArray = ["D"];

//origArray = []; 
//filterArray = ["D"];
rtn = countWords(origArray, filterArray);

console.log( rtn );

function MyMap( word, counter ) {
	this.word = word;
	this.counter = counter;	
}

MyMap.prototype.count = function() {
	console.log( this.word + "=" + this.counter );
}

myMap = new MyMap("B", 2);

myMap.count();


function SmartMap( word ) {
	map = new Map();	

	return {
		newMap: function( m ) {
			map = m;
			return this;
		},	
		getCount: function( word ) {
			return map.get( word )	
		},
		add: function( word ) {
			let counter;		 
			if ( map.has( word )) {
				counter = map.get( word );
				counter++;
				map.set( word, counter );		
			} else {
				map.set( word, 1 );		
			}
		},				 
		addAll: function( array ) {
			for ( i = 0; i < array.length; i++ ) {
				this.add( array[i] );	
			}
		},	
		sorted: function() {
			return new Map([...map.entries()].sort((a, b) => b[1] - a[1]));			
		},		  
		first: function( len ) {
			rMap = new Map();
			if ( len <= 0 )
				return rMap;	

			nMap = this.sorted();		  
			//console.log( nMap );
			len = len > nMap.size ? nMap.size : len;
			var keys = nMap.keys();
			for ( i = 0; i < len; i++ ) {
				key = keys.next().value;	
				rMap.set(key, nMap.get(key));	
			}
			return rMap;
	  	},
 		most: function() {
			returnArray = [];

			theMap = this.sorted();

			var keys = theMap.keys();

			firstKey = keys.next().value;
			firstValue = theMap.get( firstKey );

			returnArray.push( firstKey );
			for ( i = 1; i < theMap.size; i++ ) {
				let key = keys.next().value;	
				if ( firstValue == theMap.get( key ))
					returnArray.push( key );
				else
					break;	
			}
			return returnArray;	
		}			   

	}
}

SmartMap.prototype.counts = function(word) {
		
	console.log( word + "=" + this.map.get( this.word ) );
}

sMap = new SmartMap();
sMap.add("B");
sMap.add("C");
sMap.add("C");
sMap.add("A");
console.log("LLL=" + sMap.getCount( "C" ) + ", " + sMap.getCount( "B" ));

console.log( sMap.sorted() );

console.log( sMap.first(0) );


function myCountWords( origArray, filterArray ) {

	returnArray = [];
	if ( origArray.length < 1 ) 
		return returnArray;	
	else
		origArray = origArray.filter(function(e) { return this.indexOf(e) < 0; }, filterArray  )

	let ssMap = new SmartMap();
	ssMap.addAll( origArray );

	console.log("++");
	console.log( ssMap.first(2) );
	console.log("++");
	theMap = ssMap.sorted();
	return new SmartMap().newMap( theMap ).most();

}

rtn = myCountWords(origArray, filterArray);
console.log( rtn );

rtn = myCountWords([], filterArray);
console.log( rtn );


let words = "geeksforgeeks";
charArray = words.split('');
console.log( charArray );

wordsMap = new SmartMap();
for ( i = 0; i < charArray.length; i++ ) {
	wordsMap.add( charArray[i] );
}

console.log( wordsMap.sorted() );
