import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import AddTickerDropdown from './app/components/addTickerDropdown/AddTickerDropdow';
import ChangeIntervalDropdown from './app/components/changeIntervalDropdown/ChangeIntervalDropdown';

import Header from './app/components/header/Header';
import MarketActivityTable from './app/components/marketActivityTable/MarketActivityTable';
import socket from './app/socket/socket';
import { setTickersFullDataAction } from './app/store/reducers/market-reducer';

function App() {
  const dispatch = useDispatch();
  const { tickers } = useSelector((state) => state.market);
  useEffect(() => {
    socket.on('connect', () => {
      console.log('You connected with ID: ', socket.id);
    });
    socket.on('ticker', (obj) => {
      if (!tickers.length) dispatch(setTickersFullDataAction(obj));
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
    <div>
      <Header />
      <div className="container-main">
        <div className="settings-container">
          <AddTickerDropdown />
          <ChangeIntervalDropdown />
        </div>
        <MarketActivityTable />

        {/* <button type="button" onClick={asyncfoo}>
        increment
      </button>
      <p>{count}</p>
      <button type="button" onClick={foo2}>
        decrement
      </button> */}
      </div>
    </div>
  );
}

export default App;
