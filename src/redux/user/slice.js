import { createSlice } from '@reduxjs/toolkit';
import { addUser, currentUser, login, logOut } from './operations';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: { name: null, email: null },
    token: null,
    isLogIn: false,
    isRefreshing: false,
  },
  extraReducers: {
    [addUser.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLogIn = true;
    },
    [login.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLogIn = true;
    },
    [logOut.fulfilled](state) {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLogIn = false;
    },
    [currentUser.pending](state) {
      state.isRefreshing = true;
    },
    [currentUser.fulfilled](state, action) {
      state.user = action.payload;
      state.isLogIn = true;
      state.isRefreshing = false;
    },
    [currentUser.rejected](state) {
      state.isRefreshing = false;
    },
  },
});

export default userSlice;
