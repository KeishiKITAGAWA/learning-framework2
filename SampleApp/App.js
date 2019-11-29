import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={[styles.text, styles.text1]}>おはよう！！</Text>
      <Text style={[styles.text, styles.text2]}>こんにちは！</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    fontWeight: "bold",
    padding: 10,
    backgroundColor: "#999"
  },
  text1: {
    color: "#f0f"
  },
  text2: {
    color: "#0f0"
  },
  container: {
    flex: 1,
    backgroundColor: "#aaa",
    alignItems: "center",
    justifyContent: "center"
  }
});
