import { ActivityIndicator, Alert, Button, Image, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { BodyComponent } from '../components/BodyComponent';
import { PRIMARY_COLOR, SECONDARY_COLOR, TEXT_COLOR } from '../commons/constantsColor';
import { styles } from '../theme/appTheme';
import { ButtonComponent } from '../components/ButtonComponent';
import { auth } from '../config/Config';
import { reauthenticateWithCredential, EmailAuthProvider, updatePassword } from 'firebase/auth';

export default function CambioContraseña({ navigation }: any) {

    const [oldPassword, setOldPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmNewPassword, setConfirmNewPassword] = useState("");
    const [loading, setLoading] = useState(false);
  
    const changePassword = async () => {
      setLoading(true);
      try {
        const user = auth.currentUser;
        if (user) {
            console.log(user)
          const credential = EmailAuthProvider.credential(user.email, oldPassword);
          await reauthenticateWithCredential(user, credential);
          
          if (newPassword === confirmNewPassword) {
            await updatePassword(user, newPassword);
            Alert.alert('Éxito', 'Contraseña actualizada correctamente');
            navigation.navigate('Perfil');
          } else {
            Alert.alert('Error', 'Las nuevas contraseñas no coinciden');
          }
        }
      } catch (error) {
        Alert.alert('Error', 'Error al actualizar la contraseña');
        console.error('Error al actualizar la contraseña:', error);
      } finally {
        setLoading(false);
      }
    };  

    return (
        <View style={stylesI.containerT}>
          <BodyComponent>
          <Text style={stylesI.title}>Cambiar contraseña</Text>
          <View style={stylesI.containerD}>
            <TextInput
                style={styles.input}
                onChangeText={setOldPassword}
                value={oldPassword}
                placeholder="Contraseña antigua"
                secureTextEntry
            />
            <TextInput
                style={styles.input}
                onChangeText={setNewPassword}
                value={newPassword}
                placeholder="Nueva contraseña"
                secureTextEntry
            />
            <TextInput
                style={styles.input}
                onChangeText={setConfirmNewPassword}
                value={confirmNewPassword}
                placeholder="Confirmar nueva contraseña"
                secureTextEntry
            />
          </View>
          <ButtonComponent title="CAMBIAR CONTRASEÑA" onPress={changePassword} />
          {loading && <ActivityIndicator size="large" color={SECONDARY_COLOR} />}
          <ButtonComponent title="REGRESAR" onPress={() => navigation.navigate('Perfil')} />
        </BodyComponent>
        </View>
      )
    }
    
    const stylesI = StyleSheet.create({
      containerT: {
        flex:1,
        backgroundColor: PRIMARY_COLOR,
        justifyContent:'center',
        alignItems:'center',
      },
      title: {
        color: TEXT_COLOR,
        fontSize: 25,
        fontWeight: 'bold',
      },
      containerP: {
        width:150,
        height:150,
        alignSelf:'center',
        resizeMode: 'cover',
      },
      containerD: {
        paddingTop:10,
      },
    });