import React from 'react';

const BooksForm = () => {
  const bookCat = ['Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi', 'Sport'];
  return (
    <form>
      <input type="text" placeholder="Title" />
      <label htmlFor="categories">
        Select your favorite book in the following category:
        <select id="categories">
          {bookCat.map((item, index) => (<option key={index.toString()} value="biography">{item}</option>))}
        </select>
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
};

export default BooksForm;
