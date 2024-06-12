import {View, Text, StatusBar, Pressable, Platform} from 'react-native';
import React from 'react';
import SvgComponent from '../../components/SvgComponent';
import auth from '@react-native-firebase/auth';
import {
  AvatarComponent,
  ContainerComponent,
  TextComponent,
} from '../../components';
import {Button, Input, Section, Space} from '@bsdaoquang/rncomponent';
import {
  HambergerMenu,
  SearchNormal,
  SearchNormal1,
  Setting4,
} from 'iconsax-react-native';
import {colors} from '../../constants/colors';
import {globalStyles} from '../../styles/globalSyles';
import OffersList from './components/OffersList';

const HomeScreen = () => {
  const user = auth().currentUser;
  return (
    <ContainerComponent>
      <StatusBar translucent backgroundColor={'transparent'} barStyle={'dark-content'}/>
      <View style={[globalStyles.section,{
        paddingTop: Platform.OS === 'android' ? 48 : 0,
      }]}>
        <View
          style={[
            {
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            },
          ]}>
          <Pressable
            style={{
              backgroundColor: colors.dark,
              width: 50,
              height: 50,
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 25,
            }}
            onPress={() => {}}>
            <HambergerMenu size={24} color={colors.white} />
          </Pressable>
          <AvatarComponent />
        </View>
      </View>
      <View style={[globalStyles.section]}>
        <TextComponent type="title" text="Wellcome," size={24} />
        <TextComponent text="Our fashion app" size={18} color={colors.gray2} />
      </View>
      <View style={[globalStyles.section]}>
        <View style={{flexDirection: 'row'}}>
          <View style={{flex: 1}}>
            <Input
              placeholder="Search"
              prefix={
                <SearchNormal1
                  variant="TwoTone"
                  size={24}
                  color={colors.gray2}
                />
              }
              onChange={() => {}}
              value=""
            />
          </View>
          <Space width={12} />
          <Button
            onPress={() => {}}
            isShadow={false}
            color="black"
            icon={<Setting4 size={24} color={colors.white} />}
            styles={{width: 48, height: 48}}
          />
        </View>
      </View>
      <OffersList />
    </ContainerComponent>
  );
};

export default HomeScreen;
