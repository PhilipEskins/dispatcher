import constants from './../constants';
const { type } = constants;

export default (state = {}, action) => {
  let newState;
  const { employeeList } = action;
  switch(action.type) {

  case type.RECEIVE_EMPLOYEE:
    newState = Object.assign({}, state, {
      employeeList
    });
    return newState;

  default:
    return state;
  }
};
