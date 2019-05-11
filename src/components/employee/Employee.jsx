import React from 'react';
import { Link } from 'react-router-dom';

function Employee() {
  return(
    <div>
      <h2>Employee Works</h2>
      <p><Link to='/newemployee'>Add new Employee</Link></p>
    </div>
  );
}

export default Employee;
