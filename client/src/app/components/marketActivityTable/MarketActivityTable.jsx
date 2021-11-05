import { Table } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { removeTickerAction } from '../../store/reducers/market-reducer';
import './market-activity-table.css';

const MarketActivityTable = () => {
  const dispatch = useDispatch();
  const { tickers, userTickers } = useSelector((state) => state.market);
  const formatDate = (date) => new Date(date).toGMTString('ru_UA');
  // console.log(formDate);

  const handelDeleteButtonClick = (id) => {
    dispatch(removeTickerAction(id));
  };
  return (
    <div className="market-act-container">
      <Table striped bordered hover size="sm">
        <thead>
          <tr className="table-title">
            <th>ticker</th>
            <th>exchange</th>
            <th>last price, $</th>
            <th>change, $</th>
            <th>change, %</th>
            <th>divident</th>
            <th>yield</th>
            <th colSpan="2">last trade time</th>
          </tr>
        </thead>
        <tbody>
          {userTickers.length
            ? tickers.map((el) => {
                const isUserTicker = userTickers.some((item) => item === el.ticker);
                return isUserTicker ? (
                  <tr key={el.id}>
                    <td className="market-activity-cell ticker-cell">{el.ticker}</td>
                    <td className="market-activity-cell">{el.exchange}</td>
                    <td className="market-activity-cell">{el.price}</td>
                    <td
                      className={`market-activity-cell numbers-cell volatility ${
                        el.change < 0 ? 'cell-down' : 'cell-up'
                      }`}
                    >
                      {el.change}
                    </td>
                    <td
                      className={`market-activity-cell numbers-cell volatility ${
                        el.change < 0 ? 'cell-down' : 'cell-up'
                      }`}
                    >
                      {el.change_percent}
                    </td>
                    <td className="market-activity-cell numbers-cell">{el.dividend}</td>
                    <td className="market-activity-cell numbers-cell">{el.yield}</td>
                    <td className="market-activity-cell">{formatDate(el.last_trade_time)}</td>
                    <td
                      className="market-activity-cell minus-cell"
                      role="gridcell"
                      tabIndex="0"
                      onClick={() => {
                        handelDeleteButtonClick(el.ticker);
                      }}
                      onKeyPress={() => handelDeleteButtonClick(el.ticker)}
                    >
                      <p className="hidden">delete</p>
                    </td>
                  </tr>
                ) : null;
              })
            : tickers.map((el) => (
                <tr key={el.id}>
                  <td className="market-activity-cell ticker-cell">{el.ticker}</td>
                  <td className="market-activity-cell">{el.exchange}</td>
                  <td className="market-activity-cell">{el.price}</td>
                  <td
                    className={`market-activity-cell numbers-cell volatility ${
                      el.change < 0 ? 'cell-down' : 'cell-up'
                    }`}
                  >
                    {el.change}
                  </td>
                  <td
                    className={`market-activity-cell numbers-cell volatility ${
                      el.change < 0 ? 'cell-down' : 'cell-up'
                    }`}
                  >
                    {el.change_percent}
                  </td>
                  <td className="market-activity-cell numbers-cell">{el.dividend}</td>
                  <td className="market-activity-cell numbers-cell">{el.yield}</td>
                  <td className="market-activity-cell">{formatDate(el.last_trade_time)}</td>
                  <td
                    className="market-activity-cell minus-cell"
                    role="gridcell"
                    tabIndex="0"
                    onClick={() => handelDeleteButtonClick(el.ticker)}
                    onKeyPress={() => handelDeleteButtonClick(el.ticker)}
                  >
                    <p className="hidden">delete</p>
                  </td>
                </tr>
              ))}
        </tbody>
      </Table>
    </div>
  );
};

export default MarketActivityTable;
