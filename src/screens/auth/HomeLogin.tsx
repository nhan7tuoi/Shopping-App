import { Button } from '@bsdaoquang/rncomponent';
import React from 'react';
import { ImageBackground, View } from 'react-native';
import { colors } from '../../constants/colors';
import { globalStyles } from '../../styles/globalSyles';

const HomeLogin = ({navigation}:any) => {
  return (
    <ImageBackground
      source={require('../../assets/images/Splash.png')}
      style={globalStyles.conatiner}
      imageStyle={{
        resizeMode: 'cover',
      }}>
      <View style={{flex: 1}} />
      <View
        style={{
          padding: 30,
        }}>
        <Button
          title="Login"
          onPress={() => {
            navigation.navigate('SwiperScreen');
          }}
          textStyleProps={{
            fontWeight: 'bold',
          }}
        />
        <Button
        isShadow={false}
          color="transparent"
          title="Sign up"
          onPress={() => {
            navigation.navigate('SwiperScreen');
          }}
          styles={{
            borderWidth: 1,
            borderColor: colors.white,
          }}
          textStyleProps={{
            fontWeight: 'bold',
          }}
        />
      </View>
    </ImageBackground>
  );
};

export default HomeLogin;
