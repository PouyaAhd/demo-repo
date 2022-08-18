import React, { useState } from "react";

function AddNote({ handleAddNote }) {
  const [noteText, setNoteText] = useState("");
  let noteRemain = 200;

  const handleAddChange = (event) => {
    if (noteRemain - event.target.value.length >= 0) {
      setNoteText(event.target.value);
    }
  };

  const handleAddClick = () => {
    if (noteText.trim().length > 0) {
      handleAddNote(noteText);
      setNoteText("");
    }
  };
  return (
    <div className="note new">
      <textarea
        rows="8"
        cols="10"
        placeholder="Type to add a note..."
        onChange={handleAddChange}
        value={noteText}
      ></textarea>
      <div className="note-footer">
        <small>{noteRemain - noteText.length} Remaining</small>
        <button onClick={handleAddClick} className="save">
          Save
        </button>
      </div>
    </div>
  );
}

export default AddNote;
