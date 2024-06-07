import React from 'react';
import { StyleProp, Text, TextStyle } from 'react-native';
import { colors } from '../constants/colors';
import { fontFamilies } from '../constants/fontFamilies';
import { sizes } from '../constants/sizes';

type Props = {
  text: string;
  size?: number;
  font?: string;
  flex?: number;
  numberOfLines?: number;
  color?: string;
  styles?: StyleProp<TextStyle>;
  type?:'bigTitle' | 'title' | 'text' |'description'
};

const TextComponent = (props: Props) => {
  const {text, size, font, flex, numberOfLines, color, styles,type} = props;
  const fontSize = 
  type === 'bigTitle' ?
   sizes.bigTitle :
    type === 'title' ?
     sizes.title :
      type === 'text' ?
       sizes.text :
        sizes.description;

  return (
    <Text
      numberOfLines={numberOfLines}
      style={[
        {
          fontFamily: font ?? fontFamilies.poppinsRegular,
          fontSize: size ?? fontSize,
          flex: flex,
          color: color ?? colors.dark,
        },
        styles,
      ]}>
      {text}
    </Text>
  );
};

export default TextComponent;
