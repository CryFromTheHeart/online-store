import { createSlice } from '@reduxjs/toolkit';

const initialState = { items: [] };

const itemsSlice = createSlice({
  name: 'items',
  initialState,
  reducers: {
    setInitialState: (state, { payload }) => {
      state.items = payload;
    },
  },
});

export const { actions } = itemsSlice;

export default itemsSlice.reducer;
