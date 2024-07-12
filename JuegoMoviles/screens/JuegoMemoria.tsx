import * as React from "react";
import { StatusBar } from "expo-status-bar";
import { Dimensions, SafeAreaView, StyleSheet, Text, View } from "react-native";
import Card from "../components/Card";


// Obtener las dimensiones de la pantalla
const { width } = Dimensions.get('window');

// Definir el número de columnas y calcular el tamaño de las cartas
const numColumns = 4;
const cardMargin = 10; // Margen entre las cartas
const cardSize = (width - cardMargin * (numColumns + 1)) / numColumns;

const cards: string[] = [
  // "🥹",
  // "🗣️",
  // "🦷",
  // "🍑",
  "🌪️",
  "🌎",
  "👻",
  "🎃",
  "👾",
  "🤖",
  //"🦞",
  //"🐈",

 // "🥶",
 // "🥵",
];


function shuffle(array: string[]): string[] {
  for (let i = array.length - 1; i > 0; i--) {
    const randomIndex = Math.floor(Math.random() * (i + 1));

    
    [array[i], array[randomIndex]] = [array[randomIndex], array[i]];
  }
  return array;
}

const App: React.FC = () => {
  const [board, setBoard] = React.useState<string[]>(() => shuffle([...cards, ...cards]));
  const [selectedCards, setSelectedCards] = React.useState<number[]>([]);
  const [matchedCards, setMatchedCards] = React.useState<number[]>([]);
  const [score, setScore] = React.useState<number>(0);

  React.useEffect(() => {
    if (selectedCards.length < 2) return;

    if (board[selectedCards[0]] === board[selectedCards[1]]) {
      setMatchedCards([...matchedCards, ...selectedCards]);
      setSelectedCards([]);
    } else {
      const timeoutId = setTimeout(() => setSelectedCards([]), 1000);
      return () => clearTimeout(timeoutId);
    }
  }, [selectedCards, board, matchedCards]);

  const handleTapCard = (index: number): void => {
    if (selectedCards.length >= 2 || selectedCards.includes(index)) return;
    setSelectedCards([...selectedCards, index]);
    setScore(score + 1);
  };

  const didPlayerWin = (): boolean => matchedCards.length === board.length;

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>
        {didPlayerWin() ? "Ganaste!! 🎉" : "Memoria"}
      </Text>
      <Text style={styles.title}>Score: {score}</Text>
      <View style={styles.board}>
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
              {card}s
            </Card>
          );
        })}
      </View>
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
  },
  board: {
    flexDirection: "row",
    justifyContent: "center",
    flexWrap: "wrap",
  },
  title: {
    fontSize: 32,
    fontWeight: "900",
    color: "snow",
    marginVertical: 15,
  },
});

export default App;
