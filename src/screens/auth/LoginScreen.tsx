import {Button, Input} from '@bsdaoquang/rncomponent';
import {TickCircle} from 'iconsax-react-native';
import React, {useState} from 'react';
import {Image, View} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {ContainerComponent, TextComponent} from '../../components';
import {colors} from '../../constants/colors';
import {fontFamilies} from '../../constants/fontFamilies';
import auth from '@react-native-firebase/auth';
import {Authen} from '../../utils/handleAuthen';
import {useDispatch} from 'react-redux';
import {setAuthData} from '../../redux/reducers/authReducer';
import AsyncStorage from '@react-native-async-storage/async-storage';

const LoginScreen = ({navigation}: any) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();

  const handleLogin = async () => {
    setIsLoading(true);
    if (email && password) {
      try {
        const userCredential = await auth().signInWithEmailAndPassword(
          email,
          password,
        );
        const user = userCredential.user;
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
          }
          dispatch(
            setAuthData(data),
          );

          await AsyncStorage.setItem('user', JSON.stringify(data));

          await Authen.UpdateProfile(user);
        }
        setIsLoading(false);
      } catch (error) {
        console.log('Error: ', error);
      }
    } else {
      console.log('Error: Email or Password is empty');
    }
  };

  return (
    <ContainerComponent>
      <View
        style={{
          paddingTop: 32,
          justifyContent: 'center',
          alignItems: 'center',
          height: 200,
        }}>
        <Image
          style={{
            resizeMode: 'contain',
            width: '60%',
          }}
          source={require('../../assets/images/icon-text.png')}
        />
      </View>
      <View style={{paddingHorizontal: 24}}>
        <TextComponent
          text="Wellccome !"
          size={18}
          styles={{
            fontFamily: fontFamilies.poppinsBold,
          }}
        />
        <TextComponent
          text="Please login or signup to continue out app."
          color={colors.desciption}
        />
      </View>
      <View style={{paddingHorizontal: 24, paddingTop: 20}}>
        <Input
          label="Email"
          value={email}
          onChange={val => setEmail(val)}
          radius={0}
          color="transparent"
          bordered={false}
          placeholder="Email"
          required
          helpText="Please enter a valid email"
          affix={
            email && email.includes('@') && email.includes('.') ? (
              <TickCircle variant="Bold" size={24} color={colors.dark} />
            ) : null
          }
          styles={{
            borderBottomWidth: 1,
            borderBottomColor: colors.dark,
            paddingHorizontal: 0,
            paddingVertical: 0,
          }}
          labelStyleProps={{
            marginBottom: 0,
          }}
          clear
        />

        <Input
          label="Password"
          value={password}
          onChange={val => setPassword(val)}
          radius={0}
          color="transparent"
          bordered={false}
          placeholder="Password"
          password
          required
          helpText="Please enter a valid password"
          styles={{
            borderBottomWidth: 1,
            borderBottomColor: colors.dark,
            paddingHorizontal: 0,
            paddingVertical: 0,
          }}
          labelStyleProps={{
            marginBottom: 0,
          }}
        />
      </View>
      <View
        style={{
          justifyContent: 'flex-end',
          flexDirection: 'row',
          paddingRight: 24,
        }}>
        <Button
          isShadow={false}
          type="link"
          onPress={() => {}}
          title="Forgot Password?"
        />
      </View>
      <View
        style={{
          paddingHorizontal: 24,
          paddingTop: 20,
        }}>
        <Button
          isShadow={false}
          loading={isLoading}
          title="Login"
          onPress={handleLogin}
          color={colors.dark}
          textStyleProps={{
            fontFamily: fontFamilies.poppinsBold,
            fontSize: 16,
            fontWeight: 'bold',
          }}
        />
      </View>
      <TextComponent
        text="OR"
        type="title"
        styles={{alignSelf: 'center', fontWeight: 'bold'}}
      />
      <View
        style={{
          paddingHorizontal: 24,
          paddingTop: 20,
        }}>
        <Button
          isShadow={false}
          color="#3498db"
          title="Continue with Facebook"
          icon={
            <Ionicons name="logo-facebook" size={24} color={colors.white} />
          }
          onPress={handleLogin}
          textStyleProps={{
            fontFamily: fontFamilies.poppinsMedium,
          }}
        />
      </View>
      <View
        style={{
          paddingHorizontal: 24,
          paddingTop: 10,
        }}>
        <Button
          isShadow={false}
          title="Continue with Google"
          icon={<Ionicons name="logo-google" size={24} color={colors.dark} />}
          onPress={handleLogin}
          textStyleProps={{
            fontFamily: fontFamilies.poppinsMedium,
          }}
        />
      </View>
      <View
        style={{
          paddingHorizontal: 24,
          paddingTop: 10,
        }}>
        <Button
          isShadow={false}
          title="Continue with Apple"
          icon={<Ionicons name="logo-apple" size={24} color={colors.dark} />}
          onPress={handleLogin}
          textStyleProps={{
            fontFamily: fontFamilies.poppinsMedium,
          }}
        />
      </View>
      <View
        style={{
          paddingHorizontal: 24,
          paddingTop: 10,
          paddingBottom: 20,
          flexDirection: 'row',
          justifyContent: 'center',
          alignContent: 'center',
        }}>
        <TextComponent text="Don’t have an account?" />
        <Button
          isShadow={false}
          type="link"
          title="Sign up"
          onPress={() => {
            navigation.navigate('SignUpScreen');
          }}
          textStyleProps={{fontFamily: fontFamilies.poppinsBold}}
        />
      </View>
    </ContainerComponent>
  );
};

export default LoginScreen;
