// 임시파일
import React from "react";
import { Button, View } from "react-native";
import {
  NavigationAction,
  createStackNavigator,
} from "@react-navigation/stack";

const navigation = createStackNavigator();

function HomeScreen({ navigation }) {
  return (
    <View>
      <Button
        title="Go to detail screen"
        onPress={() => navigation.navigate("Detail")}
      />
    </View>
  );
}

export default HomeScreen;
