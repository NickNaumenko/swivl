import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';

const usersAdapter = createEntityAdapter({
  selectId: ({ id }) => id,
  sortComparer: ({ id: id1 }, { id: id2 }) => id1 - id2,
});

const initialState = usersAdapter.getInitialState();

const usersSlice = createSlice({
  name: 'users',
  initialState,
});

export default usersSlice.reducer;
