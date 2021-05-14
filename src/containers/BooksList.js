import React from 'react';
import { connect } from 'react-redux';
import Book from '../components/Book';

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

  return (
    <table>
      <tr>
        <th>ID</th>
        <th>Title</th>
        <th>Category</th>
      </tr>
      <Book book={books[0]} />
      <Book book={books[1]} />
      <Book book={books[2]} />
    </table>
  );
};

export default connect()(BooksList);
