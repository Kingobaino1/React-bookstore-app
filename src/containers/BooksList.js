import React from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import Book from '../components/Book';
import { removeBook } from '../actions/index';
import Header from '../components/Header';

const BooksList = () => {
  const books = useSelector((state) => (state.bookReducer));
  const categories = useSelector((state) => (state.filterReducer));
  const dispatch = useDispatch();

  const handleRemoveBook = (book) => {
    dispatch(removeBook(book));
  };

  return (
    <>
      <div className="">
        <Header />
        <div>
          {
            books.filter((book) => (categories === 'All' ? books : book.category === categories))
              .map((item) => (
                <Book key={item.title} book={item} handleRemoveBook={handleRemoveBook} />))
          }
        </div>
      </div>
    </>
  );
};

export default connect()(BooksList);
