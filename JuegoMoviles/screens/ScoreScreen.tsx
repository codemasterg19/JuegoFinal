import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { ref, onValue } from 'firebase/database';
import { db } from '../config/Config'; // Asegúrate de importar correctamente la configuración de Firebase

export default function ScoreScreen() {
  const [scores, setScores] = useState([]);

  useEffect(() => {
    const scoresRef = ref(db, 'scores');

    // Escuchar cambios en los datos de Firebase Realtime Database
    onValue(scoresRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        // Convertir el objeto de puntajes a un array de objetos para usar en FlatList
        const scoresArray: any = Object.keys(data).map((key) => ({
          id: key,
          user: data[key].user,
          score: data[key].score,
          time: data[key].time,
          nivel: data[key].nivel,
          intentos: data[key].intentos,
        }));
        setScores(scoresArray);
      }
    });

    // Devuelve una función de limpieza para limpiar el listener en unmount
    return () => {
      // Detener la escucha de cambios
    };
  }, []);

  const renderScoreItem = ({ item }: any) => (
    <View style={styles.scoreItem}>
      <Text>Usuario: {item.user}</Text>
      <Text>Puntaje: {item.score}</Text>
      <Text>Tiempo: {item.time}</Text>
      <Text>Nivel: {item.nivel}</Text>
      <Text>Intentos: {item.intentos}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lista de Puntajes</Text>
      <FlatList
        data={scores}
        renderItem={renderScoreItem}
         style={styles.list}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  list: {
    width: '100%',
  },
  scoreItem: {
    backgroundColor: '#f0f0f0',
    padding: 10,
    marginBottom: 10,
    borderRadius: 8,
    width: '100%',
  },
});
