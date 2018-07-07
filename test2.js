origArray = ["B", "C", "B", "B", "B", "A", "D"]; 
filterArray = ["D"];
map = new Map();

for ( i = 0; i < origArray.length; i++ ) {
	console.log(origArray[i]);
	if ( map.has( origArray[i]) ) {
        
    }

}


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

let words = "noon";

console.log( words.substring(0,2) );
console.log( words.substring(6,7) );

var isWordPalindrome = function( word ) {
	let len = word.length;
	let mapForward = new Map();
	for ( i = 0; i < len; i++ ) {
		mapForward.set( i, word.substring( i, i + 1 ));	
	}

	let mapBackward = new Map();
	let m = 0;
	for ( i = len - 1; i >= 0; i-- ) {
		mapBackward.set( m++, word.substring( i, i + 1 ));
	}

	console.log( mapForward );
	console.log( mapBackward );

	for ( i = 0; i < len; i++ ) {
		if ( mapForward.get( i ) != mapBackward.get( i )) {	
			return false;	
		} else
			console.log( mapForward.get( i ));

	}
	return true;

}

let answer = isWordPalindrome( words ) ? "palindrome." : "not palindrome.";

console.log( "The word '" + words + "' is " + answer );

function isPalindrome2 (str) {
  return str === str.split('').reverse().join('');
}


var isPalindrome = function( word, n, len ) {
		
	if ( n > 0 ) {
		head = word.substring( len - n, len - n + 1 );
		tail = word.substring( n - 1, n );
		//console.log( head + ":" + tail );
		if ( head === tail ) { 
			isPalindrome( word, --n, len );	
		} else {
			return false;	
		}	
	}

	return true;
}
words = "racecar";
console.log( isPalindrome( words, words.length, words.length ));
console.log( isPalindrome2( words ));

var a_sentence = "This swan is black";

console.log( a_sentence.split(' ').reverse().join(' '));
console.log( a_sentence.split('').reverse().join(''));

