import React from 'react';
import './sort.css';

const Sort = ({ handleSortChange }) => {
  const onSortChange = (e) => {
    handleSortChange(e.target.value);
  };

  return (
    <select className="sort" onChange={onSortChange}>
      <option value="">Sort by</option>
      <option value="price-asc">Price: Low to High</option>
      <option value="price-desc">Price: High to Low</option>
      <option value="name-asc">Name: A to Z</option>
      <option value="name-desc">Name: Z to A</option>
    </select>
  );
};

export default Sort;
