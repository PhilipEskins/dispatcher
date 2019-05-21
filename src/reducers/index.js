import constants from './../constants';
const { type } = constants;

export default (state = {}, action) => {
  let newState;
  const { employeeList, selectedEmployee, employeeInfo } = action;
  switch(action.type) {

  case type.RECEIVE_EMPLOYEE:
    newState = Object.assign({}, state, {
      employeeList
    });
    return newState;

  case type.SELECTED_EMPLOYEE:
    newState = Object.assign({}, state, {
      selectedEmployee
    });
    return newState;

  case type.EMPLOYEE_DISPLAY:
    newState = Object.assign({}, state, {
      employeeInfo
    });
    return newState;

  default:
    return state;
  }
};
