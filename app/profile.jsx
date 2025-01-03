import { View, Text } from 'react-native'
import React from 'react'
import { globalStyles } from '../constants/globalstyle'

const Profile = () => {
  return (
    <View style={globalStyles.container}>
        <Text style={globalStyles.text}>Profile</Text>
        <View style={globalStyles.coloredRectangle}>
        <Text style={globalStyles.miniText}>Profile</Text>
        </View>
    </View>
  )
}

export default Profile