import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  Alert,
  SafeAreaView,
  Image,
  Button,
} from "react-native";

export default function App() {
  handlePress = () => console.log("text pressed");
  return (
    <SafeAreaView style={styles.container}>
      <Button title="Login" OnPress={handlePress} />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 300,
    height: 200,
  },
});
