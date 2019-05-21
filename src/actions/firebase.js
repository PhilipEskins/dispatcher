import constants from './../constants';
import Firebase from 'firebase';
import { receiveEmployee } from './index';
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

/* eslint-disable */
export function watchEmployee() {
  return function(dispatch) {
    employee.on('child_added', data => {
      const employeeList = Object.assign({}, data.val(), {
        id: data.key,
      });
      dispatch(receiveEmployee(employeeList));
    });
  };
}
/* eslint-enable */
