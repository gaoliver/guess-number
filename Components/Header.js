import React, { useState } from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";

import Colors from "../Constants/Colors";

const Header = (props) => {
  const [HeaderPosition, setHeaderPosition] = useState(Dimensions.get('window').width < 415 ? 'absolute' : 'relative')

  const updateLayout = () => {
    setHeaderPosition(Dimensions.get('window').width < 415 ? 'absolute' : 'relative')
  }

  Dimensions.addEventListener("change", updateLayout);

  return (
      <View style={{...styles.Header, position: HeaderPosition}}>
        <Text style={styles.HeaderTitle}> {props.title} </Text>
      </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  Header: {
    width: "100%",
    backgroundColor: Colors.primary,
    // paddingTop: 24 + 15,
    // paddingBottom: 15,
    paddingVertical: 15,
    alignItems: "center",
  },
  HeaderTitle: {
    fontSize: 25,
    fontWeight: "bold",
    color: "white",
  },
});
