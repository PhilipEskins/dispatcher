import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getEmployeeInfo } from './../../actions/firebase';

function EmployeeDetail(props) {
  const { dispatch } = props;

  useEffect(() => {
    dispatch(getEmployeeInfo(props.employeeId));
  }, []);

  if (props.employeeInfo) {
    console.log(props.employeeInfo.firstName)
  }

  return (
    <div>
      <h1>Employee Detail Works</h1>
    </div>
  );
}

EmployeeDetail.propTypes = {
  employeeId: PropTypes.string,
  dispatch: PropTypes.func,
  employeeInfo: PropTypes.object,
}

const mapStateToProps = state => {
  return {
    employeeId: state.selectedEmployee,
    employeeInfo: state.employeeInfo,
  }
}

export default connect(mapStateToProps)(EmployeeDetail);
