import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as fbactions from './../../actions/firebase';
import * as actions from './../../actions/index';
import { Link } from 'react-router-dom';

function EmployeeList(props) {
  const { dispatch } = props;
  const { watchEmployee } = fbactions;
  const { selectedEmployee } = actions;

  //My first hook
  useEffect(() => {
    dispatch(watchEmployee());
  }, []);

  //Array to hold all Employees
  let testArr = [];

  //Checks to see if employeeList is populated, if so it pushes each employee into testArr
  if (props.employeeList) {
    let displayList = Object.entries(props.employeeList);
    displayList.forEach(function(entry) {
      let newEntry = Object.assign({}, entry[1], {
        id: entry[0],
      });
      testArr.push(newEntry);
    });
  }

  //Displays the List of Employees
  return(
    <div>
      <h1>List of current Employees</h1>
      {testArr.map(function(entry) {
        return <p key={entry.id}><Link to={'employee/' + entry.lastName} onClick={() => dispatch(selectedEmployee(entry.id))} >{entry.firstName} {entry.lastName}</Link></p>;
      })}
    </div>
  );
}

//Prop Types
EmployeeList.propTypes = {
  employeeList: PropTypes.object,
  dispatch: PropTypes.func,
};

//Maping to props
const mapStateToProps = state => {
  return {
    employeeList: state.employeeList,
  };
};

//Exporting function and connecting to redux
export default connect(mapStateToProps)(EmployeeList);
