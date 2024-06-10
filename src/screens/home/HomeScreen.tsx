import { View, Text } from 'react-native'
import React from 'react'
import SvgComponent from '../../components/SvgComponent'
import auth from '@react-native-firebase/auth'

const HomeScreen = () => {
  const user = auth().currentUser
  console.log('User: ', user)
  return (
    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
      <SvgComponent name='ProfileIcon' width={24} height={24}/>
    </View>
  )
}

export default HomeScreen