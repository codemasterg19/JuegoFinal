import React, { useState } from "react";
import { Alert, ScrollView, StyleSheet, Text, TextInput, View, TouchableOpacity, Button, Image, ActivityIndicator } from "react-native";
import { ButtonComponent } from "../components/ButtonComponent";
import { PRIMARY_COLOR, SECONDARY_COLOR, TEXT_COLOR } from "../commons/constantsColor";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { set, ref } from "firebase/database"; // Asegúrate de importar estas funciones de Firebase
import { getStorage, ref as storageRef, uploadBytes, getDownloadURL } from "firebase/storage"; 
// Importa la referencia a la base de datos Firebase
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { auth, db, storage } from "../config/Config";
import * as ImagePicker from 'expo-image-picker';

export default function RegisterScreen({ navigation }: any) {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [correo, setCorreo] = useState("");
  const [usuario, setUsuario] = useState("");
  const [password, setPassword] = useState("");
  const [confirma, setConfirma] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [image, setImage] = useState('');
  const [loading, setLoading] = useState(false);

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

  async function registrarUsuario() {
    setLoading(true);
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, correo, password);
      const user = userCredential.user;
      console.log('Usuario registrado:', user.uid);

      if (image) {
        await subirImagen(user.uid);
      } else {
        guardarRegistro(user.uid, '');
      }

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
      setImage('');
    } catch (error:any) {
      const errorCode = error.code;
      const errorMessage = getErrorMessage(errorCode);
      console.log(`Error Code: ${errorCode}, Message: ${error.message}`);
      Alert.alert("Error de Registro", errorMessage);
    } finally {
      setLoading(false);
    }
  }

  function guardarRegistro(userId: string, image: string) {
    // Utilizamos userId como parte de los datos a guardar en la base de datos
    set(ref(db, `usuarios/${userId}`), {
      nombre: nombre,
      apellido: apellido,
      usuario: usuario,
      correo: correo,
      image: image,
    })
      .then(() => {
        console.log('Datos guardados en la base de datos para el usuario:', userId);
      })
      .catch((error) => {
        console.error('Error al guardar en la base de datos:', error);
      });
  }
  
  async function subirImagen(userId:string) {
    const filename = `${userId}.jpg`;
    const storageReference = storageRef(storage, `imagenPerfil/${filename}`);
    const response = await fetch(image);
    const blob = await response.blob();

    uploadBytes(storageReference, blob).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((downloadURL) => {
        guardarRegistro(userId, downloadURL);
      });
    }).catch((error) => {
      console.error('Error al subir la imagen:', error);
    });
  }

  const pickImageGallery = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true, //traer la imagen directamente
      aspect: [1, 1], //seleccionar cualquier dimension
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  const pickImagePhoto = async () => {
    let result = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.formContainer}>
        <Text style={styles.title}>REGISTRARSE</Text>
        <Text style={styles.title}>Cargar imagen de perfil</Text>
        <View style={styles.perfilContainer}>
          <ButtonComponent title="Cargar desde la galería" onPress={pickImageGallery} />
          <ButtonComponent title="Tomar una foto" onPress={pickImagePhoto} />
          {image && <Image source={{ uri: image }} style={styles.containerP}/>}
          {loading && <ActivityIndicator size="large" color={SECONDARY_COLOR} />}
        </View>
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
  perfilContainer: {
    alignItems: "center",
    gap:20,
    paddingBottom:10,
  },
  containerP: {
    width:150,
    height:150,
    alignSelf:'center',
    resizeMode: 'cover',
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
