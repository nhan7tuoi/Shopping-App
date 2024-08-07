import {View, Text} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TabNavigator from './TabNavigator';
import { AddPayment, CartScreen, PaymentScreen, ProductDetail, RatingScreen } from '../screens';
const Stack = createNativeStackNavigator();

const MainNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="TabNavigator" component={TabNavigator} />
      <Stack.Screen name="ProductDetail" component={ProductDetail} />
      <Stack.Screen name="RatingScreen" component={RatingScreen} />
      <Stack.Screen name="CartScreen" component={CartScreen} />
      <Stack.Screen name="PaymentScreen" component={PaymentScreen} />
      <Stack.Screen name="AddPayment" component={AddPayment} />
    </Stack.Navigator>
  );
};

export default MainNavigator;
