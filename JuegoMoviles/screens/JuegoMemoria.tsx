import * as React from "react";
import { StatusBar } from "expo-status-bar";
import { Dimensions, SafeAreaView, StyleSheet, Text, View, Modal, TouchableOpacity, ScrollView, Animated } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { FontAwesome } from '@expo/vector-icons'; // Importar FontAwesome para el trofeo
import Card from "../components/Card";

// Obtener las dimensiones de la pantalla
const { width } = Dimensions.get('window');

// Definir el margen entre las cartas
const cardMargin = 10;

const allIcons = [
  "🌪️", "🌎", "👻", "🎃", "👾", "🤖",
  "🦷", "🍑", "🥹", "🗣️", "🦞", "🐈",
  "🥶", "🥵", "🍕", "🍔", "🍟", "🌭"
];

function shuffle(array: string[]): string[] {
  for (let i = array.length - 1; i > 0; i--) {
    const randomIndex = Math.floor(Math.random() * (i + 1));
    [array[i], array[randomIndex]] = [array[randomIndex], array[i]];
  }
  return array;
}

const JuegoMemoria: React.FC = () => {
  const [cards, setCards] = React.useState<string[]>([]);
  const [board, setBoard] = React.useState<string[]>([]);
  const [selectedCards, setSelectedCards] = React.useState<number[]>([]);
  const [matchedCards, setMatchedCards] = React.useState<number[]>([]);
  const [score, setScore] = React.useState<number>(0);
  const [level, setLevel] = React.useState<number>(1);
  const [startTime, setStartTime] = React.useState<number | null>(null);
  const [elapsedTime, setElapsedTime] = React.useState<number>(0);
  const [modalVisible, setModalVisible] = React.useState<boolean>(false);
  const [remainingAttempts, setRemainingAttempts] = React.useState<number>(15 - (level - 1) * 1); // Número de intentos por nivel
  const [isFinalWin, setIsFinalWin] = React.useState<boolean>(false); // Para detectar si es la última victoria
  const [averageScore, setAverageScore] = React.useState<number>(0); // Promedio final de los scores
  const [totalGameTime, setTotalGameTime] = React.useState<number>(0); // Tiempo total de juego acumulado
  const spinValue = new Animated.Value(0); // Para la animación de la carta girando

  React.useEffect(() => {
    startNewGame(level);
  }, [level]);

  React.useEffect(() => {
    const interval = setInterval(() => {
      if (startTime) {
        const currentTime = Date.now();
        setElapsedTime((currentTime - startTime) / 1000);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [startTime]);

  React.useEffect(() => {
    if (selectedCards.length < 2) return;

    if (board[selectedCards[0]] === board[selectedCards[1]]) {
      setMatchedCards([...matchedCards, ...selectedCards]);
      setSelectedCards([]);
      setScore(score + 1); // Incrementar el score al acertar
    } else {
      const timeoutId = setTimeout(() => {
        setSelectedCards([]);
        setRemainingAttempts(remainingAttempts - 1); // Reducir los intentos restantes
      }, 1000);
      return () => clearTimeout(timeoutId);
    }
  }, [selectedCards, board, matchedCards, score, remainingAttempts]);

  React.useEffect(() => {
    if (remainingAttempts <= 0) {
      setModalVisible(true);
    }
  }, [remainingAttempts]);

  React.useEffect(() => {
    if (matchedCards.length === board.length && startTime) {
      const endTime = Date.now();
      const gameDuration = (endTime - startTime) / 1000;
      setElapsedTime(gameDuration);
      setTotalGameTime(totalGameTime + gameDuration);
      setIsFinalWin(level === 4); // Verificar si es la última victoria
      setModalVisible(true);
      saveGameResult(level, score, gameDuration);
      if (level === 4) {
        startSpin(); // Iniciar la animación de giro si es el último nivel
        calculateAverageScore();
      }
    }
  }, [matchedCards, board.length, startTime, level]);

  const saveGameResult = async (level: number, score: number, time: number) => {
    try {
      const results = await AsyncStorage.getItem('gameResults');
      const parsedResults = results ? JSON.parse(results) : [];
      const newResult = { level, score, time };
      await AsyncStorage.setItem('gameResults', JSON.stringify([...parsedResults, newResult]));
    } catch (error) {
      console.error("Error saving game result", error);
    }
  };

  const calculateAverageScore = async () => {
    try {
      const results = await AsyncStorage.getItem('gameResults');
      const parsedResults = results ? JSON.parse(results) : [];
      const totalScoreSum = parsedResults.reduce((acc: number, result: any) => acc + result.score, 0);
      const numLevelsPlayed = parsedResults.length;
      const average = totalScoreSum / numLevelsPlayed;
      setAverageScore(average);
    } catch (error) {
      console.error("Error calculating average score", error);
    }
  };

  const startNewGame = (level: number) => {
    const newIcons = allIcons.slice(0, 6 + level * 2); // Aumentar los iconos con cada nivel
    setCards(newIcons);
    setBoard(shuffle([...newIcons, ...newIcons]));
    setSelectedCards([]);
    setMatchedCards([]);
    setScore(0);
    setRemainingAttempts(15 - (level - 1) * 1); // Reiniciar los intentos disponibles según el nivel
    setStartTime(Date.now());
    setModalVisible(false);
    setIsFinalWin(false);
  };

  const handleTapCard = (index: number): void => {
    if (selectedCards.length >= 2 || selectedCards.includes(index) || remainingAttempts <= 0) return;
    setSelectedCards([...selectedCards, index]);
  };

  const handleNextLevel = () => {
    setLevel(level + 1);
    startNewGame(level + 1);
  };

  const handleEndGame = () => {
    startNewGame(1); // Reiniciar el juego al nivel 1
  };

  const calculateCardSize = () => {
    const numColumns = Math.min(4 + level, 6); // Aumentar las columnas con cada nivel, hasta un máximo de 6
    return (width - cardMargin * (numColumns + 1)) / numColumns;
  };

  const cardSize = calculateCardSize();

  const handleModalClose = () => {
    setModalVisible(false);
    if (remainingAttempts <= 0) {
      setLevel(1);
      startNewGame(1);
    }
  };

  const startSpin = () => {
    spinValue.setValue(0);
    Animated.timing(spinValue, {
      toValue: 1,
      duration: 2000, // 2 segundos para 2 giros completos
      useNativeDriver: true,
    }).start();
  };

  const spin = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '720deg'], // 2 giros completos
  });

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.gameTitle}> Juego de Memoria🎮 </Text>
        <View style={styles.scoreLevelContainer}>
          <Text style={styles.scoreText}>Score: {score} 🃏</Text>
          <Text style={styles.levelText}>Nivel: {level}</Text>
        </View>
        <Text style={styles.attemptsText}>Intentos restantes: {remainingAttempts}</Text>
      </View>
      <ScrollView contentContainerStyle={styles.board}>
        {board.map((card, index) => {
          const isTurnedOver =
            selectedCards.includes(index) || matchedCards.includes(index);
          return (
            <Card
              key={index}
              isTurnedOver={isTurnedOver}
              onPress={() => handleTapCard(index)}
              size={cardSize}
            >
              {card}
            </Card>
          );
        })}
      </ScrollView>
      <TouchableOpacity style={styles.restartButton} onPress={handleEndGame}>
        <Text style={styles.buttonText}>Reiniciar Juego</Text>
      </TouchableOpacity>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={handleModalClose}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalView}>
            {remainingAttempts <= 0 ? (
              <>
                <Text style={styles.modalText}>¡Perdiste! 😔</Text>
                <Text style={styles.modalText}>Puntaje: {score}</Text>
                <TouchableOpacity style={styles.button} onPress={handleEndGame}>
                  <Text style={styles.buttonText}>Reintentar</Text>
                </TouchableOpacity>
              </>
            ) : isFinalWin ? (
              <>
                <Animated.View style={{ transform: [{ rotate: spin }] }}>
                  <FontAwesome name="trophy" size={64} color="gold" />
                </Animated.View>
                <Text style={styles.modalText}>¡Ganaste el juego! 🏆</Text>
                <Text style={styles.modalText}>Tiempo total: {totalGameTime.toFixed(2)} segundos</Text>
                <Text style={styles.modalText}>Promedio de score: {averageScore.toFixed(2)}</Text>
              </>
            ) : (
              <>
                <Text style={styles.modalText}>¡Ganaste! 🎉</Text>
                <TouchableOpacity style={styles.button} onPress={handleNextLevel}>
                  <Text style={styles.buttonText}>Siguiente Nivel</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={handleEndGame}>
                  <Text style={styles.buttonText}>Finalizar</Text>
                </TouchableOpacity>
              </>
            )}
          </View>
        </View>
      </Modal>
      <StatusBar style="light" />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0f172a',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 30
  },
  header: {
    width: '100%',
    alignItems: 'center',
    marginBottom: 20,
  },
  gameTitle: {
    fontSize: 36,
    fontWeight: "bold",
    color: "#fff",
    marginTop: 20,
    marginBottom: 10,
    textAlign: 'center',
    textShadowColor: '#333',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  scoreLevelContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
  scoreText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
    textAlign: 'center',
    textShadowColor: '#333',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  levelText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
    textAlign: 'center',
    textShadowColor: '#333',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  attemptsText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
    textAlign: 'center',
    textShadowColor: '#333',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
    marginBottom: 10,
  },
  board: {
    flexDirection: "row",
    justifyContent: "center",
    flexWrap: "wrap",
    marginBottom: 20,
  },
  restartButton: {
    backgroundColor: '#3aafa9',
    padding: 15,
    borderRadius: 10,
    margin: 20,
    alignItems: 'center',
    width: '80%',
    alignSelf: 'center',
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalView: {
    backgroundColor: '#1e293b',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  modalText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
    textAlign: 'center',
    marginBottom: 20,
    textShadowColor: '#333',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  button: {
    backgroundColor: '#3aafa9',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
    width: 200,
    alignItems: 'center',
  },
});

export default JuegoMemoria;