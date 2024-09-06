import React from 'react';
import './filter.css';

const Filter = ({ handleFilterChange }) => {
  const onFilterChange = (e) => {
    handleFilterChange(e.target.value);
  };

  return (
    <select className="filter" onChange={onFilterChange}>
      <option value="">Filter by category</option>
      <option value="food">Food</option>
      <option value="vegetables">Vegetables</option>
      <option value="accessories">Accessories</option>
    </select>
  );
};

export default Filter;
