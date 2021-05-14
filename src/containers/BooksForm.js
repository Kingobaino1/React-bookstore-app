import React from 'react';

const BooksForm = () => {
  const bookCat = ['Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi', 'Sport'];
  return (
    <form>
      <input type="text" placeholder="Title" />
      <label htmlFor="categories">
        Select your favorite book in the following category:
        <select id="categories">
          <option value="biography">{bookCat[0]}</option>
          <option value="history">{bookCat[1]}</option>
          <option value="horror">{bookCat[2]}</option>
          <option value="kids">{bookCat[3]}</option>
          <option value="learning">{bookCat[4]}</option>
          <option value="sci-fi">{bookCat[5]}</option>
          <option value="sport">{bookCat[6]}</option>
        </select>
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
};

export default BooksForm;
