import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Header({ upperText, lowerText }) {
  return (
    <View syle={styles.headerContainer}>
      <Text style={styles.header1}>{upperText}</Text>
      <Text style={styles.header2}>{lowerText}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header1: {
    fontSize: 35,
    marginTop: 60,
    marginHorizontal: 25,
  },
  header2: {
    fontSize: 40,
    marginHorizontal: 25,
    fontWeight: "bold",
  },
});
