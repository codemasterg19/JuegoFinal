import React from 'react'
import { Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { ButtonComponent } from '../components/ButtonComponent';
import { PRIMARY_COLOR, TEXT_COLOR } from '../commons/constantsColor';

export const RegisterScreen = ({ navigation }: any) => {

  const [firstName, onChangeFirstName] = React.useState('');
  const [lastName, onChangeLastName] = React.useState('');
  const [number, onChangeNumber] = React.useState('');
  const [email, onChangeEmail] = React.useState('');
  const [user, onChangeUser] = React.useState('');
  const [password, onChangePassword] = React.useState('');
  const [confirm, onChangeConfirm] = React.useState('');

  return (
    <ScrollView style={styles.container}>
      <View style={styles.container1}>
        <Text style={styles.textStart}>DATOS DE REGISTRO</Text>
        <Text style={styles.texto}>Nombre:</Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangeFirstName}
          value={firstName}
          placeholder="Cristian"
        />
        <Text style={styles.texto}>Apellido:</Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangeLastName}
          value={lastName}
          placeholder="Torres"
        />
        <Text style={styles.texto}>Celular:</Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangeNumber}
          value={number}
          placeholder="0987654321"
          keyboardType="numeric"
        />
        <Text style={styles.texto}>Email:</Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangeEmail}
          value={email}
          placeholder="cristiantorres@gmail.com"
        />
        <Text style={styles.texto}>Usuario:</Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangeUser}
          value={user}
          placeholder="cristiant"
        />
        <Text style={styles.texto}>Contraseña:</Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangePassword}
          value={password}
          placeholder="******"
        />
        <Text style={styles.texto}> Confirme la contraseña:</Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangeConfirm}
          value={confirm}
          placeholder="******"
        />
        <View style={styles.containerB}>
          <ButtonComponent title='REGISTRARSE' onPress={()=>navigation.navigate('RegisterScreen')}/>
          <ButtonComponent title='INICIAR SESIÓN' onPress={()=>navigation.navigate('LoginScreen')}/>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:PRIMARY_COLOR,
  },
  container1:{
    backgroundColor:PRIMARY_COLOR,
    alignItems:'center',
    width:'100%',
    marginVertical:20,
    // gap:10,
  },
  containerB:{
    marginTop:10,
    gap:20,
  },
  logo:{
    height: 100,
    width:300,
    resizeMode:'contain'
  },
  textStart: {
    color: TEXT_COLOR,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign:'center',
    marginBottom:10,
  },
  texto:{
    color:TEXT_COLOR,
    fontWeight: 'bold',
    textAlign:'center',
  },
  input: {
    backgroundColor:'white',
    color:'black',
    width:200,
    height: 40,
    marginVertical:10,
    borderWidth: 1,
    padding: 10,
  },
});