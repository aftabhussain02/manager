import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import nav from './nav';
import EmployeeFormReducer from './EmployeeFormReducer';

export default combineReducers({
  auth: AuthReducer,
  nav,
  employeeForm: EmployeeFormReducer
});
