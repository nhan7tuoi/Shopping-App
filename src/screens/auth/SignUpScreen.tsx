import {Button, Input, Space} from '@bsdaoquang/rncomponent';
import {TickCircle, TickSquare} from 'iconsax-react-native';
import React, {useState} from 'react';
import {Image, View} from 'react-native';
import {ContainerComponent, TextComponent} from '../../components';
import {colors} from '../../constants/colors';
import {fontFamilies} from '../../constants/fontFamilies';
import auth from '@react-native-firebase/auth';
import {Authen} from '../../utils/handleAuthen';

const innitialState = {
  username: '',
  email: '',
  password: '',
  confirmPassword: '',
};

const SignUpScreen = ({navigation}: any) => {
  const [register, setRegister] = useState(innitialState);
  const [isLoading, setIsLoading] = useState(false);

  const handleChangeForm = (value: string, key: string) => {
    const item: any = {...register};
    if (value && key) {
      item[`${key}`] = value;
      setRegister(item);
    } else {
      console.log('Error: value or key is empty');
    }
  };
  const handleSignUp = async () => {
    setIsLoading(true);
    const {username, email, password, confirmPassword} = register;
    try {
      if (email && password && confirmPassword && username) {
        if (password === confirmPassword) {
          const userCredential = await auth().createUserWithEmailAndPassword(
            email,
            password,
          );
          const user = userCredential.user;
          if (user) {
            if (username) {
              await user.updateProfile({
                displayName: username,
              });
            }
            console.log('Signed in with: ', user.email);
            await Authen.CreateProfile();
          }
          setIsLoading(false);
        }
      }
    } catch (error) {
      console.log('Error: ', error);
      setIsLoading(false);
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
          text="Sign Up"
          size={18}
          styles={{
            fontFamily: fontFamilies.poppinsBold,
          }}
        />
        <TextComponent text="Create on new account" color={colors.desciption} />
      </View>
      <View style={{paddingHorizontal: 24, paddingTop: 20}}>
        <Input
          label="Username"
          value={register.username}
          onChange={val => handleChangeForm(val, 'username')}
          radius={0}
          color="transparent"
          bordered={false}
          placeholder="Username"
          affix={
            register.username ? (
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
          label="Email"
          value={register.email}
          onChange={val => handleChangeForm(val, 'email')}
          radius={0}
          color="transparent"
          bordered={false}
          placeholder="Email"
          keyboardType="email-address"
          affix={
            register.email &&
            register.email.includes('@') &&
            register.email.includes('.') ? (
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
          value={register.password}
          onChange={val => handleChangeForm(val, 'password')}
          radius={0}
          color="transparent"
          bordered={false}
          placeholder="Password"
          password
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
        <Input
          label="Confirm Password"
          value={register.confirmPassword}
          onChange={val => handleChangeForm(val, 'confirmPassword')}
          radius={0}
          color="transparent"
          bordered={false}
          placeholder="Confirm Password"
          password
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
      <View style={{flexDirection: 'row', paddingHorizontal: 30}}>
        <TickSquare variant="Bold" size={24} color={colors.dark} />
        <Space width={6} />
        <TextComponent
          type="description"
          color={colors.desciption}
          text="By create an account, you have agree with out term & condication"
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
          title="Sign Up"
          onPress={handleSignUp}
          color={colors.dark}
          textStyleProps={{
            fontFamily: fontFamilies.poppinsBold,
            fontSize: 16,
            fontWeight: 'bold',
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
        <TextComponent text="You have an account" />
        <Button
        isShadow={false}
          type="link"
          title="Sign In"
          onPress={() => {
            navigation.navigate('LoginScreen');
          }}
          textStyleProps={{fontFamily: fontFamilies.poppinsBold}}
        />
      </View>
    </ContainerComponent>
  );
};

export default SignUpScreen;
