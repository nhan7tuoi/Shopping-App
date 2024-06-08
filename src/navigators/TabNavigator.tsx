import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import CartNavigator from './CartNavigator';
import HomeNavigator from './HomeNavigator';
import Profilenavigator from './Profilenavigator';
import NotifycationNavigator from './NotificationNavigator';
import {colors} from '../constants/colors';
import {Platform, View} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import {Home, Notification, ShoppingCart, User} from 'iconsax-react-native';
import {TextComponent} from '../components';
import { fontFamilies } from '../constants/fontFamilies';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: colors.white,
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
          height: Platform.OS === 'ios' ? 90 : 70,
          justifyContent: 'center',
          alignItems: 'center',
          paddingHorizontal: 10,
        },
        tabBarIcon: ({focused, size, color}) => {
          color = focused ? colors.white : colors.dark;
          size = focused ? 16 : 22;
          let name = '';
          let icon = <Entypo name="home" size={size} color={color} />;
          switch (route.name) {
            case 'HomeTab':
              icon = icon = (
                <Home variant={focused ? 'Bold' : 'Bulk'} size={size} color={color} />
              );
              name = 'Home';
              break;
            case 'CartTab':
              icon = (
                <ShoppingCart variant={focused ? 'Bold' : 'Bulk'} size={size} color={color} />
              );
              name = 'Cart';
              break;
            case 'NotificationTab':
              icon = (
                <Notification variant={focused ? 'Bold' : 'Bulk'} size={size} color={color} />
              );
              name = 'Notification';
              break;
            case 'ProfileTab':
              icon = <User variant={focused ? 'Bold' : 'Bulk'} size={size} color={color} />;
              name = 'Profile';
              break;
          }
          return (
            <View
              style={
                focused
                  ? {
                      flexDirection: 'row',
                      backgroundColor: colors.gray,
                      height: 30,
                      borderRadius: 20,
                    }
                  : {flexDirection: 'row'}
              }>
              <View
                style={
                  focused
                    ? {
                        width: 30,
                        height: 30,
                        borderRadius: 15,
                        backgroundColor: colors.dark,
                        justifyContent: 'center',
                        alignItems: 'center',
                      }
                    : undefined
                }>
                {icon}
              </View>
              {focused && <TextComponent styles={{
                alignSelf: 'center',
                fontFamily: fontFamilies.poppinsSemiBold,
                paddingHorizontal: 6,
              }} text={name} size={14} />}
            </View>
          );
        },
      })}>
      <Tab.Screen name="HomeTab" component={HomeNavigator} />
      <Tab.Screen name="CartTab" component={CartNavigator} />
      <Tab.Screen name="NotificationTab" component={NotifycationNavigator} />
      <Tab.Screen name="ProfileTab" component={Profilenavigator} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
