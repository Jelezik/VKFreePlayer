import {createAsyncThunk} from '@reduxjs/toolkit';
import {instance} from '../api/api';
import {handleAppRequestError} from '../utils/error-utils';

export const getUserMusic = createAsyncThunk(
  'user/getMusic',
  async ({token}: {token: string}, thunkAPI) => {
    try {
      const response = await instance.get('audio.getFavorites?v=5.131', {
        headers: {Authorization: `Bearer ${token}`},
      });

      console.log(response.data);
      return response.data;
    } catch (e) {
      console.log(e);
      return thunkAPI.rejectWithValue(handleAppRequestError(e));
    }
  },
);
