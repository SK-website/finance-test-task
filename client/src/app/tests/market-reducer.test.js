import reducer, { setTickersFullDataAction } from '../store/reducers/market-reducer';

test('should return the initial state', () => {
  expect(reducer(undefined, {})).toEqual({
    tickers: [],
    userTickers: [],
    intervalList: ['1 s', '5 s', '15 s', '30 s', '60 s'],
    interval: 5000,
  });
});

test('should handle tickers being added to an empty array', () => {
  const previousState = {
    tickers: [],
    userTickers: [],
    intervalList: ['1 s', '5 s', '15 s', '30 s', '60 s'],
    interval: 5000,
  };
  expect(
    reducer(
      previousState,
      setTickersFullDataAction([
        {
          ticker: 'AAAA',
          exchange: 'NASDAQ',
          price: 122,
          change: 2,
          change_percent: 0.7,
          dividend: 11,
          yield: 2,
          last_trade_time: '11.44',
        },
      ])
    )
  ).toEqual({
    tickers: [
      {
        ticker: 'AAAA',
        exchange: 'NASDAQ',
        price: 122,
        change: 2,
        change_percent: 0.7,
        dividend: 11,
        yield: 2,
        last_trade_time: '11.44',
      },
    ],
    userTickers: [],
    intervalList: ['1 s', '5 s', '15 s', '30 s', '60 s'],
    interval: 5000,
  });
});
