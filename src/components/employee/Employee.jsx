import React from 'react';
import { Link } from 'react-router-dom';

function Employee() {
  return(
    <div>
      <h2>Employee Section</h2>
      <p><Link to='/newemployee'>Add new Employee</Link></p>
      <p><Link to='/employeelist'>View Employees</Link></p>
    </div>
  );
}

export default Employee;
