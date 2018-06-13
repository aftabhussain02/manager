import React from 'react';
import { createStackNavigator } from 'react-navigation';
import EmployeeList from '../component/EmployeeList';
import LoginForm from '../component/LoginForm';
import IconButton from '../component/IconButton';
import EmployeeCreate from '../component/EmployeeCreate';

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
        headerRight: (
          <IconButton iconName="plus" iconSize={30} routeName="EmployeeForm" />
        )
        // headerTitleStyle: {}
      }
    },
    EmployeeForm: {
      screen: EmployeeCreate,
       navigationOptions: {
         title: 'Employee Form',
       }
    }
  },
    {
        initialRouteName: 'login',
        headerMode: 'screen',
        mode: 'card',
    }
);
