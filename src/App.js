import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Router from './Router';

class App extends Component {
  componentWillMount() {
    const config = {
    apiKey: 'AIzaSyCzuGVAwr1g5KEjQYjkUYHDT6i6vuOTf10',
    authDomain: 'manager-32911.firebaseapp.com',
    databaseURL: 'https://manager-32911.firebaseio.com',
    storageBucket: 'manager-32911.appspot.com',
    messagingSenderId: '1016724538194'
  };
  firebase.initializeApp(config);
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;
