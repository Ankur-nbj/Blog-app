
import React from 'react';

const Header = ({ searchTerm, handleSearchChange }) => {
  return (
    <header>
      <h1>Blog Post Application</h1>
      <input
        type="text"
        placeholder="Search posts by title..."
        value={searchTerm}
        onChange={(e) => handleSearchChange(e.target.value)}
      />
    </header>
  );
};

export default Header;
