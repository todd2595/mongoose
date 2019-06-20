var mongoose = require("mongoose");
var Schema = mongoose.Schema;

const NoteSchema = new Schema({
    body:String
})
const Note = mongoose.model("Note", NoteSchema);
module.exports = Note;