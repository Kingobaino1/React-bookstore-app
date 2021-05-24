import React from 'react';
import { connect, useDispatch } from 'react-redux';
import Book from '../components/Book';
import { removeBook } from '../actions/index';

const BooksList = () => {
  const books = [
    {
      id: Math.floor(Math.random() * 3),
      title: 'Things fall apart',
      category: 'History',
    },
    {
      id: Math.floor(Math.random() * 3),
      title: 'There was a country',
      category: 'Biography',
    },
    {
      id: Math.floor(Math.random() * 3),
      title: 'Harry Potter',
      category: 'Horror',
    },
  ];

  const dispatch = useDispatch();

  const handleRemoveBook = (book) => {
    dispatch(removeBook(book));
  };

  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Title</th>
          <th>Category</th>
        </tr>
      </thead>
      {
      books
        .map((item) => (
          <Book key={item.title} book={item} handleRemoveBook={handleRemoveBook} />))
          }
    </table>
  );
};

export default connect()(BooksList);
