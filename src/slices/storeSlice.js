import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  page: 1,
  chunkItems: [],
  pageCount: 0,
  sort: 'LOWPRICE',
};

const itemsCountShow = 7;

const itemsSlice = createSlice({
  name: 'store',
  initialState,
  reducers: {
    setInitialState: (state, { payload }) => {
      state.items = payload;
      state.chunkItems = payload.slice(0, itemsCountShow);
      state.pageCount = Math.trunc(state.items.length / itemsCountShow) + 1;
    },
    setPage: (state, { payload }) => {
      state.page = payload;
      const start = itemsCountShow * (payload - 1);
      const end = itemsCountShow * payload;
      state.chunkItems = state.items.slice(start, end);
    },
    setSort: (state, { payload }) => {
      state.sort = payload;
    },
  },
});

export const { actions } = itemsSlice;

export default itemsSlice.reducer;
