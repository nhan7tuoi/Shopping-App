import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {authSelector, setAuthData} from '../redux/reducers/authReducer';
import {SplashScreen} from '../screens';
import AuthNavigator from './AuthNavigator';
import MainNavigator from './MainNavigator';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Router = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [isWelcome, setIsWelcome] = useState(true);
  const dispatch = useDispatch();
  const user = useSelector(authSelector);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    await getAuthData();
    setIsWelcome(false);
  };

  const getAuthData = async () => {
    const res = await AsyncStorage.getItem('user');
    if (res) {
      const data = JSON.parse(res);
      dispatch(setAuthData(data));
    }
  };

  return isWelcome ? (
    <SplashScreen />
  ) : user.uid ? (
    <MainNavigator />
  ) : (
    <AuthNavigator />
  );
};

export default Router;
