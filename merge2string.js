args = process.argv.slice(2);
str1 = args[0];
str2 = args[1];


console.log( str1 + ", " + str2 );

str1Arr = str1.split('');
str2Arr = str2.split('');

console.log( str1Arr );
console.log( str2Arr );

let longerLengh = str1Arr.length >= str2Arr.length ? str1Arr.length : str2Arr.length;

console.log( longerLengh );

comStr = "";
for ( i = 0; i < longerLengh; i++ ) {
	if ( str1Arr[i] && str2Arr[i] )	
		comStr += str1Arr[i] + str2Arr[i];
	else if ( str1Arr[i] )	
		comStr += str1Arr[i] ;
	else if ( str2Arr[i] )	
		comStr += str2Arr[i];
}

console.log( comStr );

