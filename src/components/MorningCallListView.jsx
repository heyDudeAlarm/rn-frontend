import React from "react";
import { View, FlatList, StyleSheet, Text } from "react-native";
import CustomRow from "./MorningCallList";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    padding: 10,
    marginVertical: 10,
    marginHorizontal: 16,
  },
});

const MorningCallListView = ({ itemList }) => (
  <View style={styles.container}>
    <FlatList
      showsVerticalScrollIndicator={false}
      data={itemList}
      renderItem={({ item }) => (
        <CustomRow
          time={item.time}
          label={item.label}
          activate={item.activate}
        />
      )}
    />
  </View>
);

export default MorningCallListView;
