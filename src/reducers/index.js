import { createStore } from 'redux';
import bookReducer from './book';

const store = createStore(bookReducer);

export default store;
