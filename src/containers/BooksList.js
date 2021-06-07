import React from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import Book from '../components/Book';
import { removeBook, changeFilter } from '../actions/index';
import CategoryFilter from '../components/CategoryFilter';

const BooksList = () => {
  const books = useSelector((state) => (state.bookReducer));
  const categories = useSelector((state) => (state.filterReducer));
  const dispatch = useDispatch();

  const handleRemoveBook = (book) => {
    dispatch(removeBook(book));
  };

  const handleFilterChange = (category) => {
    dispatch(changeFilter(category));
  };

  return (
    <>
      <CategoryFilter
        value={books.map((item) => item.category)}
        handleFilterChange={handleFilterChange}
      />
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Category</th>
          </tr>
        </thead>
        <tbody>
          {
            books.filter((book) => (categories === 'All' ? books : book.category === categories))
              .map((item) => (
                <Book key={item.title} book={item} handleRemoveBook={handleRemoveBook} />))
          }
        </tbody>
      </table>
    </>
  );
};

export default connect()(BooksList);
