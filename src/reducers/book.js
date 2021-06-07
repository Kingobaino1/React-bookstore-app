import { v4 as uuidv4 } from 'uuid';

const defaultBook = [
  {
    id: uuidv4(), title: 'Things fall apart', category: 'History', author: 'Chinua Achebe',
  },
  {
    id: uuidv4(), title: 'There was a country', category: 'Biography', author: 'Chinua Achebe',
  },
  {
    id: uuidv4(), title: 'Half of a yellow sun', category: 'History', author: 'Chiamanda Adichie',
  },
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
