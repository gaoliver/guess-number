import React, { useState } from "react";
import {
  StyleSheet,
  StatusBar,
  Alert,
  SafeAreaView,
  View,
  Text,
  Linking,
  Dimensions,
} from "react-native";
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";

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
    <SafeAreaView style={styles.Screen}>
      <StatusBar backgroundColor={Colors.primary} />
      <Header title="Adivinhe o Número" />
      {content}
      <View style={styles.footer}>
        <Text style={styles.footer}>by</Text>
        <Text style={styles.footerLink} onPress={() => Linking.openURL("https://instagram.com/eugaoliver")}>@eugaoliver</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  Screen: {
    flex: 1,
  },
  footer: {
    flexDirection: "row",
    height: 30,
    bottom: 0,
    alignSelf: 'center'
  },
  footerLink: {
    fontWeight: "bold",
    color: Colors.primary,
    marginLeft: 5
  }
});
