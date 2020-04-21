import React from 'react'
import { View, Text, Dimensions, StyleSheet, Image, TouchableOpacity } from 'react-native'
import { DrawerContentScrollView } from '@react-navigation/drawer'
// import useGlobal from '~/Store'
import SVGIcon from '../../Components/Icons/SvgIcon/SvgIcon.component'
// import { maskCPF } from '~/Utils/stringFormat'
import IconButton from '../../Components/Buttons/IconButton/IconButton.component'

const { width } = Dimensions.get('window')

function CustomDrawerContent (props) {

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

  const itensMenu = (svg, marginTop, title, onPress) => (
    <TouchableOpacity onPress={onPress}>
      <View style={{ marginTop, marginLeft: 12, flexDirection: 'row', alignItems: 'center', paddingVertical: 16 }}>
        <SVGIcon
          name={svg.name}
          width={svg.width}
          height={svg.height}
          fill='#080E33'
        />
        <Text style={{ fontSize: 16, fontWeight: 'bold', marginLeft: 32, color: '#635952', flex: 1 }}>
          {title}
        </Text>
      </View>
    </TouchableOpacity>
  )

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
            {/* <Text style={{ color: 'white', fontSize: 18 }}>Olá, <Text style={{ fontWeight: 'bold' }}>{handleName()}</Text></Text> */}
            {/* <Text style={{ color: 'white', fontSize: 12 }}>CPF: {handleDocument()}</Text> */}
          </View>
        </View>

        <Text style={{ color: 'white', fontSize: 12, marginTop: 16 }}>Seu banco:</Text>
        <Text style={{ color: 'white', fontSize: 12, fontWeight: 'bold' }}> - </Text>

        <Text style={{ color: 'white', fontSize: 12, marginTop: 16 }}>Sua agência digital:</Text>
        <Text style={{ color: 'white', fontSize: 12, fontWeight: 'bold' }}> - </Text>

        <Text style={{ color: 'white', fontSize: 12, marginTop: 16 }}>Sua conta digital:</Text>
        <Text style={{ color: 'white', fontSize: 12, fontWeight: 'bold' }}> - </Text>

        {itensMenu({ name: 'DefaultCard', width: 22, height: 16 }, 100, 'meu cartão BIB', () => props.navigation.navigate('Home', { renderedCard: 'myBankCard' }))}
        {itensMenu({ name: 'MyInvoicesCard', width: 20, height: 22 }, 16, 'minhas faturas', () => props.navigation.navigate('Home', { renderedCard: 'myInvoices' }))}
        {/* {itensMenu(16, 'vencimentos das faturas', () => props.navigation.navigate('Home', { renderedCard: 'invoiceDueDate' }))} */}
        {itensMenu({ name: 'ExitNavigation', width: 19, height: 21 }, 16, 'sair', () => props.navigation.reset({
          index: 0,
          routes: [{ name: 'SignIn' }]
        }))}
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

export default CustomDrawerContent
