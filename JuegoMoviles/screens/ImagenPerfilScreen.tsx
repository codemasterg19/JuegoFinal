import { ActivityIndicator, Alert, Button, Image, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { BodyComponent } from '../components/BodyComponent'
import { styles } from '../theme/appTheme'
import { PRIMARY_COLOR, SECONDARY_COLOR, TEXT_COLOR } from '../commons/constantsColor'
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { auth, db, storage } from '../config/Config';
import * as ImagePicker from 'expo-image-picker';
import { onValue, ref as dbRef, update } from 'firebase/database';

export default function ImagenPerfilScreen({ navigation }: any) {// Puedes decidir no mostrar la contraseña

  const [image, setImage] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const user = auth.currentUser;
    if (user) {
      const userId = user.uid;
      const userRef = dbRef(db, `usuarios/${userId}`);
      onValue(userRef, (snapshot) => {
        const data = snapshot.val();
        if (data) {
          setImage(data.imageURL || ''); // Obtener la URL de la imagen de perfil si está almacenada
        }
      });
    }
  }, []);

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

  async function subir() {
    setLoading(true);
    try {
      const storageRef = ref(storage, `imagenPerfil/${auth.currentUser?.uid}/imagen`);
      const response = await fetch(image);
      const blob = await response.blob();
      await uploadBytes(storageRef, blob);
      const imageURL = await getDownloadURL(storageRef);
      console.log('Imagen guardada en:', imageURL);

      const userId = auth.currentUser?.uid;
      if (userId) {
        const userRef = dbRef(db, `usuarios/${userId}`);
        await update(userRef, { imageURL });
        console.log('URL de la imagen guardada en la base de datos');
      }

      Alert.alert('Éxito', 'Imagen de perfil subida correctamente',
        [{onPress: () => navigation.navigate("BottomTab")}]
      );

    } catch (error) {
      Alert.alert('Error', 'Error al subir la imagen');
      console.error('Error al subir la imagen:', error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <View style={stylesI.containerT}>
      <BodyComponent>
      <Text style={stylesI.title}>Cargar imagen de perfil</Text>
        <Button title="Cargar desde la galería" color={SECONDARY_COLOR} onPress={pickImageGallery} />
        <Button title="Tomar una foto" color={SECONDARY_COLOR} onPress={pickImagePhoto} />
        {image && <Image source={{ uri: image }} style={stylesI.containerP}/>}
        <Button title="Guardar" color={SECONDARY_COLOR} onPress={()=>subir()}/>
        {loading && <ActivityIndicator size="large" color={SECONDARY_COLOR} />}
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
});