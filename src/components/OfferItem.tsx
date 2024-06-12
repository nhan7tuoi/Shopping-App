import {View, Text, ImageBackground, StyleSheet} from 'react-native';
import React, {useEffect, useState} from 'react';
import {OfferModel} from '../models/offerModel';
import firestore from '@react-native-firebase/firestore';
import {FileModel} from '../models/fileModel';
import {sizes} from '../constants/sizes';
import TextComponent from './TextComponent';
import {fontFamilies} from '../constants/fontFamilies';
import {colors} from '../constants/colors';
import {Button} from '@bsdaoquang/rncomponent';

type Props = {
  item: OfferModel;
};

const OfferItem = (props: Props) => {
  const {item} = props;
  const [fileInfo, setFileInfo] = useState<FileModel>();

  useEffect(() => {
    if (item.files && item.files.length > 0) {
      handleGetFileInfo(item.files[0]);
    }
  }, [item]);

  const handleGetFileInfo = async (id: string) => {
    try {
      const snap = await firestore().collection('files').doc(id).get();
      if (snap.exists) {
        setFileInfo(snap.data() as FileModel);
      }
    } catch (error) {
      console.log('handleGetFileInfo -> error', error);
    }
  };

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
        color={colors.desciption}
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

  return fileInfo ? (
    <ImageBackground
      source={{uri: fileInfo.downloadUrl}}
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
  ) : (
    <View style={[styles.container, {backgroundColor: 'gray'}]}>
      {renderOffer()}
    </View>
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
