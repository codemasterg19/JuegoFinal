import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, Dimensions } from 'react-native';
import { ref, onValue } from 'firebase/database';
import { db } from '../config/Config'; // Asegúrate de importar correctamente la configuración de Firebase

const windowWidth = Dimensions.get('window').width;

export default function ScoreScreen() {
  const [scores, setScores] = useState([]);

  useEffect(() => {
    const scoresRef = ref(db, 'scores');
    const usersRef  = ref(db, 'usuarios');

    // Escuchar cambios en los datos de Firebase Realtime Database
    onValue(scoresRef, (snapshot) => {
      const scoresData = snapshot.val();
      if (scoresData) {
        // Obtener los nombres de usuario de la base de datos de usuarios
        onValue(usersRef, (usersSnapshot) => {
          const usersData = usersSnapshot.val();
          const scoresArray : any= Object.keys(scoresData).map((key) => {
            // Encuentra el nombre de usuario correspondiente al ID
            const userName = usersData[scoresData[key].user]?.nombre || 'Desconocido';
            return {
              id: key,
              user: userName, // Usar el nombre en lugar del ID
              score: scoresData[key].score,
              time: scoresData[key].time,
              nivel: scoresData[key].nivel,
              intentos: scoresData[key].intentos,
            };
          });
          // Ordenar puntajes de mayor a menor
          scoresArray.sort((a: any, b: any) => b.time - a.time);
          setScores(scoresArray);
        });
      }
    });
  
    // Devuelve una función de limpieza para limpiar el listener en unmount
    return () => {
      // Detener la escucha de cambios
    };
  }, []);

  const renderScoreItem = ({ item, index }: { item: any; index: number }) => (
    <View style={[styles.scoreItem, index % 2 === 1 ? styles.darkRow : styles.lightRow]}>
      <Text style={styles.rank}>{index + 1}</Text>
      <Text style={styles.userName}>{item.user}</Text>
      <View style={styles.detailsContainer}>
        <Text style={styles.score}>Puntaje: {item.score}</Text>
        <Text style={styles.time}>Tiempo: {item.time}</Text>
        <Text style={styles.nivel}>Nivel: {item.nivel}</Text>
        <Text style={styles.intentos}>Intentos: {item.intentos}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tabla de Puntajes</Text>
      <FlatList
        data={scores}
        renderItem={renderScoreItem}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.list}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a1a1a',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 50,
    paddingTop:50
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 20,
  },
  list: {
    width: windowWidth,
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  scoreItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 8,
    marginBottom: 10,
    width: windowWidth - 40,
    maxWidth: 600,
  },
  darkRow: {
    backgroundColor: '#253746', // Azul oscuro
  },
  lightRow: {
    backgroundColor: '#3E5C76', // Azul medio
  },
  rank: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    width: 40,
    textAlign: 'center',
  },
  userName: {
    flex: 1,
    fontSize: 18,
    color: '#fff',
    marginLeft: 10,
  },
  detailsContainer: {
    flex: 1,
    marginLeft: 10,
  },
  score: {
    fontSize: 16,
    color: '#C3D4DF', // Azul claro
    marginBottom: 4,
  },
  time: {
    fontSize: 16,
    color: '#C3D4DF', // Azul claro
    marginBottom: 4,
  },
  nivel: {
    fontSize: 16,
    color: '#C3D4DF', // Azul claro
    marginBottom: 4,
  },
  intentos: {
    fontSize: 16,
    color: '#C3D4DF', // Azul claro
    marginBottom: 4,
  },
});
