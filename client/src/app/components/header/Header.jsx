import { Nav } from 'react-bootstrap';
import './header.css';

const Header = () => (
  <div className="header-container">
    <div className="header-logo" />
    <div className="header-wrapper">
      <h1 className="header">IRS INvestments in reliable stocks</h1>
      <Nav activeKey="/home">
        <Nav.Item className="nav-item">
          <Nav.Link className="nav-item" href="/home" disabled>
            market-activity
          </Nav.Link>
        </Nav.Item>
        <Nav.Item className="nav-item">
          <Nav.Link className="nav-item" eventKey="link-1">
            News and Insights
          </Nav.Link>
        </Nav.Item>
        <Nav.Item className="nav-item">
          <Nav.Link className="nav-item" eventKey="link-2">
            Solution
          </Nav.Link>
        </Nav.Item>
        <Nav.Item className="nav-item">
          <Nav.Link className="nav-item" eventKey="link-3">
            About
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </div>
  </div>
);
export default Header;
