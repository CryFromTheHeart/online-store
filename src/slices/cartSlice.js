import { createSlice } from '@reduxjs/toolkit';

const initialState = { items: [], ids: [] };

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, { payload }) => {
      if (state.ids.includes(payload)) {
        state.items = state.items.map((item) =>
          item.id === payload ? { ...item, count: (item.count += 1) } : item
        );
      } else {
        state.items.push({ id: payload, count: 1 });
        state.ids.push(payload);
      }
    },
    removeFromCart: (state, { payload }) => {
      state.ids = state.ids.filter((id) => id !== payload);
      state.items = state.items.filter(({ id }) => id !== payload);
    },
    decreamentCountById: (state, { payload }) => {
      state.items = state.items.map((item) =>
        item.id === payload ? { ...item, count: item.count - 1 } : { ...item }
      );
    },
    incrementCountById: (state, { payload }) => {
      state.items = state.items.map((item) =>
        item.id === payload ? { ...item, count: item.count + 1 } : { ...item }
      );
    },
  },
});

export const { actions } = cartSlice;

export default cartSlice.reducer;
