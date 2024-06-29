import {NavigationContainer} from '@react-navigation/native';
import React, { useEffect } from 'react';
import Router from './src/navigators/Router';
import {Provider} from 'react-redux';
import store from './src/redux/store';
import { HandleNotifycation } from './src/utils/handleNotifycation';

const App = () => {

  useEffect(() => {
    HandleNotifycation.checkNotifycation();
  }, []);

  return (
    <NavigationContainer>
      <Provider store={store}>
        <Router />
      </Provider>
    </NavigationContainer>
  );
};

export default App;
