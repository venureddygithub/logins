import {Link} from 'react-router-dom'

import './index.css'

const Header = () => (
  <nav className="nav-header">
    <div className="blog-container">
      <h1 className="blog-title">Dev Blog</h1>
      <ul className="nav-menu">
        <li>
          <Link className="nav-link" to="/">
            Home
          </Link>
        </li>
        <li>
          <Link className="nav-link" to="/about">
            About
          </Link>
        </li>
        <li>
          <Link className="nav-link" to="/contact">
            Contact
          </Link>
        </li>
        <div className="login-register">
          <li>
            <Link className="nav-link" to="/login">
              Login
            </Link>
          </li>
          <li>
            <Link className="nav-link" to="/register">
              Register
            </Link>
          </li>
        </div>
      </ul>
    </div>
  </nav>
)

export default Header
