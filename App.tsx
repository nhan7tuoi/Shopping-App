import React from 'react';
import {StatusBar, View} from 'react-native';
import {ContainerComponent, TextComponent} from './src/components';
import {globalStyles} from './src/styles/globalSyles';
import MainNavigator from './src/navigators/MainNavigator';
import AuthNavigator from './src/navigators/AuthNavigator';
import {NavigationContainer} from '@react-navigation/native';

const App = () => {
  const [isLogin, setIsLogin] = React.useState(false);
  return (
    <NavigationContainer>
      {/* <StatusBar barStyle="dark-content"  translucent backgroundColor={'transparent'}/> */}
      {1 < 2 ? <MainNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
};

export default App;
