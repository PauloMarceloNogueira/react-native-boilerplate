import React from 'react'

import { Container, Content } from './Login.styles'
import TitleText from '~/Components/Texts/TitleText/TitleText.component'
import PrimaryInput from '~/Components/Inputs/PrimaryInput/PrimaryInput.component'

export default function LoginScreen () {
  return (
    <Container>
      <Content>
        <TitleText title='Acesse sua conta' hasOutline />
        <PrimaryInput
          label='CPF'
          containerStyle={{ marginTop: 40 }}
          keyboardType='number-pad'
          value=''
          onChangeText={() => {}}
          maxLength={14}
        />
      </Content>
    </Container>
  )
}
