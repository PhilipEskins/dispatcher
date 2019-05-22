import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getEmployeeInfo } from './../../actions/firebase';

function EmployeeDetail(props) {
  const { dispatch } = props;

  // Hook to get the clicked on Employee's info
  useEffect(() => {
    dispatch(getEmployeeInfo(props.employeeId));
  }, []);

  let firstName = null;
  let lastName = null;
  let address = null;
  let city = null;
  let state = null;
  let zip = null;
  let phone = null;
  let email = null;

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

  return (
    <div>
      <h1>Employee Details</h1>
      <p>
        {firstName} {lastName}<br />
        {address}<br />
        {city}, {state} {zip}<br />
        Phone: {phone}<br />
        Email: {email} <br />
      </p>
      <button type='button'>Edit</button>
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
