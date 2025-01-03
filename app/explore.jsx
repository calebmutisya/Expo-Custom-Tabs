import { View, Text } from 'react-native'
import React from 'react'
import { globalStyles } from '../constants/globalstyle'

const Explore = () => {
  return (
    <View style={globalStyles.container}>
        <Text style={globalStyles.text}>Explore</Text>
        <View style={globalStyles.coloredRectangle}>
        <Text style={globalStyles.miniText}>Explore</Text>
        </View>
    </View>
  )
}

export default Explore