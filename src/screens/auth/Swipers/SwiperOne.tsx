import React from 'react';
import {Image, View} from 'react-native';
import {TextComponent} from '../../../components';
import {colors} from '../../../constants/colors';
import {fontFamilies} from '../../../constants/fontFamilies';

const SwiperOne = () => {
  return (
    <View style={{flex: 1}}>
      <View style={{flex: 2, padding: 20}}>
        <Image
          source={require('../../../assets/images/sliders/slider1.png')}
          style={{width: '100%', height: '100%', resizeMode: 'contain'}}
        />
      </View>
      <View style={{flex: 1, padding: 20}}>
        <TextComponent
          text="20% Discount"
          size={30}
          type="title"
          font={fontFamilies.poppinsBold}
        />
        <TextComponent
          text="New Arrival products"
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

export default SwiperOne;
