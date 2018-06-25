function IsJsonString(str) {
    try {
        JSON.parse(str);
    } catch (e) {
        return false;
    }
    return true;
}

const mongoose = require('mongoose');

const NoteSchema = mongoose.Schema({
	title: String,
	content: String
}, {
	timestamps: true
});

const Note = mongoose.model('Note', NoteSchema);




module.exports = (name = 'world', context, callback) => {


	mongoose.connect("mongodb://mpeng:password@ds127034.mlab.com:27034/stdlib-notes")
	.then(() => {
    	console.log("Successfully connected to the database 2 = " + name);    
		msg = "Mongo connected";

		var nameObj = { "action": "findAll", "name": "World", "content": "Travaler" };
		if ( IsJsonString( name ) ) {
			msg += "; " + name + " is valid JSON !";
			nameObj = JSON.parse( name );
		} else {
			msg += "; " + name + " is NOT valid JSON !";
		}

		console.log( nameObj.title + ", " + nameObj.content );

		var note = new Note({ title: nameObj.title, content: nameObj.content });

		var action = nameObj.action;

		console.log("Before !!!! action=" + action);

		switch(action) {
			case 'save':
				note.save(function (err) {
				  if (err) return console.log("Save error");
				  console.log("Save successfully ");
				  msg += "; Saved !";

				  mongoose.disconnect();
				  callback(null, `Hello ${name} and ${msg}`);
				});
				break;
			case 'findAll':
				console.log( "In find" );
				Note.find().then(notes => { 
					//console.log( "notes=" + notes + ", " + JSON.stringify(notes) );			
					mongoose.disconnect();
				  	callback(null, JSON.stringify(notes));
				});
        		break;
        	default:
				callback(null, `Hello ${name} and ${msg}`);
    	}



	}).catch(err => {
    	console.log('Could not connect to the database. Exiting now...');
		callback(null, `Hello ${name} and ${msg}`);
	});
}

