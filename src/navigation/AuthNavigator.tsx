import React from 'react'
import { createNativeStackNavigator as createStackNavigator } from '@react-navigation/native-stack'

import { NAV_HEADER_OPTION } from '@/constants'

import SignIn from '@/screens/SignIn'
const Stack = createStackNavigator()

const AuthNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="SignIn"
      screenOptions={{
        ...NAV_HEADER_OPTION,
      }}
    >
      <Stack.Screen name="SignIn" component={SignIn} />
    </Stack.Navigator>
  )
}

export default AuthNavigator
