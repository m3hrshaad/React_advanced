import React from 'react';
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <>
      <ul>
        <li className="btn">
          <Link to="/">Home</Link>
        </li>
        <li className="btn">
          <Link to="/about">About</Link>
        </li>
        <li className="btn">
          <Link to="/people">People</Link>
        </li>
      </ul>
    </>
  )
};

export default Navbar;
