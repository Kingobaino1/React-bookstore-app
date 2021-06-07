import PropTypes from 'prop-types';
import React from 'react';

const CategoryFilter = ({ handleFilterChange }) => {
  const filter = ['All', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi', 'Sport'];
  return (
    <label htmlFor="categories" className="d-flex justify-content-between select">
      <div className="m-3">
        Select category
      </div>
      <div className="m-3">
        <select id="filter" onChange={(e) => handleFilterChange(e.target.value)}>
          {filter.map((item) => (
            <option
              key={item}
              value={item}
            >
              {item}
            </option>
          ))}
        </select>
      </div>
    </label>
  );
};

CategoryFilter.propTypes = {
  handleFilterChange: PropTypes.func.isRequired,
};

export default CategoryFilter;
