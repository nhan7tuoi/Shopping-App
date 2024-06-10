import {Button, Space} from '@bsdaoquang/rncomponent';
import auth from '@react-native-firebase/auth';
import {TickCircle} from 'iconsax-react-native';
import React, {useEffect} from 'react';
import {View} from 'react-native';
import {TextComponent} from '../../components';
import {fontFamilies} from '../../constants/fontFamilies';
import {colors} from '../../constants/colors';
import {useDispatch} from 'react-redux';
import {setAuthData} from '../../redux/reducers/authReducer';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Authen} from '../../utils/handleAuthen';

const ResultScreen = ({navigation, route}: any) => {
  const user = auth().currentUser;
  const dispatch = useDispatch();

  useEffect(() => {
    const timer = setTimeout(() => {
      handleSaveUser();
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const handleSaveUser = async () => {
    if (user) {
      console.log('Signed in with: ', user.email);
      const data = {
        uid: user.uid,
        email: user.email ?? '',
        displayName: user.displayName ?? '',
        emailVerified: user.emailVerified,
        photoURL: user.photoURL ?? '',
        creationTime: user.metadata.creationTime,
        lastSignInTime: user.metadata.lastSignInTime,
      };
      dispatch(setAuthData(data));

      await AsyncStorage.setItem('user', JSON.stringify(data));
    }
  };
  return (
    <>
      <View style={{flex: 7, justifyContent: 'center', alignItems: 'center'}}>
        <TickCircle color="#00FF00" size={70} />
        <View
          style={{
            marginVertical: 20,
          }}>
          <TextComponent
            text="Successfully!"
            font={fontFamilies.poppinsBold}
            styles={{
              fontWeight: 'bold',
            }}
          />
        </View>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            paddingHorizontal: 50,
          }}>
          <TextComponent
            text="You have successfully registered in our app and start working in it."
            type="description"
            color={colors.desciption}
            styles={{
              textAlign: 'center',
            }}
          />
        </View>
      </View>
      <View style={{flex: 1, paddingHorizontal: 24}}>
        <Button
          title="Start Shopping"
          onPress={handleSaveUser}
          color={colors.dark}
          textStyleProps={{fontWeight: 'bold'}}
        />
      </View>
    </>
  );
};

export default ResultScreen;
