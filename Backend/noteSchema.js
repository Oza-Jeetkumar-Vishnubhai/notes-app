const mongoose = require('mongoose');
const {Schema} = mongoose;

const noteSchema = Schema({
    username:String,
    password:String,
    note:String,
    title:String
});

const NoteSchema = mongoose.model('note',noteSchema);
module.exports = NoteSchema;