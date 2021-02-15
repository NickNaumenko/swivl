import { combineReducers } from 'redux';
import usersReducer from '../features/Users/usersSlice';

export default combineReducers({
  users: usersReducer,
});
