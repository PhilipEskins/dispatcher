import React from 'react';
import { Link } from 'react-router-dom';

function Main() {
  return(
    <div>
      <h1>Main works</h1>
      <Link to='/employee'>Employee</Link>
    </div>
  );
}

export default Main;
