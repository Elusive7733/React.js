import React from "react";
import { StyleSheet, View } from "react-native";
import { Button } from "react-native-paper";
import { Divider } from "react-native-elements";

export default function Home({ navigation }) {
  return (
    <View style={styles.ButtonContainer}>
      <Button
        icon={require("./assets/favicon.png")}
        mode="contained"
        onPress={() => navigation.navigate("Login")}
        style={[styles.LoginButtonStyle, styles.ButtonStyle]}
      >
        Login
      </Button>
      {/* <Divider orientation="horizontal" width={2} /> */}
      <Button
        icon={require("./assets/icon.png")}
        mode="contained"
        onPress={() => navigation.navigate("SignUp")}
        style={[styles.SignUpButtonStyle, styles.ButtonStyle]}
        labelStyle={styles.ButtonStyle}
      >
        Sign-up
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  ButtonContainer: {
    // padding: "5%",
    margin: "5%",
    marginTop: "20%",
  },

  ButtonStyle: {
    // height: 70,
    marginTop: "5%",
    justifyContent: "center",
  },

  LoginButtonStyle: {
    backgroundColor: "#0078FF",
  },
  SignUpButtonStyle: {
    backgroundColor: "#4AC0FB",
  },
});
