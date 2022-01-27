import React from "react";
import './Navbar.scss';

function Navbar() {
  return (
    <nav className='navbar'>
      <ul className='navbar-content'>
        <li className='navbar-item'>
          <a href='s#'>Profile</a>
        </li>
        <li className='navbar-item'>
          <a href='s#'>Messages</a>
        </li>
        <li className='navbar-item'>
          <a href='s#'>News</a>
        </li>
        <li className='navbar-item'>
          <a href='s#'>Music</a>
        </li>
        <li className='navbar-item'>
          <a href='s#'>Settings</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;