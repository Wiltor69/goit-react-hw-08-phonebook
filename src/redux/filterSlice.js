import { createSlice } from '@reduxjs/toolkit';

const filterInitial = {
  filter: '',
};

const filterSlice = createSlice({
  name: 'filter',
  initialState: filterInitial,
  reducers: {
    filterList(state, action) {
      state.filter = action.payload;
    },
  },
});

export const { filterList } = filterSlice.actions;
export const filterReduce = filterSlice.reducer;
