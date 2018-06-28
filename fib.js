var fib = function( n ) {
	return ( n < 2 ) ? n : fib( n - 1 ) + fib( n - 2 )
}

for ( i = 0; i <= 10; i++ ) 
	console.log( fib( i ) ) ;
