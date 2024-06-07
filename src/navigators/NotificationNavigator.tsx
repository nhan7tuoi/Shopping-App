import { View, Text } from 'react-native'
import React from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { NotificationsScreen } from '../screens';
const Stack = createNativeStackNavigator();

const NotificationNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="NotificationScreen" component={NotificationsScreen} />
    </Stack.Navigator>
  )
}

export default NotificationNavigator