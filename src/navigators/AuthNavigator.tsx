import {View, Text, StatusBar} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomeLogin, LoginScreen, SwiperScreen} from '../screens';

const Stack = createNativeStackNavigator();

const AuthNavigator = () => {
  return (
    <>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="HomeLogin" component={HomeLogin} />
        <Stack.Screen name="SwiperScreen" component={SwiperScreen} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
      </Stack.Navigator>
    </>
  );
};

export default AuthNavigator;
