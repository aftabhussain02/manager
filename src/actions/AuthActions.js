import { NavigationActions } from 'react-navigation';
import firebase from 'firebase';
import {
  LOGIN_UPDATE,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAILED,
  LOGIN_USER
} from './types';


export const loginDetail = ({ prop, value }) => {
  return {
    type: LOGIN_UPDATE,
    payload: { prop, value }
  };
};

export const loginUser = ({ email, password }) => {
  return (dispatch) => {
    dispatch({ type: LOGIN_USER });
  firebase.auth().signInWithEmailAndPassword(email, password)
  .then(() => dispatch(NavigationActions.navigate({ routeName: 'EmployeeList' })))
  .catch((e) => {
    console.log(e);
    firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(() => dispatch(NavigationActions.navigate({ routeName: 'EmployeeList' })))
    .catch((d) => {
      console.log(d);
       loginUserFailed(dispatch);
     });
  });
};
};

const loginUserFailed = (dispatch) => {
  dispatch({
    type: LOGIN_USER_FAILED
  });
};

const navigateAction = NavigationActions.navigate({
  routeName: 'Profile',

  params: {},

  action: NavigationActions.navigate({ routeName: 'SubProfileRoute' }),
});
