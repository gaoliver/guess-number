import React, { useState, useRef, useEffect } from "react";
import { StyleSheet, Text, View, Button, Alert } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

import Card from "../Components/Card";
import Colors from "../Constants/Colors";

const generateRandomBetween = (min, max, exclude) => {
  min = Math.floor(min);
  max = Math.ceil(max);
  const rndNum = Math.floor(Math.random() * (max - min)) + min;

  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
};

const GameScreen = (props) => {
  const [currentGuess, setCurrentGuess] = useState(
    generateRandomBetween(1, 100, props.userChoice)
  );
  const [rounds, setRounds] = useState(0);
  const currentLow = useRef(1);
  const currentHigh = useRef(100);

  const { userChoice, onGameOver } = props;

  useEffect(() => {
    if (currentGuess === userChoice) {
      onGameOver(rounds);
    }
  }, [currentGuess, userChoice, onGameOver]);

  const guessNextHandler = (direction) => {
    if (
      (direction === "menor" && currentGuess < props.userChoice) ||
      (direction === "maior" && currentGuess > props.userChoice)
    ) {
      Alert.alert(
        "Atenção",
        "Tem certeza da sua dica? Não vale mentir, hein...",
        [
          {
            text: "Foi mal!",
            style: "cancel",
          },
        ]
      );
      return;
    } else if (direction === "menor") {
      currentHigh.current = currentGuess;
    } else {
      currentLow.current = currentGuess;
    }
    const nextNumber = generateRandomBetween(
      currentLow.current,
      currentHigh.current,
      currentGuess
    );
    setCurrentGuess(nextNumber);
    setRounds((curRounds) => curRounds + 1);
  };

  return (
    <View style={styles.Screen}>
      <Card style={styles.confirmCard}>
        <Text style={styles.confirmTxt}>Adivinhação da CPU:</Text>
        <Text style={styles.confirmNumber}>{currentGuess}</Text>
        <View
          style={{
            marginTop: 15,
            flexDirection: "row",
            justifyContent: "space-between",
            width: "80%",
          }}
        >
          <MaterialIcons
            name="remove-circle"
            size={50}
            color={Colors.primary}
            onPress={guessNextHandler.bind(this, "menor")}
          />
          <MaterialIcons
            name="add-circle"
            size={50}
            color={Colors.primary}
            onPress={guessNextHandler.bind(this, "maior")}
          />
        </View>
      </Card>
    </View>
  );
};

export default GameScreen;

const styles = StyleSheet.create({
  Screen: {
    flex: 1,
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  confirmCard: {
    marginTop: 40,
    width: 200,
  },
  confirmTxt: {
    fontSize: 16,
    marginTop: 10,
    color: "black",
  },
  confirmNumber: {
    fontSize: 40,
    fontWeight: "bold",
    color: Colors.primary,
    marginTop: 10,
    paddingVertical: 5,
    paddingHorizontal: 45,
    borderWidth: 1,
    borderColor: Colors.primary,
    borderRadius: 10,
  },
});
