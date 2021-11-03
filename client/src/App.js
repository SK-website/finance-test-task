import { useContext, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import socket from './app/socket/socket';
import { setTickersDataAction, incrementAction, decrementAction } from './app/store/reducers/slice';

function App() {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.sliceTest.count);
  const tickers = useSelector((state) => state.sliceTest.tickers);
  useEffect(() => {
    socket.on('connect', () => {
      console.log('You connected with ID: ', socket.id);
    });
    socket.on('ticker', (obj) => {
      dispatch(setTickersDataAction(obj));
      console.log(obj);
    });
    socket.emit('start', () => {});
    socket.emit('my event', { event: 'one' });
  }, []);

  const asyncfoo = async () => {
    setTimeout(() => {
      dispatch(incrementAction());
    }, 5000);
  };
  // const foo = () => {
  //   dispatch(incrementAction());
  //   console.log('inc', count);
  // };
  const foo2 = () => {
    dispatch(decrementAction());
    console.log('dec', count);
  };

  return (
    <div className="App">
      <button type="button" onClick={asyncfoo}>
        increment
      </button>
      <p>{count}</p>
      <button type="button" onClick={foo2}>
        decrement
      </button>
    </div>
  );
}

export default App;
