import React from 'react'
import {Link} from "react-router-dom"
import "../Styles/style.css"
import "../Styles/Navbar.css"

const Navbar = () => {
  return (
    <div className="navbar">
      <ul>
        <li>
          <Link to="/"> Home</Link>
        </li>
        <li>
          <Link to="/india"> India</Link>
        </li>
        <li>
          <Link to="/sports"> Sports</Link>
        </li>
        <li>
          <Link to="/technology"> Technology</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar