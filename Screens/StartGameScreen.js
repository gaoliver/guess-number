import React, { Component, useState } from "react";
import { Alert, Button, StyleSheet, Text, View } from "react-native";

// Import Components
import Card from "../Components/Card";
import Colors from "../Constants/Colors";
import InputText from "../Constants/InputText";
import MyButton from '../Components/MyButton'

const StartGameScreen = (props) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [confirmed, setConfirmed] = useState(false);
  const [selectedNumber, setSelectedNumber] = useState(false);

  const numberInputHandler = (inputText) => {
    setEnteredValue(inputText.replace(/[^0-9]/g, ""));
  };

  const resetInputHandler = () => {
    setEnteredValue("");
    setConfirmed(false);
  };

  const confirmInputHandler = () => {
    if (enteredValue == 0) {
      Alert.alert(
        "Número inválido",
        "Por favor, insira apenas números de 1 a 99.",
        [
          {
            text: "Ok",
            style: "destructive",
            onPress: resetInputHandler,
          },
        ]
      );
      return;
    }
    setConfirmed(true);
    setSelectedNumber(parseInt(enteredValue));
    setEnteredValue("");
  };

  let confirmOutput;

  if (confirmed) {
    confirmOutput = (
      <Card style={styles.confirmCard}>
        <Text style={styles.confirmTxt}>Número escolhido:</Text>
        <Text style={styles.confirmNumber}>{selectedNumber}</Text>
        <View style={{ marginTop: 15 }}>
          {/* <Button color={Colors.secondary} title="Iniciar" onPress={() => props.onStartGame(selectedNumber)} /> */}
          <MyButton onPress={() => props.onStartGame(selectedNumber)}>iniciar</MyButton>
        </View>
      </Card>
    );
  }

  return (
    <View style={styles.Screen}>
      <Text style={styles.Title}>Iniciar Novo Jogo</Text>
      <Card style={styles.InputContainer}>
        <Text style={{ fontSize: 15 }}>Digite um número</Text>
        <InputText
          style={styles.InputText}
          blurOnSubmit
          autoCapitalize="none"
          autoCorrect={false}
          keyboardType={"number-pad"}
          maxLength={2}
          onChangeText={numberInputHandler}
          value={enteredValue}
        />
        <View style={styles.ButtonContainer}>
          <View style={{ width: 100 }}>
            <Button title="Zerar" onPress={resetInputHandler} color="grey" />
          </View>
          <View style={{ width: 100 }}>
            <Button
              title="Confirmar"
              onPress={confirmInputHandler}
              color={Colors.primary}
            />
          </View>
        </View>
      </Card>
      {confirmOutput}
    </View>
  );
};

export default StartGameScreen;

const styles = StyleSheet.create({
  Screen: {
    flex: 1,
    padding: 10,
    alignItems: "center",
    justifyContent: 'center'
  },
  Title: {
    fontSize: 30,
    fontFamily: 'grobold',
    marginVertical: 10,
    marginBottom: 50
  },
  InputContainer: {
    width: 400,
    maxWidth: "80%",
  },
  InputText: {
    minWidth: 60,
    textAlign: "center",
    marginVertical: 15,
  },
  ButtonContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    paddingHorizontal: 15,
  },
  confirmCard: {
    marginTop: 40,
  },
  confirmTxt: {
    fontSize: 16,
    marginTop: 10,
    color: 'black'
  },
  confirmNumber: {
    fontSize: 40,
    fontWeight: "bold",
    color: Colors.secondary,
    marginTop: 10,
    paddingVertical: 5,
    paddingHorizontal: 45,
    borderWidth: 1,
    borderColor: Colors.secondary,
    borderRadius: 10
  },
});
