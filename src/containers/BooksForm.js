import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../actions/index';

const BooksForm = () => {
  const [book, setBook] = useState(
    {
      title: '',
      category: 'Biography',
    },
  );

  const handleChange = (e) => {
    setBook({
      category: e.target.value,
    });
  };

  const handleInput = (e) => {
    setBook({
      title: e.target.value,
    });
  };
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addBook(book));
    setBook({
      title: '',
      category: '',
    });
  };

  const bookCat = ['Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi', 'Sport'];
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={book.title} onChange={handleInput} placeholder="Title" />
      <label htmlFor="categories">
        Select your favorite book in the following category:
        <select id="categories" value={book.category} onChange={handleChange}>
          {bookCat.map((item) => (
            <option key={item} value={item}>{item}</option>))}
        </select>
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
};

export default BooksForm;
