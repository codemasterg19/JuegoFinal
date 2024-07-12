import * as React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";




interface CardProps {
  onPress: () => void;
  isTurnedOver: boolean;
  children: React.ReactNode;
  size: number;
}

const Card: React.FC<CardProps> = ({ onPress, isTurnedOver, children, size }) => {
  return (
    <Pressable
    style={[isTurnedOver ? styles.cardUp : styles.cardDown, { width: size, height: size }]}
      onPress={onPress}
    >
      {isTurnedOver ? (
        <Text style={styles.text}>{children}</Text>
      ) : (
        <Text style={styles.text}>?</Text>
      )}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  cardUp: {
    width: 100,
    height: 100,
    margin: 10,
    borderColor: "#334155",
    borderWidth: 10,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#1e293b",
  },
  cardDown: {
    width: 100,
    height: 100,
    margin: 10,
    borderWidth: 10,
    borderColor: "#334155",
    borderRadius: 25,
    backgroundColor: "#1e293b",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 46,
    color: "#334155",
  },
});

export default Card;