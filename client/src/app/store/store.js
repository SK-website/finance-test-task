import { configureStore } from '@reduxjs/toolkit';
// import marketReducer from './reducers/market-reducer';
import marketSlice from './reducers/market-reducer';

// const rootReducer = combineReducers({
//   sliceTest: stateSlice,
// });

// const store = configureStore({
//   reducer: rootReducer,
// });
const store = configureStore({
  reducer: {
    market: marketSlice,
  },
});
export default store;
