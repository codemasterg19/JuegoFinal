import { Button, Image, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { BUTTON_COLOR, SECONDARY_COLOR, TEXT_COLOR } from '../commons/constantsColor';
import { IconComponent } from '../components/IconComponent';
import { BodyComponent } from '../components/BodyComponent';
import { IconComponentSmall } from '../components/IconComponentSmall';
import { styles } from '../theme/appTheme';
 
export default function PerfilScreen({ navigation }: any) {

  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [correo, setCorreo] = useState("");
  const [usuario, setUsuario] = useState("");
  const [password, setPassword] = useState("");
  const [confirma, setConfirma] = useState("");
  const [image, setImage] = useState('');

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Hola, administra tu cuenta</Text>
          <IconComponent pathImage='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdsU9PD6epuU1Eolx_ElhxRlZwjYKUiJNDzw&usqp=CAU'/>
        </View>
        <BodyComponent>
          <View style={stylesI.containerM}>
            <Text style={styles.title}>Datos de usuario</Text>
            <TextInput
              style={styles.input}
              onChangeText={setNombre}
              value={nombre}
              placeholder="Nombre"
            />

            <TextInput
              style={styles.input}
              onChangeText={setApellido}
              value={apellido}
              placeholder="Apellido"
            />

            <TextInput
              style={styles.input}
              onChangeText={setUsuario}
              value={usuario}
              placeholder="Usuario"
            />

            <TextInput
              style={styles.input}
              placeholder="Correo electrónico"
              onChangeText={(texto) => setCorreo(texto)}
              keyboardType="email-address"
              autoCapitalize="none"
              autoCorrect={false}
            />
          </View>
          <View style={stylesI.containerM}>
            <Text style={stylesI.text}>Datos</Text>
            <IconComponentSmall title='Soporte' 
              pathImage='https://cdn.icon-icons.com/icons2/534/PNG/96/technical-support-2_icon-icons.com_52811.png' 
              pathImageS='https://cdn.icon-icons.com/icons2/1527/PNG/96/angleright_106681.png'/>
              <IconComponentSmall title='Legales' 
              pathImage='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeZ-Qb7tDtn8ar_p_M1hVC1Owr2rJLSNvn1w&usqp=CAU' 
              pathImageS='https://cdn.icon-icons.com/icons2/1527/PNG/96/angleright_106681.png'/>
          </View>
          <View style={stylesI.containerM}>
            <Text style={stylesI.text}>Contacto</Text>
            <IconComponentSmall title='Facebook' 
              pathImage='https://cdn.icon-icons.com/icons2/2429/PNG/512/facebook_logo_icon_147291.png' 
              pathImageS='https://cdn.icon-icons.com/icons2/1527/PNG/96/angleright_106681.png'/>
              <IconComponentSmall title='Instagram' 
              pathImage='https://cdn.icon-icons.com/icons2/1211/PNG/512/1491580635-yumminkysocialmedia26_83102.png' 
              pathImageS='https://cdn.icon-icons.com/icons2/1527/PNG/96/angleright_106681.png'/>
              <IconComponentSmall title='Twitter' 
              pathImage='https://cdn.icon-icons.com/icons2/306/PNG/96/Twitter-Icon_34073.png' 
              pathImageS='https://cdn.icon-icons.com/icons2/1527/PNG/96/angleright_106681.png'/>
              <IconComponentSmall title='TikTok' 
              pathImage='https://cdn.icon-icons.com/icons2/2972/PNG/96/tiktok_logo_icon_186896.png' 
              pathImageS='https://cdn.icon-icons.com/icons2/1527/PNG/96/angleright_106681.png'/>
              <IconComponentSmall title='Whatsapp' 
              pathImage='https://cdn.icon-icons.com/icons2/2972/PNG/512/whatsapp_logo_icon_186881.png' 
              pathImageS='https://cdn.icon-icons.com/icons2/1527/PNG/96/angleright_106681.png'/>
              <IconComponentSmall title='Telegram' 
              pathImage='https://cdn.icon-icons.com/icons2/2699/PNG/96/telegram_logo_icon_168692.png' 
              pathImageS='https://cdn.icon-icons.com/icons2/1527/PNG/96/angleright_106681.png'/>
              <IconComponentSmall title='Email' 
              pathImage='https://cdn.icon-icons.com/icons2/1826/PNG/96/4202011emailgmaillogomailsocialsocialmedia-115677_115624.png' 
              pathImageS='https://cdn.icon-icons.com/icons2/1527/PNG/96/angleright_106681.png'/>
          </View>
        </BodyComponent>
      </View>
    </ScrollView>
  )
}

const stylesI = StyleSheet.create({
  containerIcon: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    gap:20,
  },
  containerP: {
    width:150,
    height:150,
    marginVertical:20,
    alignSelf:'center',
  },
  containerM: {
    backgroundColor:BUTTON_COLOR,
    marginTop:20,
    paddingTop:15,
    paddingLeft:20,
    borderRadius:25,
  },
  text:{
    color: TEXT_COLOR,
    fontSize: 16,
    fontWeight: 'bold',
  }
});