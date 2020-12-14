import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

import Colors from '../Constants/Colors'

const MyButton = (props) => {
  return (
    <TouchableOpacity style={{...props.style}} onPress={props.onPress}>
      <View style={styles.button}>
        <Text style={styles.buttonText}>{props.children}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default MyButton;

const styles = StyleSheet.create({
    button: {
        backgroundColor: Colors.secondary,
        paddingVertical: 15,
        paddingHorizontal: 30,
        minWidth: 100,
        maxWidth: 400,
        alignItems: 'center',
        alignSelf: 'center',
        borderRadius: 10
    },
    buttonText: {
        color: 'white',
        fontFamily: 'grobold',
        fontSize: 20,
        textTransform: 'capitalize'
    }
});
