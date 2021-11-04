import { createSlice } from '@reduxjs/toolkit';

const createId = () => Math.round(Math.random() * 10000).toString();

const marketSlice = createSlice({
  name: 'market',
  initialState: {
    tickers: [],
    userTickers: [],
    intervalList: ['5 s', '15 s', '30 s', '60 s'],
    interval: 5000,
    count: 8,
  },
  reducers: {
    setTickersFullDataAction: (state, dataFromServer) => {
      state.tickers = [];
      dataFromServer.payload.map((el) => {
        el.id = createId();
        if (el.change < 70) {
          el.change *= -1;
          el.change_percent *= -1;
        }
        state.tickers.push(el);
      });
    },
    setTickersDataAction: (state, dataFromServer) => {
      state.tickers = [];
      dataFromServer.payload.map((el) => {
        const newDate = { ...el };
        newDate.id = createId();
        state.tickers.push(newDate);
      });
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

    incrementAction: (state) => {
      state.count += 1;
    },
    decrementAction: (state) => {
      state.count -= 1;
    },
  },
});

export default marketSlice.reducer;
export const {
  setTickersFullDataAction,
  setTickersDataAction,
  removeTickerAction,
  addTickerAction,
  setIntervalAction,
  incrementAction,
  decrementAction,
} = marketSlice.actions;
