import React from "react";
import AddNote from "./AddNote";
import Note from "./Note";

function NoteList({ notes,handleAddNote,handleDeleteNote }) {
  return (
    <div className="note-list">
      {notes.map((note) => (
        <Note id={note.id} text={note.text} date={note.date} handleDeleteNote={handleDeleteNote}/>
      ))}
      <AddNote handleAddNote={handleAddNote} />
    </div>
  );
}

export default NoteList;
