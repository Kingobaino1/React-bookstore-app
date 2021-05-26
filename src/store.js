import { createStore } from 'redux';
import bookReducer from './reducers/book';

const store = createStore(bookReducer);

export default store;
