import React from 'react'
import { Dimensions } from 'react-native'
import { createDrawerNavigator } from '@react-navigation/drawer'

import Menu from '../Components/Menu/menu.screen'
import LoginScreen from '~/Screens/Login/Login.screen'
import StartScreen from '~/Screens/Start/Start.controller'

const { Navigator, Screen } = createDrawerNavigator()

const { width } = Dimensions.get('screen')

const StackNavigator = () => {
  return (
    <Navigator
      drawerContent={props => <Menu {...props} />}
      drawerPosition='right'
      drawerStyle={{ width }}
      options={{
        gestureEnabled: false
      }}
      gestureEnabled={false}
    >
      <Screen name='Start' component={StartScreen} options={{ headerShown: false, gestureEnabled: false }} />
      <Screen name='Login' component={LoginScreen} options={{ headerShown: false, gestureEnabled: false }} />
    </Navigator>
  )
}

export default StackNavigator
