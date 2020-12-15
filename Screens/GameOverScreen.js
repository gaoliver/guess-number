import React, { useState } from "react";
import { Button, ScrollView, StyleSheet, Text, View, Dimensions } from "react-native";

import Card from "../Components/Card";
import Colors from "../Constants/Colors";
import MyButton from "../Components/MyButton";

const GameOverScreen = (props) => {
  const [BodyPadding, setBodyPadding] = useState(Dimensions.get('window').width < 415 ? 0 : 20);

  const updateLayout = () => {
    setBodyPadding(Dimensions.get('window').width < 415 ? 0 : 20)
  };

  Dimensions.addEventListener("change", updateLayout);

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1, paddingVertical: BodyPadding }}>
      <View style={styles.Screen}>
        <Text style={styles.Title}>Fim de jogo!</Text>
        <Card style={styles.confirmCard}>
          <Text style={styles.confirmTxt}>Número de tentativas:</Text>
          <Text style={styles.confirmNumber}>{props.roundsNumber}</Text>
          <View
            style={{
              marginTop: 15,
              flexDirection: "row",
              justifyContent: "space-between",
              width: "80%",
            }}
          ></View>
        </Card>
        <MyButton style={{ marginTop: 30 }} onPress={props.onRestart}>
          jogar novamente
        </MyButton>
      </View>
    </ScrollView>
  );
};

export default GameOverScreen;

const styles = StyleSheet.create({
  Screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  Title: {
    fontSize: 60,
    fontFamily: "billy",
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
  RestartBtn: {
    width: 200,
    marginTop: 40,
  },
});
