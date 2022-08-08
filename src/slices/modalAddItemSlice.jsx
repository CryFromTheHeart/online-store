/* eslint-disable no-param-reassign */

import { createSlice } from '@reduxjs/toolkit';
import { uniqueId } from 'lodash';

const initialState = { isOpen: false, propInfo: [] };

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openModal: (state) => {
      state.isOpen = true;
    },
    closeModal: (state) => {
      state.isOpen = false;
      state.propInfo = [];
    },
    addProperty: (state) => {
      state.propInfo = [
        ...state.propInfo,
        { title: '', value: '', id: uniqueId() },
      ];
    },
    changePropertyInfo: (state, { payload }) => {
      const { key, id, value } = payload;
      state.propInfo = state.propInfo.map((prop) => (prop.id === id ? { ...prop, [key]: value } : prop));
    },
    removeProperty: (state, { payload }) => {
      state.propInfo = state.propInfo.filter(({ id }) => id !== payload);
    },
  },
});

export const { actions } = modalSlice;

export default modalSlice.reducer;
