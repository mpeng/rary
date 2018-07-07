dateArray = process.argv.slice(2);
dd = dateArray[0];
mm = dateArray[1];
yy = dateArray[2];

console.log( typeof ( mm ) );
console.log( typeof ( parseInt(mm) ) );

console.log( dd + ", " + mm  + ", " + yy );

todayDD = 7;
todayMM = 7;
todayYY = 2018;
todayDOW = "Saturday";

diffDD = todayDD - dd;
diffMM = (todayMM - mm) * 30 ;
diffYY = ( todayYY - yy ) * 365 ;

diffTotal = diffYY + diffMM + diffDD;

console.log( diffTotal );
console.log( mm );

switch( parseInt(mm) ) {
	case 1: 
		diffTotal += 1;
		break;
	case 2: 
		diffTotal -= 2;
		break;
	case 3: 
		diffTotal += 1;
		break;
	case 4: 
		break;
	case 5: 
		diffTotal += 1;
		break;
	case 6: 
		break;
	case 7: 
		diffTotal += 1;
		break;
	case 8: 
		diffTotal += 1;
		break;
	case 9: 
		break;
	case 10: 
		diffTotal += 1;
		break;
	case 11: 
		break;
	case 12: 
		diffTotal += 1;
		break;
	default:
		break;	
}

console.log( diffTotal );

off = diffTotal % 7;
let dow;

switch( off ) {
	case 0: 
		dow = "Saturday"; 
		break;
	case 1: 
		dow = "Friday"; 
		break;
	case 2: 
		dow = "Thursday"; 
		break;
	case 3: 
		dow = "Wednesday"; 
		break;
	case 4: 
		dow = "Tuesday"; 
		break;
	case 5: 
		dow = "Monday"; 
		break;
	case 6: 
		dow = "Sunday"; 
		break;
	default:
		break;	
}

console.log( "The day of " + dd + ", " + mm + " of " + yy + " is " + dow );
