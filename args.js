process.argv.forEach( function( val, index, array ) {

	console.log( index + ": " + val );
				
} );


var args = process.argv.slice(2);

console.log( args.length );
console.log( args );

args.forEach( function( a, b ) {
	console.log( b + ", " + a );
});


args = process.argv;

console.log( args.length );
console.log( args );

arrObj = [1, 2, 3];
console.log( arrObj[1] );



jsonObj = {"a": 2, "b": 4, "c":4};

console.log( jsonObj.c );
