import { createStore, combineReducers } from 'redux';
import bookReducer from './reducers/book';
import filterReducer from './reducers/filter';

const mainReducer = combineReducers({
  bookReducer,
  filterReducer,
});

const store = createStore(mainReducer);

export default store;
