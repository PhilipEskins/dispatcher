import React from 'react';
import PropTypes from 'prop-types';
import BasicInfo from '../shared/BasicInfo';

function NewEmployee(props) {
  console.log(props.location.pathname);
  return(
    <div>
      <h3>Add new Employee</h3>
      <form>
        <BasicInfo location={props.location.pathname}/>
        <label htmlFor='wage'>Wage/Rate:</label>
        <input id='wage' type='input' /><br />
        <label htmlFor='hire'>Hire Date:</label>
        <input id='hire' type='date' /><br />
      </form>
    </div>
  );
}

NewEmployee.propTypes = {
  location: PropTypes.object
};

export default NewEmployee;
