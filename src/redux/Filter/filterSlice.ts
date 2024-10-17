import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
  searchValue: '',
  category: 'all',
  currentPage: '',
  sort: 'popularity',
};

const filterSlice = createSlice({
  name: 'filter',
  initialState: initialState,
  reducers: {
    setSearchValue: (state, action: PayloadAction<string>) => {
      console.log(action.payload);
      state.searchValue = action.payload;
    },
    setCategory: (state, action: PayloadAction<string>) => {
      state.category = action.payload;
    },
    setCurrentPage: (state, action: PayloadAction<string>) => {
      state.currentPage = action.payload;
    },
    setSort: (state, action: PayloadAction<string>) => {
      state.sort = action.payload;
    },
  },
});

export const filterReducer = filterSlice.reducer;
export const filterActions = filterSlice.actions;
