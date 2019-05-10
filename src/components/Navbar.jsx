import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return(
    <div>
      <Link to='/'>Home</Link>
      <Link to='/employee'>Employee</Link>
      <Link to='/workorders'>Work Orders</Link>
      <Link to='/customers'>Customers</Link>
    </div>
  );
}

export default Navbar;
