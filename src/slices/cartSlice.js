/* eslint-disable no-param-reassign */

import { createSlice } from '@reduxjs/toolkit';

const initialState = { items: [], ids: [], cost: 0 };

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, { payload }) => {
      const { price, id } = payload;
      if (state.ids.includes(id)) {
        state.items = state.items.map((item) => (item.id === id ? { ...item, count: (item.count += 1) } : item));
      } else {
        state.items.push({ id, count: 1 });
        state.ids.push(id);
      }
      state.cost += parseInt(price, 10);
    },
    removeFromCart: (state, { payload }) => {
      const { id: idItem, count, price } = payload;
      state.ids = state.ids.filter((id) => id !== idItem);
      state.items = state.items.filter(({ id }) => id !== idItem);
      state.cost -= count * price;
    },
    decreamentCountById: (state, { payload }) => {
      const { id, price } = payload;
      state.items = state.items.map((item) => (item.id === id ? { ...item, count: item.count - 1 } : { ...item }));
      state.cost -= price;
    },
    incrementCountById: (state, { payload }) => {
      const { id, price } = payload;
      state.items = state.items.map((item) => (item.id === id ? { ...item, count: item.count + 1 } : { ...item }));
      state.cost += parseInt(price, 10);
    },
  },
});

export const { actions } = cartSlice;

export default cartSlice.reducer;
