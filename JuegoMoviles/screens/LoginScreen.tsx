import React, { useState } from 'react';
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function LoginScreen({ navigation }: any) {
 

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}></Text>
      <TextInput
        style={styles.containerimput}
        placeholder="Usuario"
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
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#587e63',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo: {
    fontSize: 40,
    color: '#181716',
    marginBottom: 20,
  },
  containerimput: {
    backgroundColor: 'white',
    height: 50,
    width: '80%',
    borderRadius: 20,
    margin: 10,
    paddingHorizontal: 10,
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
    backgroundColor: 'white',
    width: '70%',
    height: 70,
    borderRadius: 40,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  Botonestexto: {
    color: 'black',
    fontSize: 20,
  }
});
