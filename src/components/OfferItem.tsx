import { Button } from '@bsdaoquang/rncomponent';
import React from 'react';
import { ImageBackground, StyleSheet, View } from 'react-native';
import { colors } from '../constants/colors';
import { fontFamilies } from '../constants/fontFamilies';
import { sizes } from '../constants/sizes';
import { OfferModel } from '../models/offerModel';
import TextComponent from './TextComponent';

type Props = {
  item: OfferModel;
};

const OfferItem = (props: Props) => {
  const {item} = props;

  const renderOffer = () => (
    <>
      <TextComponent
        text={`${item.percent}% Off`}
        size={28}
        font={fontFamilies.poppinsBold}
        styles={{
          fontWeight: 'bold',
        }}
      />
      <TextComponent
        text={item.title}
        size={16}
        color={colors.dark}
        font={fontFamilies.poppinsRegular}
      />
      <TextComponent
        text={`With code : ${item.code}`}
        size={16}
        color={colors.white}
        font={fontFamilies.poppinsBold}
        styles={{
          paddingVertical: 14,
        }}
      />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'flex-start',
        }}>
        <Button
          isShadow={false}
          title="Get now"
          size="small"
          color="black"
          onPress={() => {}}
          styles={{}}
        />
      </View>
    </>
  );

  return (
    <ImageBackground
      source={{uri: item.imageUrl}}
      style={styles.container}
      imageStyle={{
        flex: 1,
        resizeMode: 'cover',
        borderRadius: 20,
        borderWidth: 0.5,
        borderColor: colors.gray2,
      }}>
      {renderOffer()}
    </ImageBackground>
  );
};

export default OfferItem;

const styles = StyleSheet.create({
  container: {
    width: sizes.width * 0.7,
    height: 180,
    marginRight: 16,
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
});
