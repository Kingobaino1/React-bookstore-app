import React from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import Book from '../components/Book';
import { removeBook } from '../actions/index';

const BooksList = () => {
  const books = useSelector((state) => (state));
  const dispatch = useDispatch();

  const handleRemoveBook = (book) => {
    dispatch(removeBook(book));
  };

  return (
    <table>
      <thead>
        <tr>
          <th>Title</th>
          <th>Category</th>
        </tr>
      </thead>
      <tbody>
        {
        books
          .map((item) => (
            <Book key={item.title} book={item} handleRemoveBook={handleRemoveBook} />))
            }
      </tbody>
    </table>
  );
};

export default connect()(BooksList);
