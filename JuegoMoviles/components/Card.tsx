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
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#1e293b",
    margin: 10,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  cardDown: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#3b82f6",
    margin: 10,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  text: {
    color: "#fff",
    fontSize: 32,
  },
});

export default Card;