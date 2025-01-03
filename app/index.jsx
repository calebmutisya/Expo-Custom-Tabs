import { View, Text } from 'react-native'
import React from 'react'
import { globalStyles } from '../constants/globalstyle'

const Home = () => {
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.text}>Home</Text>
      <View style={globalStyles.coloredRectangle}>
        <Text style={globalStyles.miniText}>Home</Text>
      </View>
    </View>
  )
}

export default Home

