import React, { Component } from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider, connect } from 'react-redux';
import ReduxThunk from 'redux-thunk';
import logger from 'redux-logger';
import firebase from 'firebase';
import { addNavigationHelpers } from 'react-navigation';
import {
  createNavigationPropConstructor,       // handles #1 above
  createReactNavigationReduxMiddleware,  // handles #4 above
  initializeListeners,                   // handles #4 above
} from 'react-navigation-redux-helpers';

import reducers from './src/reducers';
import { MainNavigation } from './src/routes';

const middleware = createReactNavigationReduxMiddleware(
  'root',
  state => state.nav,
);

const navigationPropConstructor = createNavigationPropConstructor('root');

class Navigate extends React.Component {

  componentDidMount() {
    initializeListeners('root', this.props.nav);
  }

  render() {
    const navigation = navigationPropConstructor(
      this.props.dispatch,
      this.props.nav,
    );
    return <MainNavigation navigation={navigation} />;
  }

}


const mapStateToProp = state => ({
  nav: state.nav
});

const NavigateWithNavigation = connect(mapStateToProp)(Navigate);

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyC10pAVauH_4Rj9zAG9N64p7BgevruzoCw',
    authDomain: 'manager-6cf34.firebaseapp.com',
    databaseURL: 'https://manager-6cf34.firebaseio.com',
    projectId: 'manager-6cf34',
    storageBucket: 'manager-6cf34.appspot.com',
    messagingSenderId: '526143176234'
  };

  firebase.initializeApp(config);
  }

  render() {
    return (
      <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk, middleware, logger))}>
          <NavigateWithNavigation />
      </Provider>
    );
  }
}

export default App;
