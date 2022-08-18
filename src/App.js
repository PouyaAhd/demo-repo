import React from "react";
import NoteList from "./components/NoteList";
import { nanoid } from "nanoid";
import { useState } from "react";

function App() {
  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      text: "This is my first text",
      date: "15/05/2021",
    },
    {
      id: nanoid(),
      text: "This is my second text",
      date: "11/05/2021",
    },
    {
      id: nanoid(),
      text: "This is my third text",
      date: "12/05/2021",
    },
  ]);

  const addNote = (text) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString(),
    };
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  };

  const deleteNote = (id) => {
    const newNote = notes.filter((note) => {
      return note.id !== id;
    });
    setNotes(newNote);
  };
  return (
    <div className="container">
      <NoteList
        notes={notes}
        handleAddNote={addNote}
        handleDeleteNote={deleteNote}
      />
    </div>
  );
}

export default App;
