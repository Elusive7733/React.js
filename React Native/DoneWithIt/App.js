import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  console.log("Testing...");
  return (
    <View style={styles.container}>
      <Text>Hello Friend bruh!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "dogerblue",
    alignItems: "center",
    justifyContent: "center",
  },
});
