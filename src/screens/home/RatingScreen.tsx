import { View, Text } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const RatingScreen = () => {
    const navigation = useNavigation()
  return (
    <View>
      <Text>RatingScreen</Text>
    </View>
  )
}

export default RatingScreen