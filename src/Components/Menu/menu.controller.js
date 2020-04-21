import React from 'react'
import { useNavigation } from '@react-navigation/native'
import useGlobal from '~/Store/index'

import Menu from './menu.screen'

function MenuController ({ route }) {
  try {
    const [, actions] = useGlobal()
    const { openDrawer, reset, navigate } = useNavigation()

    const handleNavigation = (screen, params = {}) => {
      try {
        navigate(screen, params)
      } catch (error) {
        console.log(error)
      }
    }

    const handleLogout = () => {
      try {
        actions.application.setInitialState()
        handleNavigation('Start', {})
      } catch (error) {
        console.log(error)
      }
    }

    const handlers = {
      handleLogout
    }

    return <Menu handlers={handlers} />
  } catch (error) {
    console.log(error)
  }
}

export default MenuController
