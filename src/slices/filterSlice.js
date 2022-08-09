/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import { has } from 'lodash';
import { actions as storeActions } from './storeSlice';

const { setInitialState } = storeActions;

const initialState = { activeFilters: {}, filters: {} };

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    activeFilter: (state, { payload }) => {
      const { type, value } = payload;
      state.activeFilters = { ...state.activeFilters, [type]: value };
    },
    resetFilters: (state) => {
      state.activeFilters = {};
    },
  },
  extraReducers: (builder) => {
    builder.addCase(setInitialState, (state, { payload }) => {
      state.filters = payload.reduce((acc, { desc }) => {
        Object.entries(desc).forEach(([key, { name, value }]) => {
          if (has(acc, key)) {
            const property = acc[key];
            property.filterList = property.filterList.includes(value)
              ? property.filterList
              : [...property.filterList, value];
          } else {
            acc[key] = { name, filterList: [value] };
          }
        });
        return acc;
      }, {});
    });
  },
});

export const { actions } = filterSlice;

export default filterSlice.reducer;
