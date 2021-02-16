import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { loadingStates } from 'helpers/constants';
import * as githubApi from 'services/githubApi';

const initialState = {
  data: {},
  status: loadingStates.IDLE,
  error: null,
};

export const fetchUser = createAsyncThunk(
  'user/fetch',
  async (username) => {
    const response = await githubApi.getUser(username);
    return response;
  },
);

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    removeUser() {
      return initialState;
    },
  },
  extraReducers: {
    [fetchUser.pending]: (state) => {
      state.status = loadingStates.LOADING;
    },
    [fetchUser.fulfilled]: (state, { payload }) => {
      state.data = payload;
      state.status = loadingStates.SUCCEEDED;
    },
    [fetchUser.rejected]: (state, { error }) => {
      state.error = error;
      state.status = loadingStates.FAILED;
    },
  },
});

export const { removeUser } = userSlice.actions;

export const selectCurrentUser = ({ user: { data } }) => data;
export const selectUserStatus = ({ user: { status } }) => status;

export default userSlice.reducer;
