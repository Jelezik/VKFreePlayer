import {combineReducers, configureStore} from '@reduxjs/toolkit';
import {authReducer} from './reducers/authSlice';

export const rootReducer = combineReducers({
  auth: authReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
