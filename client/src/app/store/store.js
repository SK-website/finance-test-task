import { configureStore } from '@reduxjs/toolkit';
import stateSlice from './reducers/slice';

// const rootReducer = combineReducers({
//   sliceTest: stateSlice,
// });

// const store = configureStore({
//   reducer: rootReducer,
// });
const store = configureStore({
  reducer: {
    sliceTest: stateSlice,
  },
});
export default store;
