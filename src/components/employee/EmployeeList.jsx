import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as actions from './../../actions/firebase';

class EmployeeList extends React.Component {

  componentWillMount() {
    const { dispatch } = this.props;
    const { watchEmployee } = actions;
    dispatch(watchEmployee());
  }

  render() {
    let testArr = [];

    if (this.props.employeeList) {
      let displayList = Object.entries(this.props.employeeList);
      console.log(displayList);
      displayList.forEach(function(entry) {
        let newEntry = Object.assign({}, entry[1], {
          id: entry[0],
        })
        testArr.push(newEntry);
        // console.log(entry[0]);
        // testArr.push(entry[1]);
      });
    }

    return(
      <div>
        <h1>Employee List Works</h1>
        {testArr.map(function(entry) {
          return <p key={entry.id}>{entry.firstName} {entry.lastName}</p>;
        })}
      </div>
    );
  }
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
