import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';
const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};
export const addUser = createAsyncThunk(
  'user/add',
  async (data, { rejectWithValue }) => {
    try {
      const response = await axios.post('/users/signup', data);
      token.set(response.data.token);
      return response.data;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);

export const login = createAsyncThunk(
  'user/login',
  async (data, { rejectWithValue }) => {
    try {
      const response = await axios.post('/users/login', data);
      token.set(response.data.token);
      return response.data;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);

export const logOut = createAsyncThunk(
  'user/logOut',
  async (_, { rejectWithValue }) => {
    try {
      await axios.post('/users/logout');
      token.unset();
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);

export const currentUser = createAsyncThunk(
  'user/currentUser',
  async (_, { rejectWithValue, getState }) => {
    const state = getState();
    const persToken = state.user.token;
    if (persToken === null) {
      return rejectWithValue();
    }
    try {
      token.set(persToken);
      const response = await axios.get('/users/current');
      return response.data;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);
