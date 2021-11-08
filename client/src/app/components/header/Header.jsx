import { Nav } from 'react-bootstrap';
import './header.css';

const Header = () => (
  <div className="header-container">
    <div className="header-logo" />
    <div className="header-wrapper">
      <h1 className="header">IRS - INvestments in reliable stocks</h1>
      <Nav activeKey="/home" data-testid="nav">
        <Nav.Item>
          <Nav.Link className="nav-link" href="/home" disabled>
            market-activity
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link className="nav-link" eventKey="link-1">
            news and insights
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link className="nav-link" eventKey="link-2">
            solution
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link className="nav-link" eventKey="link-3">
            about
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </div>
  </div>
);
export default Header;
