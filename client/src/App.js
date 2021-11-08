import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { v4 } from 'uuid';
import './App.css';
import AddTickerDropdown from './app/components/addTickerDropdown/AddTickerDropdown';
import ChangeIntervalDropdown from './app/components/changeIntervalDropdown/ChangeIntervalDropdown';
import Header from './app/components/header/Header';
import Loader from './app/components/loader/Loader';
import MarketActivityTable from './app/components/marketActivityTable/MarketActivityTable';
import socket from './app/socket/socket';
import { closeLoaderAction } from './app/store/reducers/loder-reducer';
import { setTickersFullDataAction } from './app/store/reducers/market-reducer';

function App() {
  const dispatch = useDispatch();
  const { isLoading } = useSelector((state) => state.loaderState);

  useEffect(() => {
    socket.on('connect', () => {
      dispatch(closeLoaderAction());
    });

    socket.on('connect_error', () => {
      document.write(`Sorry, there seems to be an issue with the connection!<br/>`);
    });

    socket.on('connect_failed', () => {
      document.write(`Sorry, there seems to be an issue with the connection!<br/>`);
    });

    socket.on('ticker', (arrOfTickers) => {
      const tickersWithId = arrOfTickers.map((el) => {
        // add id to every ticker
        const ID = v4();
        // change the number to negative to show rate cu
        if (el.change < 70) {
          el.change *= -1;
          el.change_percent *= -1;
        }
        return { ...el, id: ID };
      });
      dispatch(setTickersFullDataAction(tickersWithId));
    });
    socket.emit('start', () => {});
    socket.emit('my event', { event: 'one' });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return !isLoading ? (
    <div>
      <Header />
      <div className="container-main">
        <div className="settings-container">
          <AddTickerDropdown />
          <ChangeIntervalDropdown />
        </div>
        <MarketActivityTable />
      </div>
    </div>
  ) : (
    <Loader />
  );
}

export default App;
