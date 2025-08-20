import { Link } from 'react-router-dom';
import '../styles/css/App.css'; // Make sure global CSS is imported

function Navbar() {
  return (
    <nav id="navmenu" className="navmenu">
      <ul>
        <li><Link to="/" className="active">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/blog">Blog</Link></li>
        <li className="dropdown">
          <Link to="#"><span>Dropdown</span> <i className="bi bi-chevron-down toggle-dropdown"></i></Link>
          <ul>
            <li><Link to="#">Dropdown 1</Link></li>
            <li className="dropdown">
              <Link to="#"><span>Deep Dropdown</span> <i className="bi bi-chevron-down toggle-dropdown"></i></Link>
              <ul>
                <li><Link to="#">Deep Dropdown 1</Link></li>
                <li><Link to="#">Deep Dropdown 2</Link></li>
                <li><Link to="#">Deep Dropdown 3</Link></li>
                <li><Link to="#">Deep Dropdown 4</Link></li>
                <li><Link to="#">Deep Dropdown 5</Link></li>
              </ul>
            </li>
            <li><Link to="#">Dropdown 2</Link></li>
            <li><Link to="#">Dropdown 3</Link></li>
            <li><Link to="#">Dropdown 4</Link></li>
          </ul>
        </li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
      <i className="mobile-nav-toggle d-xl-none bi bi-list"></i>
    </nav>
  );
}

export default Navbar;
