import { Link } from "react-router-dom";

import "./Navbar.css";

const Navbar = () => {
  return (
    <nav>
      <Link to="/" className="navbar-brand">
        <span>TV</span>Maze
      </Link>
      <ul>
        <li>
          <a href="#">Profile</a>
        </li>
        <li>
          <a href="#">Register</a>
        </li>
        <li>
          <a href="#">Login</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
