import { NavigationActions } from 'react-navigation';
import firebase from 'firebase';
import { EMPLOYEE_UPDATE, EMPLOYEE_RESET, EMPLOYEES_FETCH_SUCCESS } from './types';

export const employeeUpdate = ({ prop, value }) => ({
      type: EMPLOYEE_UPDATE,
      payload: { prop, value }
  });

export const employeeCreate = ({ name, phone, shift }) => {
      const { currentUser } = firebase.auth();

return (dispatch) => {
  firebase.database().ref(`/users/${currentUser.uid}/employees`)
  .push({ name, phone, shift })
  .then(() => dispatch(NavigationActions.navigate({ routeName: 'EmployeeList' })))
  .catch((e) => console.log(e));
};
};

export const employeesFetch = () => {
const { currentUser } = firebase.auth();
console.log('hey');
  return (dispatch) => {
      firebase.database().ref(`/users/${currentUser.uid}/employees`)
      .on('value', snapshot => {
        dispatch({
          type: EMPLOYEES_FETCH_SUCCESS,
          payload: snapshot.val()
        });
      });
  };
};

export const employeeReset = () => ({
  type: EMPLOYEE_RESET
});
