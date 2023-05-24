import { View, Text, StyleSheet, Switch, TouchableOpacity } from "react-native";

const SendBtn = ({ onPress }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.text}>SEND</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 65,
    height: 35,
    padding: 10,
    backgroundColor: "#6D61FF",
    borderRadius: 30,
    alignItems: "center",
  },
  text: {
    color: "#fff",
    fontSize: 10,
    fontWeight: "bold",
  },
});
export default SendBtn;
