import { createSlice } from '@reduxjs/toolkit';

const stateSlice = createSlice({
  name: 'sliceTest',
  initialState: {
    tickers: [],
    count: 8,
  },
  reducers: {
    setTickersDataAction: (state, dataFromServer) => {
      state.tickers = [];
      dataFromServer.payload.map((el) => state.tickers.push(el));
    },
    incrementAction: (state) => {
      state.count += 1;
    },
    decrementAction: (state) => {
      state.count -= 1;
    },
  },
});

export default stateSlice.reducer;
export const { setTickersDataAction, incrementAction, decrementAction } = stateSlice.actions;
