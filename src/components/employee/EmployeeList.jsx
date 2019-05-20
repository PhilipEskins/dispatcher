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
    return(
      <div>
        <h1>Employee List Works</h1>
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
