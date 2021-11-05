import { DropdownButton, Dropdown } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';

import { addTickerAction } from '../../store/reducers/market-reducer';

const AddTickerDropdown = () => {
  const dispatch = useDispatch();
  const { tickers, userTickers } = useSelector((state) => state.market);

  const handelAddTickerButtonClick = (tickerName) => {
    !userTickers.find((el) => el === tickerName) && dispatch(addTickerAction(tickerName));
  };

  return (
    <div>
      <DropdownButton
        id="dropdown-basic-button"
        variant="Secondary"
        className="settings-item"
        title="Add assets to watch list"
      >
        {tickers.map((el) => (
          <Dropdown.Item key="el.ticker" onClick={() => handelAddTickerButtonClick(el.ticker)}>
            {el.ticker}
          </Dropdown.Item>
        ))}
      </DropdownButton>
    </div>
  );
};

export default AddTickerDropdown;
