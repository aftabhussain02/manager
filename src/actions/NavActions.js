import { NavigationActions } from 'react-navigation';

export const NavigateTo = ({ name }) => {
  console.log(name);
  return (dispatch) => {
    dispatch(NavigationActions.navigate({ routeName: name }));
  };
};
