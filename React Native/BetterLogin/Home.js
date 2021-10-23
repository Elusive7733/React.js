import React from "react";
import { StyleSheet } from "react-native";
import { Button } from "react-native-paper";
import { Divider } from "react-native-elements";

export default function Home({ navigation }) {
  return (
    <>
      <Button
        icon={require("./assets/favicon.png")}
        mode="contained"
        onPress={() => navigation.navigate("Login")}
        style={styles.LoginButtonStyle}
      >
        Login
      </Button>
      <Divider orientation="horizontal" width={2} />
      <Button
        icon={require("./assets/icon.png")}
        mode="contained"
        onPress={() => navigation.navigate("SignUp")}
        style={styles.SignUpButtonStyle}
      >
        Sign-up
      </Button>
    </>
  );
}

const styles = StyleSheet.create({
  LoginButtonStyle: {
    marginTop: 150,
    margin: 10,
    height: 70,
    backgroundColor: "#0078FF",
    justifyContent: "center",
    // alignContent: "center",
    // alignItems: "center",
  },
  SignUpButtonStyle: {
    marginTop: 10,
    margin: 10,
    height: 70,
    backgroundColor: "#4AC0FB",
    justifyContent: "center",
    // alignContent: "center",
    // alignItems: "center",
  },
});
