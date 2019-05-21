import constants from './../constants';
const { type } = constants;

export function updateInfo(newInfo) {
  return {
    type: type.UPDATE_INFO,
    firstNameInput: newInfo.firstNameInput,
    lastNameInput: newInfo.lastNameInput,
    addressInput: newInfo.addressInput,
    cityInput: newInfo.cityInput,
    stateInput: newInfo.stateInput,
    zipInput: newInfo.zipInput,
    phoneInput: newInfo.phoneInput,
  };
}

export function receiveEmployee(employeeListFromFirebase) {
  return {
    type: type.RECEIVE_EMPLOYEE,
    employeeList: employeeListFromFirebase,
  };
}
