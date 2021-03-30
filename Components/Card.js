import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Card = (props) => {
  return (
    <View style={{ ...styles.Card, ...props.style }}>{props.children}</View>
  );
};

export default Card;

const styles = StyleSheet.create({
  Card: {
    alignItems: "center",
    padding: 10,
    borderRadius: 20,
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 6,
    shadowOpacity: 0.26,
    backgroundColor: "white",
    elevation: 10,
  },
});
