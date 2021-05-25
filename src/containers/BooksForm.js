import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../actions/index';

const BooksForm = () => {
  const [book, setBook] = useState(
    {
      title: '',
      category: 'Biography',
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

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addBook(book));
    setBook({
      id: uuidv4(),
      title: '',
      category: '',
    });
  };

  const bookCat = ['Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi', 'Sport'];
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={book.title} onChange={handleInput} name="title" placeholder="Title" />
      <label htmlFor="categories">
        Select your favorite book in the following category:
        <select id="categories" value={book.category} onChange={handleSelect} name="category">
          {bookCat.map((item) => (
            <option key={item} value={item}>{item}</option>))}
        </select>
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
};

export default BooksForm;
