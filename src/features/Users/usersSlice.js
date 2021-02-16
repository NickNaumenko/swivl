import { createAsyncThunk, createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { loadingStates } from 'helpers/constants';
import * as githubApi from 'services/githubApi';

const usersAdapter = createEntityAdapter({
  selectId: ({ id }) => id,
  sortComparer: ({ id: id1 }, { id: id2 }) => id1 - id2,
});

const initialState = usersAdapter.getInitialState({
  hasMore: true,
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
      const { data, hasMore } = payload;
      usersAdapter.addMany(state, data);
      state.hasMore = hasMore;
      state.status = loadingStates.SUCCEEDED;
    },
    [fetchUsers.rejected]: (state, { error }) => {
      state.error = error;
      state.status = loadingStates.FAILED;
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
