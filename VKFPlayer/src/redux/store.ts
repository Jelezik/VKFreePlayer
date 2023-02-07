import {combineReducers, configureStore} from '@reduxjs/toolkit';
import {authReducer} from './reducers/authSlice';
import {musicReducer} from './reducers/musicSlice';

export const rootReducer = combineReducers({
  auth: authReducer,
  music: musicReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
