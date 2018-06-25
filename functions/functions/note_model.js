const mongoose = require('mongoose');

const NoteSchema = mongoose.Schema({
    title: String,
    content: String
}, {
    timestamps: true
});

//module.exports = mongoose.model('Note', NoteSchema);

module.exports = (name = 'world', context, callback) => {

  mongoose.model('Note', NoteSchema);		
  callback(null, `hello ${name}`);

};
