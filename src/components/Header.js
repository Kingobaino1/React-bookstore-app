import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CategoryFilter from './CategoryFilter';
import { changeFilter } from '../actions/index';

const Header = () => {
  const books = useSelector((state) => (state.bookReducer));
  const dispatch = useDispatch();
  const handleFilterChange = (category) => {
    dispatch(changeFilter(category));
  };
  return (
    <div className="underline">
      <div className="d-flex justify-content-between container">
        <div className="d-flex justify-content-between">
          <div className="mt-4 ml-4"><h1 className="text-blue">Bookstore CMS</h1></div>
          <div className="m-4 pt-3 mb-0">
            <h6>Books</h6>
          </div>
          <div className="m-4 pt-3 mb-0">
            <h6>
              <CategoryFilter
                value={books.map((item) => item.category)}
                handleFilterChange={handleFilterChange}
              />
            </h6>
          </div>
        </div>
        <div>
          <i className="fas fa-user m-4 pt-3 mb-0 text-blue" />
        </div>
      </div>
    </div>
  );
};

export default Header;
