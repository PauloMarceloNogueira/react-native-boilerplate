import React from 'react'
import { View, Text, Dimensions, StyleSheet, Image } from 'react-native'
import { DrawerContentScrollView } from '@react-navigation/drawer'
import useGlobal from '~/Store'
import { maskCPF } from '~/Utils/stringFormat'
import IconButton from '../../Components/Buttons/IconButton/IconButton.component'

const { width } = Dimensions.get('window')

function MenuNotLogged (props) {
  const [state] = useGlobal()

  const handleDocument = () => maskCPF(state.account.document)
  const handleName = () => state.account.name

  const logo = (
    <Image
      resizeMode='stretch'
      style={{ width: 56, height: 56 }}
      source={require('../../Assets/profile/profile.png')}
    />
  )

  const close = {
    name: 'close',
    color: '#fff',
    size: 36,
    underlayColor: 'red',
    containerStyle: { marginRight: 16 }
  }

  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.container}>
        <View style={styles.roundedEdgeTop} />
      </View>

      <IconButton
        elementsIcon={close}
        style={styles.elementsIcon}
        onPress={() => props.navigation.closeDrawer()}
      />

      <View style={{ marginHorizontal: 32 }}>

        <View style={{ flexDirection: 'row', marginTop: 16 }}>
          {logo}
          <View style={{ justifyContent: 'center', marginLeft: 24 }}>
            <Text style={{ color: 'white', fontSize: 18 }}>Olá, <Text style={{ fontWeight: 'bold' }}>{handleName()}</Text></Text>
            <Text style={{ color: 'white', fontSize: 12 }}>CPF: {handleDocument()}</Text>
          </View>
        </View>

        <Text style={{ color: 'white', fontSize: 12, marginTop: 16 }}>Seu banco:</Text>
        <Text style={{ color: 'white', fontSize: 12, fontWeight: 'bold' }}> - </Text>

        <Text style={{ color: 'white', fontSize: 12, marginTop: 16 }}>Sua agência digital:</Text>
        <Text style={{ color: 'white', fontSize: 12, fontWeight: 'bold' }}> - </Text>

        <Text style={{ color: 'white', fontSize: 12, marginTop: 16 }}>Sua conta digital:</Text>
        <Text style={{ color: 'white', fontSize: 12, fontWeight: 'bold' }}> - </Text>

      </View>
    </DrawerContentScrollView>
  )
}

const styles = StyleSheet.create({
  flexOne: {
    flex: 1
  },
  container: {
    position: 'absolute',
    width
  },
  roundedEdgeTop: {
    backgroundColor: '#080E33',
    alignSelf: 'center',
    width: 110,
    height: 349,
    borderBottomRightRadius: 50,
    borderBottomLeftRadius: 50,
    transform: [{ scaleX: 4 }],
    zIndex: -2
  },
  elementsIcon: {
    alignSelf: 'flex-end'
  }
})

export default MenuNotLogged
