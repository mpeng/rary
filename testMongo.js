function IsJsonString(str) {
    try {
        JSON.parse(str);
    } catch (e) {
        return false;
    }
    return true;
}


	const mongoose = require('mongoose');

	var name = {"name":"Michael"};

	mongoose.connect("mongodb://mpeng:password@ds127034.mlab.com:27034/stdlib-notes")
	.then(() => {
    	console.log("Successfully connected to the database 1");    
		msg = "Mongo connected";

		if ( IsJsonString( name ) ) {
			msg += "; " + name + " is valid JSON !";
		} else {
			msg += "; " + name + " is NOT valid JSON !";
		}


		const NoteSchema = mongoose.Schema({
				title: String,
				content: String
			}, {
			timestamps: true
		});

		var Note = mongoose.model('Note', NoteSchema);

		var note = new Note({ title: 'stdlib notes 10', content: 'Add notes from stdlib 10' });

		console.log("Before save=" + note);


		note.save(function (err) {
		  if (err) return console.log("Save error");
		  console.log("Save successfully ");
		  mongoose.disconnect();
		});
		console.log("After save");

	}).catch(err => {
    	console.log('Could not connect to the database. Exiting now...' + err);
    	process.exit();
	});

