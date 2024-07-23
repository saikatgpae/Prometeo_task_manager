import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import tasksReducer from './Tasks/tasksRedux';

const rootReducer = combineReducers({
  tasks: tasksReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
