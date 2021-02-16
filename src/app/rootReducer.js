import userSlice from 'features/User/userSlice';
import { combineReducers } from 'redux';
import usersSlice from '../features/Users/usersSlice';

export default combineReducers({
  users: usersSlice,
  user: userSlice,
});
