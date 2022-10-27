import { createSlice } from '@reduxjs/toolkit';

const filterState = '';

export const filterSlice = createSlice({
  name: 'filter',
  initialState: filterState,
  reducers: {
    setFilter(state, action) {
      return (state = action.payload);
    },
  },
});

export const { setFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
