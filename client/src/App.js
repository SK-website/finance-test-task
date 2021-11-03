import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import MarketActivityTable from './app/components/marketActivityTable/MarketActivityTable';
import socket from './app/socket/socket';
import {
  setTickersDataAction,
  incrementAction,
  decrementAction,
  setTickersFullDataAction,
} from './app/store/reducers/market-reducer';

function App() {
  const dispatch = useDispatch();
  // const { count } = useSelector((state) => state.market);
  const { tickers } = useSelector((state) => state.market);
  useEffect(() => {
    socket.on('connect', () => {
      console.log('You connected with ID: ', socket.id);
    });
    socket.on('ticker', (obj) => {
      if (!tickers.length) dispatch(setTickersFullDataAction(obj));
      dispatch(setTickersDataAction(obj));
    });
    socket.emit('start', () => {});
    socket.emit('my event', { event: 'one' });
  }, []);

  // const asyncfoo = async () => {
  //   setTimeout(() => {
  //     dispatch(incrementAction());
  //   }, 5000);
  // };
  // const foo = () => {
  //   dispatch(incrementAction());
  //   console.log('inc', count);
  // };
  // const foo2 = () => {
  //   dispatch(decrementAction());
  //   console.log('dec', count);
  // };

  return (
    <div className="container-main">
      <MarketActivityTable />
      {/* <button type="button" onClick={asyncfoo}>
        increment
      </button>
      <p>{count}</p>
      <button type="button" onClick={foo2}>
        decrement
      </button> */}
    </div>
  );
}

export default App;
