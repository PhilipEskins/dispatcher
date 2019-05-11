import React from 'react';
import NewEmployee from '../employee/NewEmployee';
import PropTypes from 'prop-types';

function BasicInfo(props) {

  // let path = null;
  function pathCheck() {
    if (props.location === '/newemployee') {
      return (<NewEmployee />);
    } else {
      console.log(false);
    }
  }

  return (
    <div>
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
      <button type='button' onClick={pathCheck}>Next</button>
    </div>
  );
}

BasicInfo.propTypes = {
  location: PropTypes.string
};

export default BasicInfo;
