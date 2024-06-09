import {Button} from '@bsdaoquang/rncomponent';
import {useIsFocused} from '@react-navigation/native';
import {ArrowRight} from 'iconsax-react-native';
import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import Swiper from 'react-native-swiper';
import {colors} from '../../constants/colors';
import {globalStyles} from '../../styles/globalSyles';
import {SwiperOne, SwiperThree, SwiperTwo} from '../index';

const SwiperScreen = ({navigation, route}: any) => {
  const {authState} = route?.params;
  const [index, setIndex] = useState(0);
  const isFocused = useIsFocused();

  useEffect(() => {
    setIndex(0);
  }, [isFocused]);

  return (
    <View style={[globalStyles.conatiner, {paddingVertical: 20}]}>
      <Swiper
        index={index}
        loop={false}
        onIndexChanged={index => setIndex(index)}
        showsPagination={false}>
        <SwiperOne />
        <SwiperTwo />
        <SwiperThree />
      </Swiper>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingHorizontal: 20,
        }}>
        <View style={{flexDirection: 'row'}}>
          {Array.from({length: 3}).map((_item, i) => (
            <View
              key={i}
              style={{
                width: i === index ? 12 : 6,
                height: 6,
                borderRadius: 3,
                backgroundColor: i === index ? colors.dark : colors.gray2,
                marginHorizontal: 2,
              }}
            />
          ))}
        </View>
        <Button
          color={colors.dark}
          styles={{paddingHorizontal: 14}}
          icon={<ArrowRight size={24} color={colors.white} />}
          onPress={() =>
            index == 2
              ? navigation.navigate(authState)
              : setIndex(index + 1)
          }
        />
      </View>
    </View>
  );
};

export default SwiperScreen;
