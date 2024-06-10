import { View, Text } from 'react-native'
import React from 'react'
import { Button } from '@bsdaoquang/rncomponent'
import auth from '@react-native-firebase/auth'
import { useDispatch } from 'react-redux'
import { removeAuthData } from '../../redux/reducers/authReducer'
import AsyncStorage from '@react-native-async-storage/async-storage'

const ProfileScreen = () => {
  const dispatch = useDispatch();
  return (
    <View style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <Button title="Logout" onPress={async ()=>{
        await auth().signOut()
        dispatch(removeAuthData())
        await AsyncStorage.removeItem('user')
      }} />
    </View>
  )
}

export default ProfileScreen