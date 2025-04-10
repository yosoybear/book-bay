import React, { useState } from 'react';

const FilterBar = ({ onFilterChange }) => {
  const [priceRange, setPriceRange] = useState('all');
  const [rating, setRating] = useState('all');

  const handleFilterChange = () => {
    onFilterChange({ priceRange, rating });
  };

  return (
    <div className="filter-bar">
      <select value={priceRange} onChange={(e) => setPriceRange(e.target.value)} onBlur={handleFilterChange}>
        <option value="all">All Prices</option>
        <option value="low">Under $20</option>
        <option value="mid">$20 - $50</option>
        <option value="high">Above $50</option>
      </select>
      <select value={rating} onChange={(e) => setRating(e.target.value)} onBlur={handleFilterChange}>
        <option value="all">All Ratings</option>
        <option value="high">4+ Stars</option>
        <option value="low">Below 4 Stars</option>
      </select>
    </div>
  );
};

export default FilterBar;
