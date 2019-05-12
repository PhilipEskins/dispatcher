import React from 'react';
// import NewEmployee from '../employee/NewEmployee';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { updateInfo } from './../../actions';

function BasicInfo(props) {

  let _firstName = null;
  let _lastName = null;
  let _address = null;
  let _city = null;
  let _state = null;
  let _zip = null;
  let _phone = null;

  function reduxInfo() {
    const { dispatch } = props;
    let newInfo = {
      firstNameInput: _firstName.value,
      lastNameInput: _lastName.value,
      addressInput: _address.value,
      cityInput: _city.value,
      stateInput: _state.value,
      zipInput: _zip.value,
      phoneInput: _phone.value,
    }
    dispatch(updateInfo(newInfo));
  }


  // let path = null;
  // function pathCheck() {
  //   if (props.location === '/newemployee') {
  //     return (<NewEmployee />);
  //   } else {
  //     console.log(false);
  //   }
  // }

  return (
    <div>
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
      <button type='button' onClick={reduxInfo}>Next</button>
    </div>
  );
}

BasicInfo.propTypes = {
  location: PropTypes.string,
  dispatch: PropTypes.func
};

export default connect()(BasicInfo);
