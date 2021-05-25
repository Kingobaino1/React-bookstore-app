import { v4 as uuidv4 } from 'uuid';

const defaultBook = [
  { id: uuidv4(), title: 'Things fall apart', category: 'History' },
  { id: uuidv4(), title: 'There was a country', category: 'Biography' },
  { id: uuidv4(), title: 'Harry Potter', category: 'Horror' },
];

const bookReducer = (state = defaultBook, action) => {
  switch (action.type) {
    case 'CREATE_BOOK':
      return [...state, action.payload];
    case 'REMOVE_BOOK':
      return state.filter((book) => book.id !== action.payload.id);
    default:
      return state;
  }
};

export default bookReducer;
