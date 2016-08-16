var Note = require("./note-model.js").Note;

(function(exports) {
  function NoteList() {
    this.notes = [];
  }

  NoteList.prototype.pushNote = function (note) {
    this.notes.push(note);
  };

  NoteList.prototype.createNote = function (text) {
    this.notes.push(new Note(text));
  };
  exports.NoteList = NoteList;
})(this);