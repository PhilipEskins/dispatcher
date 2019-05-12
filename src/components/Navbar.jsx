import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return(
    <div>
      <Link to='/'>Home</Link> | &nbsp;
      <Link to='/employee'>Employee</Link> | &nbsp;
      <Link to='/workorders'>Work Orders</Link> | &nbsp;
      <Link to='/customers'>Customers</Link>
    </div>
  );
}

export default Navbar;
