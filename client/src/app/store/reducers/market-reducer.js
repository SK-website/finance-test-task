import { createSlice } from '@reduxjs/toolkit';

const createId = () => Math.round(Math.random() * 10000).toString();

const marketSlice = createSlice({
  name: 'market',
  initialState: {
    tickers: [],
    userTickers: [],
    count: 8,
  },
  reducers: {
    setTickersFullDataAction: (state, dataFromServer) => {
      state.tickers = [];
      dataFromServer.payload.map((el) => {
        const newDate = { ...el };
        newDate.id = createId();
        state.tickers.push(newDate);
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
    incrementAction: (state) => {
      state.count += 1;
    },
    decrementAction: (state) => {
      state.count -= 1;
    },
  },
});

export default marketSlice.reducer;
export const { setTickersFullDataAction, setTickersDataAction, removeTickerAction, incrementAction, decrementAction } =
  marketSlice.actions;
