import React from 'react'
import { useNavigation } from '@react-navigation/native'

import StartScreen from './Start.screen'
import { Alert } from 'react-native'

export default function StartController () {
  try {
    const { navigate } = useNavigation()
    const handleNavigation = screen => {
      try {
        navigate(screen)
      } catch (error) {
        console.log(error)
      }
    }

    const handleSignUp = () => {
      Alert.alert('Componente ainda não disponível', 'Crie o arquivo dentro de /Screens')
    }

    const handleSignIn = () => {
      handleNavigation('Login')
    }
    const handlers = {
      handleSignUp,
      handleSignIn
    }

    return <StartScreen handlers={handlers} />
  } catch (error) {
    console.log(error)
  }
}
