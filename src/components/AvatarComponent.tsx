import { View, Text, Image } from 'react-native'
import React from 'react'
import { globalStyles } from '../styles/globalSyles'

const AvatarComponent = () => {
  return (
    <View>
      <Image source={require('../assets/images/avt-image.jpeg')}
      style={[globalStyles.avatar]}
      />
    </View>
  )
}

export default AvatarComponent