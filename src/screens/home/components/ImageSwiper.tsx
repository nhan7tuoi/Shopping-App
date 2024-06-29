import React from 'react';
import { Image, View } from 'react-native';
import Swiper from 'react-native-swiper';
import { colors } from '../../../constants/colors';
import { FileModel } from '../../../models/fileModel';

type Props = {
  files: FileModel[];
};

const ImageSwiper = (props: Props) => {
  const {files} = props;

  return (
    <Swiper
      dotColor="red"
      activeDotColor="white"
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
              backgroundColor: 'red',
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
          />
        ))}
    </Swiper>
  );
};

export default ImageSwiper;
