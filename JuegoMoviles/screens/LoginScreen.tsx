import React, { useState } from 'react';
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View,ImageBackground } from 'react-native';

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
      <TouchableOpacity style={styles.Botones} onPress={()=> navigation.navigate("BottomTab")}>
        <Text style={styles.Botonestexto}>Iniciar Sesión</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.Botones2} onPress={()=> navigation.navigate("Registrarse")}>
        <Text style={styles.Botonestexto}>Registrarse</Text>
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
  icon: { marginTop: -100, height: 50 },
  titulo: {
    color: 'rgba(255,255,255,.95)',
    fontSize: 17,
    marginBottom: 50,
    marginTop: 50
  },
  containerimput: {
    
    height: 60,
    fontSize: 17,
    marginBottom: 15,
    width: 300,
    textAlign: 'center',
    color: '#333',
    fontWeight: '400',
    backgroundColor: 'rgba(255,255,255,.95)',
    borderRadius: 40,
  },
  Botones: {
    backgroundColor: 'red',
    width: '70%',
    height: 70,
    borderRadius: 40,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  Botones2: {
    width: '70%',
    height: 70,
    borderRadius: 40,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  Botonestexto: {
    color: 'white',
    fontSize: 20,
  }
});
