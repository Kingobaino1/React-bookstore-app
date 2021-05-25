import PropTypes from 'prop-types';
import React from 'react';

const Book = ({ book, handleRemoveBook }) => (
  <tr>
    <td>{book.id}</td>
    <td>{book.title}</td>
    <td>{book.category}</td>
    <td><button type="button" onClick={() => handleRemoveBook(book)}>Remove Book</button></td>
  </tr>
);

Book.propTypes = {
  book: PropTypes.objectOf(PropTypes.object).isRequired,
  handleRemoveBook: PropTypes.func.isRequired,
};

export default Book;
