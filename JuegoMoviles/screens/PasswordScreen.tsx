import React from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { INPUT_COLOR, PRIMARY_COLOR, SECONDARY_COLOR, TEXT_COLOR } from '../commons/constantsColor';


export const PasswordScreen = () => {
  const [email, onChangeEmail] = React.useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.textoP}>Recuperar Contraseña</Text>
      <View style={styles.container1}>
        <Text style={styles.texto}>Ingrese su email y se enviará un código para la recuperación de la contraseña</Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangeEmail}
          value={email}
          placeholder="cristiantorres@gmail.com"
        />
        <TouchableOpacity style={styles.button}>
          <Text style={styles.texto}>Enviar código</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: PRIMARY_COLOR,
  },
  container1: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    padding:20,
    gap:20,
  },
  textoP: {
    backgroundColor:SECONDARY_COLOR,
    color:TEXT_COLOR,
    fontSize:20,
    padding:20,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  texto: {
    color:TEXT_COLOR,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  input: {
    backgroundColor:INPUT_COLOR,
    color:'black',
    width:200,
    height: 40,
    marginVertical: 10,
    borderWidth: 1,
    padding: 10,
  },
  button: {
    width:200,
    backgroundColor:SECONDARY_COLOR,
    padding: 10,
  },
});
