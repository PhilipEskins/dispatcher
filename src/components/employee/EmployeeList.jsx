import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as actions from './../../actions/firebase';

function EmployeeList(props) {

  useEffect(() => {
    const { dispatch } = props;
    const { watchEmployee } = actions;
    dispatch(watchEmployee());
  }, []);

  let testArr = [];

  if (props.employeeList) {
    let displayList = Object.entries(props.employeeList);
    console.log(displayList);
    displayList.forEach(function(entry) {
      let newEntry = Object.assign({}, entry[1], {
        id: entry[0],
      });
      testArr.push(newEntry);
    });
  }

  return(
    <div>
      <h1>List of current Employees</h1>
      {testArr.map(function(entry) {
        return <p key={entry.id}>{entry.firstName} {entry.lastName}</p>;
      })}
    </div>
  );
}

EmployeeList.propTypes = {
  employeeList: PropTypes.object,
  dispatch: PropTypes.func,
};

const mapStateToProps = state => {
  return {
    employeeList: state.employeeList,
  };
};

export default connect(mapStateToProps)(EmployeeList);
