import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import Router from './src/navigators/Router';
import {Provider} from 'react-redux';
import store from './src/redux/store';

const App = () => {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <Router />
      </Provider>
    </NavigationContainer>
  );
};

export default App;
