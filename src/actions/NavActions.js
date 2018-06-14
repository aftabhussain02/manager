import { NavigationActions } from 'react-navigation';

export const NavigateTo = ({ name, params = '' }) => {
  console.log(name);
  return (dispatch) => {
    dispatch(NavigationActions.navigate({ routeName: name, params }));
  };
};
