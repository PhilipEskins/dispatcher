import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import { updateInfo } from './../../actions';
import { addEmployee } from './../../actions/firebase';

function NewEmployee(props) {

  let _firstName = null;
  let _lastName = null;
  let _address = null;
  let _city = null;
  let _state = null;
  let _zip = null;
  let _phone = null;
  let _email = null;
  // let _date =null;

  // Sends data to Firebase
  function reduxPush() {
    const { dispatch } = props;
    let newEmployee = {
      firstNameInput: _firstName.value,
      lastNameInput: _lastName.value,
      addressInput: _address.value,
      cityInput: _city.value,
      stateInput: _state.value,
      zipInput: _zip.value,
      phoneInput: _phone.value,
      emailInput: _email.value,
      // dateInput: _date.value,
    };
    dispatch(addEmployee(newEmployee));
  }

  return(
    <div>
      <h3>Add new Employee</h3>
      <label htmlFor='fname'>First Name:</label>
      <input id='fname' type='input' ref={(input) => {_firstName = input;}} /><br />
      <label htmlFor='lname'>Last Name:</label>
      <input id='lname' type='input' ref={(input) => {_lastName = input;}}/><br />
      <label htmlFor='address'>Address:</label>
      <input id='address' type='input' ref={(input) => {_address = input;}}/><br />
      <label htmlFor='city'>City:</label>
      <input id='city' type='input' ref={(input) => {_city = input;}}/><br />
      <label htmlFor='state'>State:</label>
      <input id='state' type='input' ref={(input) => {_state = input;}}/><br />
      <label htmlFor='zip'>Zip:</label>
      <input id='zip' type='number' ref={(input) => {_zip = input;}}/><br />
      <label htmlFor='phone'>Phone:</label>
      <input id='phone' type='tel' ref={(input) => {_phone = input;}}/> <br />
      <label htmlFor='email'>Email:</label>
      <input id='email' type='input' ref={(input) => {_email = input;}}/><br />

      <button type='button' onClick={reduxPush}>Submit</button>
    </div>
  );
}

NewEmployee.propTypes = {
  dispatch: PropTypes.func,
};

export default connect()(NewEmployee);

// <label htmlFor='date'>Hire Date: </label>
// <input id='data' type='date' ref={(input) => {_date = input;}}/><br />
