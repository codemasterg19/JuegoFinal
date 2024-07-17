import React from 'react';
import { StyleSheet, Text, View, StatusBar, Image, TouchableOpacity } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export default function WelcomeScreen({ navigation }: any) {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" translucent backgroundColor="transparent" />

      {/* Top Section */}
      <View style={styles.topSection}>
        <Image
          resizeMode="contain"
          style={styles.image}
          source={require('../assets/icono1.png')}
        />
      </View>

      {/* Button and text section */}
      <View style={styles.buttonTextSection}>
    <View style={styles.textContainer}>
    <Text style={styles.title}>Juega y Entrena tu Memoria</Text>
    <Text style={styles.subtitle}>
      Mejora tu concentración y ejercita tu cerebro con nuestro juego de memoria interactivo.
    </Text>
    <TouchableOpacity
      onPress={() => navigation.navigate('Juego')}
      style={styles.button}
    >
      <Text style={styles.buttonText}>Comenzar a Jugar</Text>
    </TouchableOpacity>
    </View>
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#2249D6', // Puedes cambiar este color de fondo según tus preferencias
  },
  topSection: {
    flex: 2, // Valor reducido de 2.5 a 2
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  image: {
    width: wp('90%'),
    height: hp('90%'),
    marginTop: -100, // Ajusta este valor según sea necesario
  },
  buttonTextSection: {
    flex: 2,
    justifyContent: 'center',
    paddingHorizontal: wp('5%'),
  },
  textContainer: {
    position: 'relative',
    flexDirection: 'column',
    backgroundColor: 'rgba(255,255,255,0.3)',
    height: hp('35%'),
    borderRadius: 15,
    paddingTop: 20,
    paddingHorizontal: wp('5%'),
  },
  title: {
    fontFamily: 'Roboto-Black',
    fontSize: 25,
    color: '#fff',
    alignSelf: 'center',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 15,
    alignSelf: 'center',
    paddingTop: 20,
    color: '#fff',
    textAlign: 'center',
  },
  button: {
    position: 'relative',
    width: '100%',
    backgroundColor: '#fff',
    height: 50,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
  },
  buttonText: {
    fontFamily: 'Roboto-Bold',
    fontSize: 15,
    color: '#2D97DA',
  },
});
