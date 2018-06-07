import { NavigationActions } from 'react-navigation';
import { MainNavigation } from '../routes';

const initState = MainNavigation.router.getStateForAction(NavigationActions.init());

export default (state = initState, action) => {
  const nextState = MainNavigation.router.getStateForAction(action, state);

  return nextState || state;
};
