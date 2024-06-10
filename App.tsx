import React, {useEffect, useState} from 'react';
import {StatusBar, View} from 'react-native';
import {ContainerComponent, TextComponent} from './src/components';
import {globalStyles} from './src/styles/globalSyles';
import MainNavigator from './src/navigators/MainNavigator';
import AuthNavigator from './src/navigators/AuthNavigator';
import {NavigationContainer} from '@react-navigation/native';
import {SplashScreen} from './src/screens';
import auth from '@react-native-firebase/auth';

const App = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [isWelcome, setIsWelcome] = useState(true);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsWelcome(false);
    }, 5000);

    auth().onAuthStateChanged(user => {
      setIsLogin(user ? (user.uid ? true : false) : false);
    });

    return () => clearTimeout(timeout);
  });
  return (
    <NavigationContainer>
      {isWelcome ? (
        <SplashScreen />
      ) : isLogin ? (
        <MainNavigator />
      ) : (
        <AuthNavigator />
      )}
    </NavigationContainer>
  );
};

export default App;
