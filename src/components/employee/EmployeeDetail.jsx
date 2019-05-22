import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getEmployeeInfo } from './../../actions/firebase';
import EmployeeEdit from './EmployeeEdit';
import './../../scss/employee.scss';

function EmployeeDetail(props) {
  const { dispatch } = props;

  // Hook to get the clicked on Employee's info
  useEffect(() => {
    dispatch(getEmployeeInfo(props.employeeId));
  }, []);

  let firstName = '';
  let lastName = '';
  let address = '';
  let city = '';
  let state = '';
  let zip = '';
  let phone = '';
  let email = '';

  // Checks to see if data is available
  if (props.employeeInfo) {
    firstName = props.employeeInfo.firstName;
    lastName = props.employeeInfo.lastName;
    address = props.employeeInfo.address;
    city = props.employeeInfo.city;
    state = props.employeeInfo.state;
    zip = props.employeeInfo.zip;
    phone = props.employeeInfo.phone;
    email = props.employeeInfo.email;
  }

  let employeeEdit = document.getElementById('myModal');

  return (
    <div>
      <h1 className='name'>Employee Details</h1>
      <p>
        {firstName} {lastName}<br />
        {address}<br />
        {city}, {state} {zip}<br />
        Phone: {phone}<br />
        Email: {email} <br />
      </p>
      <button type='button' onClick={() => employeeEdit.style.display = 'block'}>Edit</button>
      <div id='myModal' className="employeeEdit">
        <EmployeeEdit employeeId = {props.employeeId}/>
      </div>
    </div>
  );
}

EmployeeDetail.propTypes = {
  employeeId: PropTypes.string,
  dispatch: PropTypes.func,
  employeeInfo: PropTypes.object,
};

const mapStateToProps = state => {
  return {
    employeeId: state.selectedEmployee,
    employeeInfo: state.employeeInfo,
  };
};

export default connect(mapStateToProps)(EmployeeDetail);
