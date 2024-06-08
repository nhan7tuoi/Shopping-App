import { View, Text } from 'react-native'
import React from 'react'
import Icons from '../assets/svg/Icons'

type Props = {
    name: string,
    height: number,
    width: number
}

const SvgComponent = (props:Props) => {
  const {name, height, width} = props
  return (
    <View>
      {Icons.Icon({name:name, height:height, width:width})}
    </View>
  )
}

export default SvgComponent