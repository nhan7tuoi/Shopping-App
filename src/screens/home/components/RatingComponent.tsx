import {View, Text, Pressable} from 'react-native';
import React from 'react';
import {Rating} from 'react-native-ratings';
import {colors} from '../../../constants/colors';
import {Space} from '@bsdaoquang/rncomponent';
import {TextComponent} from '../../../components';
import {useNavigation} from '@react-navigation/native';

type Props = {
  id: string;
};

const RatingComponent = (props: Props) => {
  const {id} = props;
  const navigation: any = useNavigation();
  return (
    <Pressable
      onPress={() => navigation.navigate('RatingScreen')}
      style={{flexDirection: 'row'}}>
      <Rating
        imageSize={20}
        startingValue={5}
        readonly
        tintColor={colors.white}
      />
      <Space width={8} />
      <TextComponent text="(99 Reviews)" />
    </Pressable>
  );
};

export default RatingComponent;
