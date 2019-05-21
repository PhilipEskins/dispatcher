import constants from './../constants';
const { type } = constants;

export function receiveEmployee(employeeListFromFirebase) {
  return {
    type: type.RECEIVE_EMPLOYEE,
    employeeList: employeeListFromFirebase,
  };
}

export function selectedEmployee(clickedEmployee) {
  return {
    type: type.SELECTED_EMPLOYEE,
    selectedEmployee: clickedEmployee,
  };
}

export function employeeInfoDisplay(employeeInfoDisplayInfo) {
  return {
    type: type.EMPLOYEE_DISPLAY,
    employeeInfo: employeeInfoDisplayInfo,
  }
}
