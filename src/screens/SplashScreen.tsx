import React from 'react';
import {ActivityIndicator, ImageBackground, StatusBar, View} from 'react-native';
import {colors} from '../constants/colors';
import {globalStyles} from '../styles/globalSyles';

const SplashScreen = () => {
  return (
    <>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <ImageBackground
        source={require('../assets/images/Splash.png')}
        style={globalStyles.conatiner}
        imageStyle={{
          resizeMode: 'cover',
        }}>
        <View style={{flex: 1}} />
        <View>
          <ActivityIndicator
            style={{marginBottom: 40}}
            size="large"
            color={colors.white}
          />
        </View>
      </ImageBackground>
    </>
  );
};

export default SplashScreen;
