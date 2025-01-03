import { View, Text } from 'react-native'
import React from 'react'
import { globalStyles } from '../constants/globalstyle'


const Create = () => {
  return (
    <View style={globalStyles.container}>
        <Text style={globalStyles.text}>Create</Text>
        <View style={globalStyles.coloredRectangle}>
        <Text style={globalStyles.miniText}>Create</Text>
        </View>
    </View>
  )
}

export default Create