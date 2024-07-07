import React from 'react';
import { Image, View } from 'react-native';
import Swiper from 'react-native-swiper';
import { colors } from '../../../constants/colors';
import { FileModel } from '../../../models/fileModel';
import { sizes } from '../../../constants/sizes';

type Props = {
  files: FileModel[];
};

const ImageSwiper = (props: Props) => {
  const {files} = props;

  return (
    <Swiper
    style={{height: sizes.height * 0.5}}
      dotColor="red"
      activeDotColor="white"
      paginationStyle={{bottom: 35}}
      activeDot={
        <View
          style={{
            width: 14, 
            height: 14,
            borderRadius: 7,
            borderColor: colors.dark,
            borderWidth: 1,
            marginHorizontal: 4,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View
            style={{
              width: 8,
              height: 8,
              borderRadius: 4,
            }}
          />
        </View>
      }>
      {files.length > 0 &&
        files.map((file, index) => (
          <Image
            key={index}
            source={{uri: file.downloadUrl}}
            style={{width: '100%', flex: 1}}
            resizeMode='contain'
          />
        ))}
    </Swiper>
  );
};

export default ImageSwiper;
