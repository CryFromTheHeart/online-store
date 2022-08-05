import { configureStore } from '@reduxjs/toolkit';
import cartSlice, { actions as cartAction } from './cartSlice';
import filterSlice, { actions as filterAction } from './filterSlice';
import modalSlice, { actions as modalActions } from './modalAddItemSlice';
import storeSlice, { actions as itemsAction } from './storeSlice';

export const actions = {
  ...itemsAction,
  ...cartAction,
  ...filterAction,
  ...modalActions,
};

const store = configureStore({
  reducer: {
    storeInfo: storeSlice,
    cartInfo: cartSlice,
    filter: filterSlice,
    modal: modalSlice,
  },
});

export default store;
