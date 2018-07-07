dateArray = process.argv.slice(2);
dd = dateArray[0];
mm = dateArray[1];
yy = dateArray[2];

console.log( dd + ", " + mm  + ", " + yy );

todayDD = 7;
todayMM = 7;
todayYY = 2018;
todayDOW = "Saturday";

diffDD = todayDD - dd;
diffMM = (todayMM - mm) * 30 ;
diffYY = ( todayYY - yy ) * 365 ;

diffTotal = diffYY + diffMM + diffDD;

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
