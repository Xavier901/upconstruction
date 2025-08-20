import {Link} from 'react-router-dom'




function Navbar() {
    return(
          <nav id="navmenu" className="navmenu">
        <ul>
          <li><Link to="index.html" className="active">Home</Link></li>
          <li><Link to="about.html">About</Link></li>
          <li><Link to="services.html">Services</Link></li>
          <li><Link to="projects.html">Projects</Link></li>
          <li><Link to="blog.html">Blog</Link></li>
          <li class="dropdown"><Link href="#"><span>Dropdown</span> <i class="bi bi-chevron-down toggle-dropdown"></i></Link>
            <ul>
              <li><Link href="#">Dropdown 1</Link></li>
              <li class="dropdown"><Link href="#"><span>Deep Dropdown</span> <i class="bi bi-chevron-down toggle-dropdown"></i></Link>
                <ul>
                  <li><Link href="#">Deep Dropdown 1</Link></li>
                  <li><Link href="#">Deep Dropdown 2</Link></li>
                  <li><Link href="#">Deep Dropdown 3</Link></li>
                  <li><Link href="#">Deep Dropdown 4</Link></li>
                  <li><Link href="#">Deep Dropdown 5</Link></li>
                </ul>
              </li>
              <li><Link href="#">Dropdown 2</Link></li>
              <li><Link href="#">Dropdown 3</Link></li>
              <li><Link href="#">Dropdown 4</Link></li>
            </ul>
          </li>
          <li><Link href="contact.html">Contact</Link></li>
        </ul>
        <i class="mobile-nav-toggle d-xl-none bi bi-list"></i>
      </nav>

    );
}

export default Navbar;