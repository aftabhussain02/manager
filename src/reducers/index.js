import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import nav from './nav';
import EmployeeFormReducer from './EmployeeFormReducer';
import EmployeeReducer from './EmployeeReducer';

export default combineReducers({
  auth: AuthReducer,
  nav,
  employeeForm: EmployeeFormReducer,
  employees: EmployeeReducer
});
