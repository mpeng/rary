var fs = require('fs');
var lines;

fs.readFile('file.txt', function(err, data) {
    if(err) throw err;
    lines = data.toString().split("\n");
    for(i in lines) {
        console.log(lines[i]);
    }
	console.log( "The file has " + lines.length + " lines" );
});

