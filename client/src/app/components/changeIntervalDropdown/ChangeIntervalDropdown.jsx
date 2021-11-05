import { useEffect } from 'react';
import { DropdownButton, Dropdown } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import socket from '../../socket/socket';
import { setIntervalAction } from '../../store/reducers/market-reducer';

const ChangeIntervalDropdown = () => {
  const dispatch = useDispatch();
  const { interval, intervalList } = useSelector((state) => state.market);

  useEffect(() => {
    socket.emit('clear');
    socket.emit('update_interval', { int: interval });
  }, [interval]);

  const handelChangeIntervalButtonClick = (int) => {
    const newInt = parseInt(int, 10) * 1000;
    dispatch(setIntervalAction(newInt));
  };

  return (
    <div>
      <DropdownButton
        id="dropdown-basic-button"
        variant="Secondary"
        className="settings-item"
        title="Set data refresh interval"
      >
        {intervalList.map((el) => (
          <Dropdown.Item key={el} onClick={() => handelChangeIntervalButtonClick(el)}>
            {el}
          </Dropdown.Item>
        ))}
      </DropdownButton>
    </div>
  );
};

export default ChangeIntervalDropdown;
