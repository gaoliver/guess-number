import React from "react";
import { StyleSheet, Text, View } from "react-native";

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
        width: '100%',
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
