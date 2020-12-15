import React, { useState } from "react";
import {
  StyleSheet,
  StatusBar,
  View,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
  SafeAreaView,
} from "react-native";
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";
// import { StatusBar } from "expo-status-bar";

// Import Components
import Colors from "./Constants/Colors";
import Header from "./Components/Header";
import StartGameScreen from "./Screens/StartGameScreen";
import GameScreen from "./Screens/GameScreen";
import GameOverScreen from "./Screens/GameOverScreen";

const fetchFonts = () => {
  return Font.loadAsync({
    grobold: require("./assets/Fonts/grobold.ttf"),
    billy: require("./assets/Fonts/billy-the-gang.ttf"),
  });
};

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [guessRounds, setGuessRounds] = useState(0);
  const [dataLoaded, setDataLoaded] = useState(false);

  if (!dataLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setDataLoaded(true)}
        onError={(Err) => Alert.alert(Err)}
      />
    );
  }

  const configureNewGameHandler = () => {
    setGuessRounds(0);
    setUserNumber(null);
  };

  const startGameHandler = (selectedNumber) => {
    setUserNumber(selectedNumber);
    setGuessRounds(0);
  };

  const gameOverHandler = (numOfRounds) => {
    setGuessRounds(numOfRounds);
  };

  let content = <StartGameScreen onStartGame={startGameHandler} />;

  if (userNumber && guessRounds <= 0) {
    content = (
      <GameScreen userChoice={userNumber} onGameOver={gameOverHandler} />
    );
  } else if (guessRounds > 0) {
    content = (
      <GameOverScreen
        roundsNumber={guessRounds}
        onRestart={configureNewGameHandler}
      />
    );
  }

  return (
    <>
      <StatusBar translucent={true} backgroundColor='transparent' />
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <SafeAreaView style={styles.Screen}>
          <Header title="Adivinhe o Número" />
          {content}
        </SafeAreaView>
      </TouchableWithoutFeedback>
    </>
  );
}

const styles = StyleSheet.create({
  Screen: {
    flex: 1,
  },
});
