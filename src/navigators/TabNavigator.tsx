import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import CartNavigator from './CartNavigator';
import HomeNavigator from './HomeNavigator';
import Profilenavigator from './Profilenavigator';
import {colors} from '../constants/colors';
import { View } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: colors.white,
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
          height: 70,
          justifyContent: 'center',
          alignItems: 'center',
        },
        tabBarIcon: ({focused, size, color}) => {
            color = colors.dark;
            size = 24;
            let icon = <Entypo name="home" size={size} color={color} />;
            return icon;
        },
      }}>
      <Tab.Screen name="HomeTab" component={HomeNavigator} />
      <Tab.Screen name="CartTab" component={CartNavigator} />
      <Tab.Screen name="NotificationTab" component={HomeNavigator} />
      <Tab.Screen name="ProfileTab" component={Profilenavigator} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
