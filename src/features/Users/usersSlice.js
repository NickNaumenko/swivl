import { createAsyncThunk, createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { loadingStates } from 'helpers/constants';
import * as githubApi from 'services/githubApi';

const usersAdapter = createEntityAdapter({
  selectId: ({ id }) => id,
  sortComparer: ({ id: id1 }, { id: id2 }) => id1 - id2,
});

const initialState = usersAdapter.getInitialState({
  status: loadingStates.IDLE,
  error: null,
});

export const fetchUsers = createAsyncThunk(
  'users/fetch',
  async (options) => {
    const response = await githubApi.getUsers(options);
    return response;
  },
);

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchUsers.pending]: (state) => {
      state.status = loadingStates.LOADING;
    },
    [fetchUsers.fulfilled]: (state, { payload }) => {
      const users = payload;
      usersAdapter.addMany(state, users);
    },
    [fetchUsers.rejected]: (state, { error }) => {
      state.error = error;
    },
  },
});

const usersSelectors = usersAdapter.getSelectors(
  ({ users }) => users,
);

export const {
  selectIds: selectUsersIds,
  selectById: selectUserById,
} = usersSelectors;

export default usersSlice.reducer;
