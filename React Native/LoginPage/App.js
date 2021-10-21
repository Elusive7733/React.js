import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import Login from "./Login";
import SignUp from "./SignUp";

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Login /> */}
      <SignUp />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    margin: 0,
    padding: 0,
    alignItems: "center",
    justifyContent: "center",
  },
});
