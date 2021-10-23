import React from "react";
import { StyleSheet, ScrollView, View } from "react-native";
import { TextInput, Card, Title, Button } from "react-native-paper";

export default function Login() {
  const [PhoneNumber, setPhoneNumber] = React.useState("");
  const [Password, setPassword] = React.useState("");
  const [isPasswordHidden, setPasswordHidden] = React.useState(true);

  return (
    <View style={styles.container}>
      <ScrollView>
        <Card style={styles.boxShadow}>
          <Card.Content>
            <View style={{ flexDirection: "row", marginBottom: 10 }}>
              <Title style={styles.TitleStyle}>Enter Info</Title>
              <Button
                icon={require("./assets/favicon.png")}
                mode="contained"
                onPress={() => console.log("Loggin Pressed")}
                style={styles.LoginButtonStyle}
              >
                Login
              </Button>
            </View>

            <TextInput
              label="Phone Number"
              value={PhoneNumber}
              onChangeText={(PhoneNumber) => setPhoneNumber(PhoneNumber)}
              mode="outlined"
              style={{ marginBottom: 10 }}
              theme={{ colors: { primary: "#009EFF" } }}
              keyboardType={"numeric"}
            />
            <TextInput
              label="Password"
              value={Password}
              onChangeText={(Password) => setPassword(Password)}
              mode="outlined"
              style={{ marginBottom: 10 }}
              theme={{ colors: { primary: "#009EFF" } }}
              secureTextEntry={isPasswordHidden}
              right={
                <TextInput.Icon
                  name="eye"
                  onPress={() => setPasswordHidden(!isPasswordHidden)}
                />
              }
            />
          </Card.Content>
        </Card>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  boxShadow: {
    borderColor: "grey",
    borderWidth: 2,
    width: 400,
  },
  LoginButtonStyle: {
    flex: 1,
    backgroundColor: "#0078FF",
    justifyContent: "flex-end",
  },
  TitleStyle: {
    justifyContent: "flex-start",
    flex: 1,
    fontWeight: "bold",
    fontSize: 30,
  },
});
