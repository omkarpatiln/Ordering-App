// src/redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import productsReducer from './productsSlice';

const store = configureStore({
  reducer: {
    products: productsReducer,
  },
});

export default store;
