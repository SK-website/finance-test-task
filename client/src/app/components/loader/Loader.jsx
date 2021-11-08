import { Spinner } from 'react-bootstrap';
import './loader.css';

const Loader = () => (
  <div className="container-loader">
    <Spinner animation="border" variant="primary" />
    <p>Loading...</p>
  </div>
);

export default Loader;
