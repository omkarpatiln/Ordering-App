// src/redux/productsSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: [], // will store the product list
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProducts(state, action) {
      state.data = action.payload;
    },
  addProduct(state, action) {
  const index = state.data.findIndex(product => product.id === action.payload.id);

  if (index !== -1) {
    // If product exists, increment cartCount
    state.data[index].cartCount += 1;
  } else {
    // If product doesn't exist, add it with cartCount = 1
    state.data.push({
      ...action.payload,
      cartCount: 1,
    });
  }
},
   removeProduct(state, action) {
  const index = state.data.findIndex(product => product.id === action.payload);

  if (index !== -1) {
    const product = state.data[index];

    if (product.cartCount > 1) {
      product.cartCount -= 1;
    } else {
      // If count is 1 or less, remove the product from the list
      state.data.splice(index, 1);
    }
  }
}
  },
});

export const { setProducts,addProduct ,removeProduct} = productsSlice.actions;

export default productsSlice.reducer;
