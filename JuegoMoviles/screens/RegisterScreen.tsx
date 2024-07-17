import React, { useState } from "react";
import { Alert, ScrollView, StyleSheet, Text, TextInput, View, TouchableOpacity } from "react-native";
import { ButtonComponent } from "../components/ButtonComponent";
import { PRIMARY_COLOR, TEXT_COLOR } from "../commons/constantsColor";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { set, ref } from "firebase/database"; // Asegúrate de importar estas funciones de Firebase
 // Importa la referencia a la base de datos Firebase
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { auth, db } from "../config/Config";


export default function RegisterScreen({ navigation }: any) {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [correo, setCorreo] = useState("");
  const [usuario, setUsuario] = useState("");
  const [password, setPassword] = useState("");
  const [confirma, setConfirma] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

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
    registrarUsuario();
  }

  function registrarUsuario() {
    createUserWithEmailAndPassword(auth, correo, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log('Usuario registrado:', user.uid);

        // Guardar los datos en la base de datos
        guardarRegistro(user.uid);

        // Navegar a la pantalla de login después del registro exitoso
        Alert.alert(
          "Registro Exitoso",
          "El usuario se ha registrado correctamente.",
          [{ text: "OK", onPress: () => navigation.navigate("Login") }]
        );

        // Reiniciar los estados de los campos de texto
        setNombre('');
        setApellido('');
        setCorreo('');
        setPassword('');
        setConfirma('');
        setUsuario('');
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = getErrorMessage(errorCode);
        console.log(`Error Code: ${errorCode}, Message: ${error.message}`);
        Alert.alert("Error de Registro", errorMessage);
      });
  }

  function guardarRegistro(userId: string) {
    // Utilizamos userId como parte de los datos a guardar en la base de datos
    set(ref(db, `usuarios/${userId}`), {
      nombre: nombre,
      apellido: apellido,
      usuario: usuario,
      correo: correo,
      password:password
    })
      .then(() => {
        console.log('Datos guardados en la base de datos para el usuario:', userId);
      })
      .catch((error) => {
        console.error('Error al guardar en la base de datos:', error);
      });
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.formContainer}>
        <Text style={styles.title}>REGISTRARSE</Text>

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

        <View style={styles.passwordContainer}>
          <TextInput
            placeholder="Contraseña"
            style={styles.passwordInput}
            onChangeText={(texto) => setPassword(texto)}
            secureTextEntry={!showPassword}
            autoCapitalize="none"
            autoCorrect={false}
          />
          <TouchableOpacity
            style={styles.passwordVisibilityToggle}
            onPress={() => setShowPassword(!showPassword)}
          >
            <FontAwesomeIcon
              icon={showPassword ? faEye : faEyeSlash} // Icono de ojo abierto o cerrado según el estado de showPassword
              size={20} // Tamaño del ícono
              color={TEXT_COLOR} // Color del ícono
            />
          </TouchableOpacity>
        </View>

        <View style={styles.passwordContainer}>
          <TextInput
            placeholder="Confirmar Contraseña"
            style={styles.passwordInput}
            onChangeText={(texto) => setConfirma(texto)}
            secureTextEntry={!showConfirmPassword}
            autoCapitalize="none"
            autoCorrect={false}
          />
          <TouchableOpacity
            style={styles.passwordVisibilityToggle}
            onPress={() => setShowConfirmPassword(!showConfirmPassword)}
          >
            <FontAwesomeIcon
              icon={showConfirmPassword ? faEye : faEyeSlash} // Icono de ojo abierto o cerrado según el estado de showConfirmPassword
              size={20} // Tamaño del ícono
              color={TEXT_COLOR} // Color del ícono
            />
          </TouchableOpacity>
        </View>

        <View style={styles.buttonContainer}>
          <ButtonComponent title="Registrarse" onPress={registro} />
          <ButtonComponent
            title="Regresar"
            onPress={() => navigation.navigate("Login")}
          />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: PRIMARY_COLOR,
    alignItems: "center",
    justifyContent: "center",
  },
  formContainer: {
    width: "80%",
    alignItems: "center",
  },
  title: {
    color: TEXT_COLOR,
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    backgroundColor: "white",
    color: "black",
    width: "100%",
    height: 40,
    marginVertical: 10,
    borderWidth: 1,
    padding: 10,
  },
  passwordContainer: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: 10,
  },
  passwordInput: {
    backgroundColor: "white",
    color: "black",
    width: "85%",
    height: 40,
    borderWidth: 1,
    padding: 10,
  },
  passwordVisibilityToggle: {
    width: "15%",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 20,
    gap: 20,
  },
});
