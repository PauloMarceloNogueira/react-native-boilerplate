import 'react-native-gesture-handler'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'

// import useGlobal from './Store'

import StackNavigator from './Navigator/navigator'

const App = () => {
  // const [, actions] = useGlobal()

  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  )
}

export default App
