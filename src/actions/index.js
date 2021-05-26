const CREATE_BOOK = 'CREATE_BOOK';
const REMOVE_BOOK = 'REMOVE_BOOK';
const CHANGE_FILTER = 'CHANGE_FILTER';

const addBook = (book) => ({
  type: CREATE_BOOK,
  payload: book,
});

const removeBook = (book) => ({
  type: REMOVE_BOOK,
  payload: book,
});

const changeFilter = (category) => ({
  type: CHANGE_FILTER,
  payload: category,
});

export {
  addBook,
  removeBook,
  changeFilter,
};
