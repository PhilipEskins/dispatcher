import constants from './../constants';
const { type } = constants;

// Sends Employee list to Redux
export function receiveEmployee(employeeListFromFirebase) {
  return {
    type: type.RECEIVE_EMPLOYEE,
    employeeList: employeeListFromFirebase,
  };
}

// Sends a selected Employee to Redux
export function selectedEmployee(clickedEmployee) {
  return {
    type: type.SELECTED_EMPLOYEE,
    selectedEmployee: clickedEmployee,
  };
}

// Sends one Employee record to Redux
export function employeeInfoDisplay(employeeInfoDisplayInfo) {
  return {
    type: type.EMPLOYEE_DISPLAY,
    employeeInfo: employeeInfoDisplayInfo,
  };
}
