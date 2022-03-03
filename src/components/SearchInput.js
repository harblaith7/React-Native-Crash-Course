import React, { useState } from "react";
import { TextInput, View, StyleSheet } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

export default function SearchInput({ setTerm }) {
  const [input, setInput] = useState("");

  return (
    <View style={[styles.elevation, styles.inputContainer]}>
      <FontAwesome name="search" size={25} style={styles.iconStyles} />
      <TextInput
        style={styles.input}
        placeholder="Restaurants, food"
        value={input}
        onChangeText={(text) => setInput(text)}
        onEndEditing={() => {
          if (input) setTerm(input);
          setInput("");
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    marginTop: 5,
    marginHorizontal: 25,
    backgroundColor: "white",
    padding: 15,
    borderRadius: 40,
    flexDirection: "row",
  },
  elevation: {
    shadowOffset: { width: 5, height: 5 },
    shadowColor: "black",
    shadowOpacity: 0.1,
    elevation: 3,
  },
  input: {
    fontSize: 20,
    marginLeft: 10,
  },
});
