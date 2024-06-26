import { View, Text } from 'react-native'
import React from 'react'

const ProductDetail = ({navigation,route}:any) => {
  const {id} = route.params
  return (
    <View>
      <Text>
        Product Detail {id}
      </Text>
    </View>
  )
}

export default ProductDetail