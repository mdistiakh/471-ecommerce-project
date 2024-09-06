import React from 'react';
import './search.css';

const SearchBar = ({ handleSearch }) => {
  const onSearchChange = (e) => {
    handleSearch(e.target.value);
  };

  return (
    <input
      type="text"
      className="search-bar"
      placeholder="Search products..."
      onChange={onSearchChange}
    />
  );
};

export default SearchBar;
