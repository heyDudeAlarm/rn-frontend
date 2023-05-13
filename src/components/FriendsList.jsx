import React from "react";
import { useState } from "react";
import { View, Text, StyleSheet, Switch } from "react-native";
import ToggleSwitch from "rn-toggle-switch";

const CustomRow = ({ time, label, activate }) => {
  // switch toggle state
  const [isEnabled, setIsEnabled] = useState({ activate });
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  return (
    <View style={styles.container}>
      <View style={styles.container_text}>
        <Text style={styles.title}>{time}</Text>
        <Text style={styles.label}>{label}</Text>
      </View>

      <Switch
        trackColor={{ false: "#AFAFAF", true: "#6d61ff" }}
        thumbColor={isEnabled ? "#fff" : "#fff"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 325,
    flex: 1,
    height: 85,
    flexDirection: "row",
    padding: 10,
    marginLeft: 16,
    marginRight: 16,
    marginTop: 8,
    marginBottom: 8,
    borderRadius: 5,
    backgroundColor: "#FFF",
    elevation: 4,
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#000",
  },
  label: { fontSize: 10, fontWeight: "bold", color: "#999999" },
  container_text: {
    flex: 1,
    flexDirection: "column",
    marginLeft: 12,
    justifyContent: "center",
  },
});

export default CustomRow;
