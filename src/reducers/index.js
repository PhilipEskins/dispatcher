import constants from './../constants';
const { type, initialState } = constants;

export default (state = initialState, action) => {
  let newState;
  const {firstNameInput, lastNameInput, addressInput, cityInput, stateInput, zipInput, phoneInput, employeeList} = action;
  switch(action.type) {
  case type.UPDATE_INFO:
  {newState = Object.assign({}, state, {
    firstNameInput,
    lastNameInput,
    addressInput,
    cityInput,
    stateInput,
    zipInput,
    phoneInput,
  });
  return newState;}

  case type.RECEIVE_EMPLOYEE:
    newState = Object.assign({}, state, {
      employeeList
    });
    return newState;

  default:
    return state;
  }
};
