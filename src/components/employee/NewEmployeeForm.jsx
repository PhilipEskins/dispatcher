import React from 'react';
import PropTypes from 'prop-types';

function NewEmployeeForm(props) {
  console.log(props);
  return(
    <div>
      <h1>New Employee Form works</h1>
      {props.technician}
    </div>
  );
}

NewEmployeeForm.propTypes = {
  technician: PropTypes.bool
};

export default NewEmployeeForm;
