import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../actions/index';

const BooksForm = () => {
  const [book, setBook] = useState(
    {
      title: '',
      category: '',
      author: '',
    },
  );

  const handleInput = ({ target: { value } }) => {
    setBook({
      ...book,
      title: value,
    });
  };

  const handleSelect = ({ target: { value } }) => {
    setBook({
      ...book,
      category: value,
    });
  };

  const handleAuthorSelect = ({ target: { value } }) => {
    setBook({
      ...book,
      author: value,
    });
  };

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addBook(book));
    setBook({
      id: uuidv4(),
      title: '',
      category: '',
      author: '',
    });
  };

  const bookCat = ['Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi', 'Sport'];
  return (
    <>
      <div className="container w-25 mx-auto"><h1 className="text-secondary">ADD BOOK</h1></div>
      <form onSubmit={handleSubmit} className="mx-auto d-flex container w m-3">
        <input type="text" className="m-3 w" value={book.title} onChange={handleInput} name="title" placeholder="Title" />
        <input type="text" className="m-3 w" value={book.author} onChange={handleAuthorSelect} name="title" placeholder="Author" />
        <label htmlFor="categories">
          <div className="m-4">
            <select id="categories" value={book.category} onChange={handleSelect} name="category">
              {bookCat.map((item) => (
                <option key={item} value={item}>{item}</option>))}
            </select>
          </div>
        </label>
        <input type="submit" className="btn btn-primary m-3" value="Add Book" />
      </form>
    </>
  );
};

export default BooksForm;
