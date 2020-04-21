import React from 'react'
import { Dimensions } from 'react-native'

import { Container } from './Start.styles'
import Footer from '~/Components/Templates/Footer/footer.component'

function StartScreen ({ handlers }) {
  const { width } = Dimensions.get('window')
  const {
    handleSignUp,
    handleSignIn
  } = handlers

  return (
    <Container>
      <Footer
        type='double'
        buttons={[
          {
            title: 'Iniciar Cadastro',
            onPress: handleSignUp,
            style: { width: width - 60 }
          },
          {
            title: 'Já sou cadastrado',
            onPress: handleSignIn,
            style: { width: width - 60 }
          }
        ]}
        containerStyle={{ marginHorizontal: 24 }}
      />
    </Container>
  )
}

export default StartScreen
