import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  page: 1,
  sort: 'LOWPRICE',
};

const itemsCountShow = 7;

const itemsSlice = createSlice({
  name: 'store',
  initialState,
  reducers: {
    setInitialState: (state, { payload }) => {
      state.items = payload;
    },
    setPage: (state, { payload }) => {
      state.page = payload;
    },
    setSort: (state, { payload }) => {
      state.sort = payload;
    },
    addItem: (state, { payload }) => {
      state.items = [...state.items, payload];
    },
  },
});

export const { actions } = itemsSlice;

export default itemsSlice.reducer;
