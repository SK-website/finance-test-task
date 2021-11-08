import { createSlice } from '@reduxjs/toolkit';

const marketSlice = createSlice({
  name: 'market',
  initialState: {
    tickers: [],
    userTickers: [],
    intervalList: ['1 s', '5 s', '15 s', '30 s', '60 s'],
    interval: 5000,
  },
  reducers: {
    setTickersFullDataAction: (state, dataFromServer) => {
      state.tickers.length = 0;
      state.tickers = dataFromServer.payload;
    },
    removeTickerAction: (state, ticker) => {
      if (!state.userTickers.length) {
        state.tickers.forEach((el) => {
          state.userTickers.push(el.ticker);
        });
        state.userTickers = state.userTickers.filter((el) => el !== ticker.payload);
      }
      state.userTickers = state.userTickers.filter((el) => el !== ticker.payload);
    },
    addTickerAction: (state, ticker) => {
      state.userTickers.push(ticker.payload);
    },
    setIntervalAction: (state, int) => {
      state.interval = int.payload;
    },
  },
});

export default marketSlice.reducer;
export const { setTickersFullDataAction, removeTickerAction, addTickerAction, setIntervalAction } = marketSlice.actions;
