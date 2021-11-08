import { configureStore } from '@reduxjs/toolkit';
import marketSlice from './reducers/market-reducer';
import loaderSlice from './reducers/loder-reducer';

const store = configureStore({
  reducer: {
    loaderState: loaderSlice,
    market: marketSlice,
  },
});
export default store;
