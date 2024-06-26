import {View, Text, StatusBar} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomeLogin, LoginScreen, ResultScreen, SignUpScreen, SwiperScreen} from '../screens';

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
        <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
        <Stack.Screen name="ResultScreen" component={ResultScreen} />
      </Stack.Navigator>
    </>
  );
};

export default AuthNavigator;
