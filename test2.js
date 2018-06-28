origArray = ["B", "C", "B", "B", "B", "A", "D"]; 
filterArray = ["D"];
map = new Map();

for ( i = 0; i < origArray.length; i++ ) {
	console.log(origArray[i]);
	if ( map.has( origArray[i]) ) {
        
    }

}
<<<<<<< HEAD
=======


var fib = function( n ) {
	return n < 2 ? n : fib( n - 1 ) + fib( n - 2 );	
}

for ( i = 0; i <= 10; i++ ) {
	console.log(i + ": " + fib( i ) );
}

var NumericTest = function(n) {
	return {
		showMe: function() {
			console.log( n );			
			return ((n % 2) == 0);			
		},	
		isEven: function( n ) {
			return ((n % 2) == 0);			
		},
		isNegative: function( n ) {
			return ( n < 0 );				
		}	
	}			
}

test = new NumericTest(4);

console.log( test.showMe() );
console.log( test.isEven( 4 ) );
console.log( test.isNegative( -4 ) );
>>>>>>> e09a2901ac6b0cc3977ce96aee83e2a39f54a75e
