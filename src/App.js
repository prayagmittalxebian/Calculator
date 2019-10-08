/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';

import { Provider } from 'react-redux';
import store from './store.js';
import CalculatorPage from './containers/CalculatorPage';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <CalculatorPage />
      </Provider >
    );
  }
}


export default App;
