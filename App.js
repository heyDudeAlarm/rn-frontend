import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { Button } from "react-native";
import { StyleSheet, Dimensions } from "react-native";
import Login from "./src/screens/Login/Login";
import Signup from "./src/screens/Login/Signup";
import TabNavigation from "./src/screens/Tab";
import HomeScreen from "./src/screens/ex/HomeScreen";
import RecordListScreen from "./src/screens/Record/RecordListScreen";
import Record from "./src/screens/Record/Record";
import RecordList from "./src/components/RecordList";
import AddAlarm from "./src/screens/AddAlarm";

const SCREEN_WIDTH = Dimensions.get("window").width; // 스크린가로사이즈를 가져옴
const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        options={{ headerShown: false }}
        // screenOptions={{ headerTitleAlign: "center" }}
      >
        <Stack.Screen
          name="TabNavigation"
          component={TabNavigation}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="Record" component={Record} />
        <Stack.Screen name="RecordListScreen" component={RecordListScreen} />
        <Stack.Screen name="RecordList" component={RecordList} />
        <Stack.Screen name="AddAlarm" component={AddAlarm} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
