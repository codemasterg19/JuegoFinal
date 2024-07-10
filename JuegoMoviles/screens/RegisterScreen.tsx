import React, { useState } from "react";
import {  Alert,  Image,  ScrollView,  StyleSheet,  Text,  TextInput,  TouchableOpacity,  View,} from "react-native";
import { ButtonComponent } from "../components/ButtonComponent";
import { PRIMARY_COLOR, TEXT_COLOR } from "../commons/constantsColor";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config/Config";

import { doc, setDoc } from 'firebase/firestore';

export const RegisterScreen = ({ navigation }: any) => {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [correo, setCorreo] = useState("");
  const [usuario, setUsuario] = useState("");
  const [password, setPassword] = useState("");
  const [confirma, setConfirma] = useState("");

  function getErrorMessage(errorCode: any) {
    switch (errorCode) {
      case "auth/email-already-in-use":
        return "El correo electrónico ya está en uso por otra cuenta.";
      case "auth/invalid-email":
        return "El formato del correo electrónico no es válido.";
      case "auth/operation-not-allowed":
        return "La operación no está permitida. Por favor, contacta al soporte.";
      case "auth/weak-password":
        return "La contraseña proporcionada es demasiado débil.";
      case "auth/network-request-failed":
        return "La solicitud de red ha fallado. Por favor, verifica tu conexión a internet.";
      case "auth/internal-error":
        return "Ha ocurrido un error interno. Por favor, inténtalo de nuevo.";
      case "auth/requires-recent-login":
        return "Esta operación es sensible y requiere autenticación reciente. Inicia sesión nuevamente antes de intentar esta solicitud.";
      default:
        return "Ha ocurrido un error inesperado. Por favor, inténtalo de nuevo.";
    }
  }

  function registro() {
    if (password !== confirma) {
      Alert.alert("Error de Registro", "Las contraseñas no coinciden.");
      return;
    }
    createUserWithEmailAndPassword(auth, correo, password)
      .then((userCredential) => {
        // Registro exitoso
        const user = userCredential.user;
        console.log("Usuario registrado:", user.email);
        Alert.alert(
          "Registro Exitoso",
          "El usuario se ha registrado correctamente.",
          [{ text: "OK", onPress: () => navigation.navigate("Login") }]
        );
      })

      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = getErrorMessage(errorCode);
        console.error(`Error Code: ${errorCode}, Message: ${error.message}`);
        Alert.alert("Error de Registro", errorMessage);
      });
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.container1}>
        <Text style={styles.textStart}>DATOS DE REGISTRO</Text>

        <TextInput
          style={styles.input}
          onChangeText={setNombre}
          value={nombre}
          placeholder="Ingrese Nombre"
        />

        <TextInput
          style={styles.input}
          onChangeText={setApellido}
          value={apellido}
          placeholder="Ingrese Apellido"
        />

        <TextInput
          style={styles.input}
          onChangeText={setUsuario}
          value={usuario}
          placeholder="Ingrese Usuario"
        />

        <TextInput
          style={styles.input}
          placeholder="Correo electrónico"
          onChangeText={(texto) => setCorreo(texto)}
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
        />

        <TextInput
          placeholder="Contraseña"
          style={styles.input}
          onChangeText={(texto) => setPassword(texto)}
          secureTextEntry
          autoCapitalize="none"
          autoCorrect={false}
        />

        <TextInput
          placeholder="Confirmar Contraseña"
          style={styles.input}
          onChangeText={(texto) => setConfirma(texto)}
          secureTextEntry
          autoCapitalize="none"
          autoCorrect={false}
        />
        <View style={styles.containerB}>
          <ButtonComponent title="Registrarse" onPress={registro} />
          <ButtonComponent
            title="INICIAR SESIÓN"
            onPress={() => navigation.navigate("Login")}
          />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: PRIMARY_COLOR,
  },
  container1: {
    backgroundColor: PRIMARY_COLOR,
    alignItems: "center",
    width: "100%",
    marginVertical: 20,
    // gap:10,
  },
  containerB: {
    marginTop: 10,
    gap: 20,
  },
  logo: {
    height: 100,
    width: 300,
    resizeMode: "contain",
  },
  textStart: {
    color: TEXT_COLOR,
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
  },
  texto: {
    color: TEXT_COLOR,
    fontWeight: "bold",
    textAlign: "center",
  },
  input: {
    backgroundColor: "white",
    color: "black",
    width: 200,
    height: 40,
    marginVertical: 10,
    borderWidth: 1,
    padding: 10,
  },
});
