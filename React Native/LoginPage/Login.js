import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";

export default function Login(props) {
  const Separator = () => <View style={styles.separator} />;
  const [PhoneNumber, setPhoneNumber] = useState("");
  const [Password, setPassword] = useState("");

  return (
    <>
      <StatusBar style="auto" />
      <Text style={styles.LabelText}>Phone Number</Text>
      <View style={styles.inputField}>
        <TextInput
          style={styles.TextInput}
          onChangeText={(PhoneNumber) => setPhoneNumber(PhoneNumber)}
        />
      </View>

      <Text style={styles.LabelText}>Password</Text>
      <View style={styles.inputField}>
        <TextInput
          style={styles.TextInput}
          secureTextEntry={true}
          onChangeText={(Password) => setPassword(Password)}
        />
      </View>

      <TouchableOpacity>
        <Text style={styles.forgot_button}>Forgot Password?</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.loginBtn}>
        <Text style={styles.btnText}>Login</Text>
      </TouchableOpacity>

      <Text style={styles.separator}>
        -------------------or-------------------
      </Text>

      <TouchableOpacity style={styles.signupBtn}>
        <Text style={styles.btnText}>Sign-Up</Text>
      </TouchableOpacity>
    </>
  );
}

const styles = StyleSheet.create({
  LoginContainer: {},

  LabelText: {
    margin: 5,
    justifyContent: "flex-start",
    alignItems: "flex-start",
    // backgroundColor: "red",
  },
  inputField: {
    backgroundColor: "lightgray",
    borderRadius: 30,
    width: "80%",
    marginBottom: 15,
    paddingLeft: 20,
    // alignItems: "center",
  },

  TextInput: {
    paddingVertical: 10,
  },

  forgot_button: {
    marginBottom: 25,
  },

  btnText: {
    fontSize: 18,
    fontWeight: "bold",
  },

  loginBtn: {
    width: "50%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#00FF36",
  },

  signupBtn: {
    width: "40%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#00C5FF",
  },

  separator: {
    color: "#737373",
    margin: 5,
  },
});
