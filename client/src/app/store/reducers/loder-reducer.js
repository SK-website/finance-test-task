import { createSlice } from '@reduxjs/toolkit';

const loaderSlice = createSlice({
  name: 'loaderState',
  initialState: {
    isLoading: true,
  },
  reducers: {
    showLoaderction: (state) => {
      state.isLoading = true;
    },
    closeLoaderAction: (state) => {
      state.isLoading = false;
    },
  },
});

export default loaderSlice.reducer;
export const { showLoaderction, closeLoaderAction } = loaderSlice.actions;
