import {View, Text, StyleProp, ViewStyle, Image, Pressable} from 'react-native';
import React from 'react';
import {ProductModel} from '../models/productModel';
import TextComponent from './TextComponent';
import {sizes} from '../constants/sizes';
import {fontFamilies} from '../constants/fontFamilies';
import {Space} from '@bsdaoquang/rncomponent';
import {colors} from '../constants/colors';
import {useNavigation} from '@react-navigation/native';

type Props = {
  product: ProductModel;
  index: number;
  styles?: StyleProp<ViewStyle>;
};

const ProductItem = (props: Props) => {
  const {product, index, styles} = props;
  const WIDTH = (sizes.width - 48) / 2;
  const navigation: any = useNavigation();

  return (
    <Pressable
      onPress={() => {
        navigation.navigate('ProductDetail', {id: product.id});
      }}
      style={[
        {
          width: (sizes.width - 48) / 2,
          marginLeft: index % 2 === 0 ? 0 : 16,
          justifyContent: 'center',
          alignItems: 'center',
        },
        styles,
      ]}>
      <Image
        source={{uri: product.imageUrl}}
        style={{
          flex: 1,
          width: WIDTH,
          height: WIDTH,
          maxWidth: 160,
          maxHeight: 180,
          borderRadius: 10,
          resizeMode: 'cover',
        }}
      />
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <Space height={8} />
        <TextComponent
          text={product.title}
          size={18}
          font={fontFamilies.poppinsBold}
          numberOfLines={1}
        />
        <TextComponent
          text={product.type}
          size={14}
          color={colors.gray2}
          numberOfLines={1}
        />
        <TextComponent
          text={`$ ${product.price}`}
          size={16}
          font={fontFamilies.poppinsSemiBold}
          numberOfLines={1}
        />
      </View>
    </Pressable>
  );
};

export default ProductItem;
