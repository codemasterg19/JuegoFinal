import React, { useState } from 'react';
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View,ImageBackground } from 'react-native';
import { ButtonComponent } from '../components/ButtonComponent';

export default function LoginScreen({ navigation }: any) {
 

  return (
    
    <ImageBackground source={require('../assets/bg.png')} style={styles.container}>

        <Image
        source={require('../assets/icono.png')}
        resizeMode={'contain'}
        style={styles.icon}
        />

      <Text style={styles.titulo}>INGRESO GAMER</Text>
      <TextInput
        style={styles.containerimput}
        placeholder="Usuario"
        autoCorrect={false} 
        
      />
      <TextInput
        style={styles.containerimput}
        placeholder="Contraseña"
        secureTextEntry
      />
      <View style={styles.containerB}>
        <ButtonComponent title='INICIAR SESIÓN' onPress={()=>navigation.navigate('BottomTab')}/>
        <ButtonComponent title='REGISTRARSE' onPress={()=>navigation.navigate('Registrarse')}/>
      </View>
      <TouchableOpacity style={styles.Botones2} onPress={()=> navigation.navigate("Recuperar")}>
        <Text style={styles.Botonestexto2}>Recuperar contraseña</Text>
      </TouchableOpacity>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#587e63',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerB:{
    flexDirection:'row',
    marginTop:20,
    gap:20,
  },
  icon: { marginTop: -100, height: 150 },
  titulo: {
    color: 'rgba(255,255,255,.95)',
    fontSize: 17,
    marginBottom: 50,
    marginTop: 50
  },
  containerimput: {
    
    height: 50,
    fontSize: 17,
    marginBottom: 15,
    width: 300,
    textAlign: 'center',
    color: '#333',
    fontWeight: '400',
    backgroundColor: 'rgba(255,255,255,.95)',
    borderRadius: 40,
  },
  button:{
    backgroundColor:''
  },
  Botones: {
    backgroundColor: '#3e69e0',
    width: '50%',
    height: 60,
    borderRadius: 40,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  Botones2: {
    width: '50%',
    height: 60,
    borderRadius: 40,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  Botonestexto: {
    color: 'white',
    fontSize: 20,
  },
  Botonestexto2: {
    color: 'white',
    fontSize: 20,
  }
});
