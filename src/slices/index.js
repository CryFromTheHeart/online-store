import { configureStore } from '@reduxjs/toolkit';
import cartSlice, { actions as cartAction } from './cartSlice';
import itemsSlice, { actions as itemsAction } from './itemsSlice';

export const actions = { ...itemsAction, ...cartAction };

const store = configureStore({
  reducer: {
    itemsInfo: itemsSlice,
    cartInfo: cartSlice,
  },
});

export default store;
