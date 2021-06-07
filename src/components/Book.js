import PropTypes from 'prop-types';
import React from 'react';

const Book = ({ book, handleRemoveBook }) => (
  <div className="row book container m-4">
    <div className="col-3 d-flex flex-column mt-5">
      <div className="font-weight-light">{book.category}</div>
      <div className="font-weight-bold"><h4>{book.title}</h4></div>
      <div className="col"><h6>{book.author}</h6></div>
      <div className="d-flex justify-content-between">
        <div className="mt-4"><h6 className="col">Comments</h6></div>
        <div><button type="button" className="btn mt-3" onClick={() => handleRemoveBook(book)}><h6 className="col">Remove</h6></button></div>
        <div className="mt-4"><h6 className="col">Edit</h6></div>
      </div>
    </div>
    <div className="col-4 d-flex m-5">
      <div><i className="fas fa-5x fa-circle-notch text-blue" /></div>
      <div className="d-flex flex-column m-3">
        <div><h2>98%</h2></div>
        <div className="text-secondary">Completed</div>
      </div>
    </div>
    <div className="col-3 d-flex flex-column mt-5">
      <div><h6 className="text-secondary">Current Chapter</h6></div>
      <div><h6>Chapter 20</h6></div>
      <div><button type="button" className="btn btn-primary">UPDATE PROGRESS</button></div>
    </div>
  </div>
);

Book.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  book: PropTypes.object.isRequired,
  handleRemoveBook: PropTypes.func.isRequired,
};

export default Book;
