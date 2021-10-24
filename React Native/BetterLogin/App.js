import React from "react";
import { Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SignUp from "./SignUp";
import Login from "./Login";
import Home from "./Home";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <Image
        source={require("./assets/dribbble_2.gif")}
        style={{ width: "100%", height: "35%" }}
      />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={Home}
            options={{ title: "Welcome To Parkour" }}
          />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="SignUp" component={SignUp} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
