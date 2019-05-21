import constants from './../constants';
import Firebase from 'firebase';
import { receiveEmployee, employeeInfoDisplay } from './index';
const { firebaseConfig } = constants;

Firebase.initializeApp(firebaseConfig);
const employee = Firebase.database().ref('employee');

export function addEmployee(newEmployeeInfo) {
  return () => employee.push({
    firstName: newEmployeeInfo.firstNameInput,
    lastName: newEmployeeInfo.lastNameInput,
    address: newEmployeeInfo.addressInput,
    city: newEmployeeInfo.cityInput,
    state: newEmployeeInfo.stateInput,
    zip: newEmployeeInfo.zipInput,
    phone: newEmployeeInfo.phoneInput,
    email: newEmployeeInfo.emailInput,
  });
}

export function watchEmployee() {
  return function(dispatch) {
    employee.on('value', data => {
      const employeeList = data.val();
      dispatch(receiveEmployee(employeeList));
    });
  };
}

export function getEmployeeInfo(employeeId) {
  return function(dispatch) {
    const selectedEmployee = employee.child(employeeId);
    selectedEmployee.once('value', snapshot => {
      const values = snapshot.val();
      dispatch(employeeInfoDisplay(values));
    });
  };
}
