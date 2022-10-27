import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

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

const persistConfig = {
  key: 'filter',
  storage,
};

export const { setFilter } = filterSlice.actions;
// export const filterReducer = filterSlice.reducer;
export const filterReducer = persistReducer(persistConfig, filterSlice.reducer);
