import { render, screen } from './test-utils';
import App from '../../App';

describe('<App />', () => {
  test('loader is shown till connection to server', () => {
    render(<App />);
    expect(screen.getByText(/loading/i)).toBeInTheDocument();
  });
  test('ui components are shown when socket connection on', async () => {
    render(<App />);
    expect(await screen.findByTestId('nav')).toBeInTheDocument();
    expect(await screen.findByTestId('marketTable')).toBeInTheDocument();
    expect(await screen.findByText(/asset/i)).toBeInTheDocument();
    expect(await screen.findByText(/interval/i)).toBeInTheDocument();
  });
});
