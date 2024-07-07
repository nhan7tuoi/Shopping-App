import { Button, Input, Space } from '@bsdaoquang/rncomponent';
import auth from '@react-native-firebase/auth';
import { HambergerMenu, SearchNormal1, Setting4 } from 'iconsax-react-native';
import React, { useEffect } from 'react';
import { Platform, Pressable, ScrollView, StatusBar, View } from 'react-native';
import {
  ArrivalsProduct,
  AvatarComponent,
  ContainerComponent,
  PopularProduct,
  TextComponent,
} from '../../components';
import { colors } from '../../constants/colors';
import { globalStyles } from '../../styles/globalSyles';
import { useStatusBar } from '../../utils/useStatusBar';
import CategoriesList from './components/CategoriesList';
import OffersList from './components/OffersList';

const HomeScreen = () => {
  const user = auth().currentUser;

  useStatusBar('light-content');

 useEffect(() => {
    // message().onMessage(async (remoteMessage) => {
    //   console.log('A new FCM message arrived!', JSON.stringify(remoteMessage));
    // });
  }, []);

  return (
    <ContainerComponent isScroll={false}>
      <StatusBar
        translucent
        backgroundColor={'transparent'}
        barStyle={'dark-content'}
      />
      <View
        style={[
          globalStyles.section,
          {
            paddingTop: Platform.OS === 'android' ? 48 : 0,
          },
        ]}>
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

      {/* <Button
        title="test"
        onPress={() =>
          HandleNotifycation.pushNotifycation('Y0RVjfiIiDMvLRPBfulWcP0Jqb73', {
            title: 'Test',
            body: 'Test',
            data: {
              id: '1',
            },
          })
        }
      /> */}

      <ScrollView showsVerticalScrollIndicator={false}>
        <>
          <View style={[globalStyles.section]}>
            <TextComponent type="title" text="Wellcome," size={24} />
            <TextComponent
              text="Our fashion app"
              size={18}
              color={colors.gray2}
            />
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
        </>
        <OffersList />
        <CategoriesList />
        <ArrivalsProduct />
        <PopularProduct />
        <View style={{height: Platform.OS === 'ios' ? 80 : 130}} />
      </ScrollView>
    </ContainerComponent>
  );
};

export default HomeScreen;
