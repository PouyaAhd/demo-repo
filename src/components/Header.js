import React from "react";

function Header({ handleToggleMode }) {
  return (
    <div className="header">
      <h1>Notes</h1>
      <button
        onClick={() => handleToggleMode((prevDarkMode) => !prevDarkMode)}
        className="save"
      >
        Toggle mode
      </button>
    </div>
  );
}

export default Header;
