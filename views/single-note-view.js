
(function(exports){
  var SingleNoteView = function(note){
    this.note = note;
  };

  SingleNoteView.prototype.singleNoteHtml = function () {
    return "<div>" + this.note.getText() + "</div>";
  };

  exports.SingleNoteView = SingleNoteView;
})(this);
