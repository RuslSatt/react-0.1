import { combineReducers, configureStore } from '@reduxjs/toolkit';
import counterReducer from './counter/postSlice';

const rootReducers = combineReducers({ counterReducer });

export const store = configureStore({
    reducer: rootReducers,
});
