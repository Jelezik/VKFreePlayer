import {createSlice} from '@reduxjs/toolkit';
import {getUserMusic} from '../actions/musicAction';

type musicType = {
  isLoading: boolean;
  error: unknown | string;
  musicData: any[];
};

const initialState: musicType = {
  isLoading: false,
  error: '',
  musicData: [],
};

export const musicSlice = createSlice({
  name: 'music',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getUserMusic.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(getUserMusic.fulfilled, (state, action) => {
      state.isLoading = false;
      state.musicData = action.payload;
    });
    builder.addCase(getUserMusic.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  },
});

export const musicReducer = musicSlice.reducer;
