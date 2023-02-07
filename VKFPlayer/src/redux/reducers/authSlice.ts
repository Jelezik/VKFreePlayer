import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  isLoading: false,
  error: '',
  token: '',
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    takeAuthToken(state, action) {
      state.token = action.payload;
    },
  },
});

export const authReducer = authSlice.reducer;
