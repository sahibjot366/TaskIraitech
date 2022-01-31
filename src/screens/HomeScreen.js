import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.parentView}>
      <TouchableOpacity onPress={() => navigation.navigate("Task 1")}>
        <Text style={styles.textStyle}>Open TASK 1</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Task 2")}>
        <Text style={styles.textStyle}>Open TASK 2</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  parentView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  textStyle: {
    color: "blue",
    fontSize: 25,
    margin: 20,
  },
});
export default HomeScreen;
