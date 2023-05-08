import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { StyleSheet, Dimensions } from "react-native";
import HomeScreen from "./src/screens/HomeScreen";
import DetailScreen from "./src/screens/DetailScreen";
import Login from "./src/screens/Login";
import MorningCall from "./src/screens/MorningCall";
import Alarm from "./src/screens/Alarm";
import { Button } from "react-native";
import TabNavigation from "./src/screens/Tab";

const SCREEN_WIDTH = Dimensions.get("window").width; // 스크린가로사이즈를 가져옴
const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      {/* <Login /> */}
      <TabNavigation />
      {/* <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Detail" component={DetailScreen} />
      </Stack.Navigator> */}
    </NavigationContainer>
  );
}

export default App;
