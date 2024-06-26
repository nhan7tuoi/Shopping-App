import React from 'react';
import {Image, View} from 'react-native';
import {TextComponent} from '../../../components';
import {colors} from '../../../constants/colors';
import {fontFamilies} from '../../../constants/fontFamilies';

const SwiperTwo = () => {
  return (
    <View style={{flex: 1}}>
      <View style={{flex: 2, padding: 20}}>
        <Image
          source={require('../../../assets/images/sliders/slider2.png')}
          style={{width: '100%', height: '100%', resizeMode: 'contain'}}
        />
      </View>
      <View style={{flex: 1, padding: 20}}>
        <TextComponent
          text="All Type Offers"
          size={30}
          type="title"
          font={fontFamilies.poppinsBold}
        />
        <TextComponent
          text="Within Your Reach"
          size={30}
          type="title"
          font={fontFamilies.poppinsBold}
        />
        <TextComponent
          color={colors.desciption}
          numberOfLines={2}
          styles={{marginTop: 10}}
          text="Publish up you selfies to make youself more beautiful with this app."
          type="description"
        />
      </View>
    </View>
  );
};

export default SwiperTwo;
