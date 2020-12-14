import React from "react";
import { Dimensions, StyleSheet, Text, View, useState } from "react-native";

import Colors from '../Constants/Colors'

const Header = (props) => {
  return (
    <View style={styles.Header}>
      <Text style={styles.HeaderTitle}> {props.title} </Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
    Header: {
        width: Dimensions.get('screen').width,
        backgroundColor: Colors.primary,
        paddingTop: 36,
        paddingVertical: 15,
        alignItems: 'center'
    },
    HeaderTitle: {
        fontSize: 25,
        fontWeight: 'bold',
        color: 'white'
    }
});
