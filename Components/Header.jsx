import React from "react";

const Header = ({ input, searchCharacter, ricks, setInput }) => {
  return (
    <div>
      <header className="header">
        <img src="../src/image/rickandMorty.jpg" />
        <br />
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Buscador"
        />
        <button onClick={searchCharacter}>Search</button>
        <br />
        
      </header>
    </div>
  );
};

export default Header;
