import React from "react";
import NoteList from "./components/NoteList";
import { nanoid } from "nanoid";
import { useState, useEffect } from "react";
import Search from "./components/Search";
import Header from "./components/Header";

function App() {
  const [searchNotes, setSearchNotes] = useState("");
  const [darkMode, setDarkMode] = useState(false);
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem("react-note-app"));
    if (savedNotes) {
      setNotes(savedNotes);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("react-note-app", JSON.stringify(notes));
  }, [notes]);

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
    <div className={`${darkMode && "dark-mode"}`}>
      <div className="container">
        <Header handleToggleMode={setDarkMode} />
        <Search handleSearchNotes={setSearchNotes} />
        <NoteList
          notes={notes.filter((note) =>
            note.text.toLowerCase().includes(searchNotes)
          )}
          handleAddNote={addNote}
          handleDeleteNote={deleteNote}
        />
      </div>
    </div>
  );
}

export default App;
