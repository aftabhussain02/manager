import React from 'react';
import { createStackNavigator } from 'react-navigation';
import LoginForm from '../component/LoginForm';
import EmployeeList from '../component/EmployeeList';

export const MainNavigation = createStackNavigator(
  {
    login: {
      screen: LoginForm,
      navigationOptions: {
        title: 'hey',
      }
     },
     EmployeeList: {
      screen: EmployeeList,
      navigationOptions: {
        title: 'Employee List',
        // headerTitleStyle: {}
      }
     }
  },
    {
        initialRouteName: 'login',
        headerMode: 'screen',
        mode: 'card',
    }
);
