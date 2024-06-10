import { View, Text } from 'react-native'
import React from 'react'
import { Button } from '@bsdaoquang/rncomponent'
import auth from '@react-native-firebase/auth'

const ProfileScreen = () => {
  return (
    <View style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <Button title="Logout" onPress={async ()=>{
        await auth().signOut()
      }} />
    </View>
  )
}

export default ProfileScreen