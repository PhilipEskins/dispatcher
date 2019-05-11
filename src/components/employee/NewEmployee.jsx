import React from 'react';

function NewEmployee() {
  return(
    <div>
      <h3>Add new Employee</h3>
      <form>
        <label for='fname'>First Name:</label>
        <input id='fname' type='input' /><br />
        <label for='lname'>Last Name:</label>
        <input id='lname' type='input' /><br />
        <label for='address'>Address:</label>
        <input id='address' type='input' /><br />
        <label for='city'>City:</label>
        <input id='city' type='input' /><br />
        <label for='state'>State:</label>
        <input id='state' type='input' /><br />
        <label for='zip'>Zip:</label>
        <input id='zip' type='zip' /><br />
        <label for='wage'>Wage/Rate:</label>
        <input id='wage' type='input' /><br />
        <label for='hire'>Hire Date:</label>
        <input id='hire' type='date' /><br />
      </form>
    </div>
  );
}

export default NewEmployee;
