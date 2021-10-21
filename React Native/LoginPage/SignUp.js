import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";

export default function SignUp() {
  const [FullName, setFullName] = useState("");
  const [PhoneNumber, setPhoneNumber] = useState("");
  const [Password, setPassword] = useState("");
  const [ConfirmPassword, setConfirmPassword] = useState("");

  return (
    <>
      <StatusBar style="auto" />
      <Text style={styles.LabelText}>Full Name</Text>
      <View style={styles.inputField}>
        <TextInput
          style={styles.TextInput}
          onChangeText={(FullName) => setFullName(FullName)}
        />
      </View>

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
          onChangeText={(ConfirmPassword) => setPassword(ConfirmPassword)}
        />
      </View>

      <Text style={styles.LabelText}>Confirm Password</Text>
      <View style={styles.inputField}>
        <TextInput
          style={styles.TextInput}
          secureTextEntry={true}
          onChangeText={(password) => setConfirmPassword(password)}
        />
      </View>

      <TouchableOpacity>
        <Text style={styles.forgot_button}>Forgot Password?</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.signupBtn}>
        <Text style={styles.btnText}>Sign-Up</Text>
      </TouchableOpacity>

      <Text style={styles.separator}>
        -------------------or-------------------
      </Text>

      <TouchableOpacity style={styles.loginBtn}>
        <Text style={styles.btnText}>Login</Text>
      </TouchableOpacity>
    </>
  );
}

const styles = StyleSheet.create({
  LabelText: {
    // backgroundColor: "red",
    // flex: 1,
    // alignItems: "left",
    marginBottom: 5,
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
    width: "40%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#00C5FF",
  },

  signupBtn: {
    width: "50%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#00FF36",
  },

  separator: {
    color: "#737373",
    margin: 5,
  },
});
