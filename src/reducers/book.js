import { addBook, removeBook } from '../actions/index';

const defaultBook = [
  { id: 1, title: 'Things fall apart', category: 'History' },
  { id: 2, title: 'There was a country', category: 'Biography' },
  { id: 3, title: 'Harry Potter', category: 'Horror' },
];

const bookReducer = (state = defaultBook, action) => {
  switch (action.type) {
    case addBook.type:
      return [...state, action.payload];
    case removeBook.type:
      return state.filter((book) => book.id !== action.payload.id);
    default:
      return state;
  }
};

export default bookReducer;
