import React, { useState } from 'react';
import './../../scss/employee.scss';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

function EmployeeEdit(props) {
  let employeeEdit = document.getElementById('myModal');
  let employee = props.employeeList[props.employeeId];

  let [firstNameEdit, handleFirst] = useState(employee.firstName);
  let [lastNameEdit, handleLast] = useState(employee.lastName);

  return (
    <div className='modal-content'>
      <span className='close' onClick={() => employeeEdit.style.display = 'none'}>&times;</span>
      <h1>Employee Edit works</h1>
      <input type='text' value={firstNameEdit} onChange={() =>
        handleFirst(event.target.value)}/>
      <input type='text' value={lastNameEdit} onChange={() =>
        handleLast(event.target.value)}/>
    </div>
  );
}

EmployeeEdit.propTypes = {
  employeeId: PropTypes.string,
  employeeList: PropTypes.object,
};

const mapStateToProps = state => {
  return {
    employeeList: state.employeeList,
  };
};

export default connect(mapStateToProps) (EmployeeEdit);
