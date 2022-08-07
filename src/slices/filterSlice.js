/* eslint-disable no-param-reassign */

import { createSlice } from '@reduxjs/toolkit';

const initialState = { activeFilters: {} };

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    addFilter: (state, { payload }) => {
      const { type, value } = payload;
      state.activeFilters = { ...state.activeFilters, [type]: value };
    },
  },
});

export const { actions } = filterSlice;

export default filterSlice.reducer;
