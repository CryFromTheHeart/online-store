import { configureStore } from '@reduxjs/toolkit';
import cartSlice, { actions as cartAction } from './cartSlice';
import filterSlice, { actions as filterAction } from './filterSlice';
import storeSlice, { actions as itemsAction } from './storeSlice';

export const actions = { ...itemsAction, ...cartAction, ...filterAction };

const store = configureStore({
  reducer: {
    storeInfo: storeSlice,
    cartInfo: cartSlice,
    filter: filterSlice,
  },
});

export default store;
