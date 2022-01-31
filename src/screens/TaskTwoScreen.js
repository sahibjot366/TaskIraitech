import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, Button } from "react-native";

const TaskTwoScreen = () => {
  const [index, setIndex] = useState("");
  const [ans, setAns] = useState("");

  function getAnswer(idx) {
    const n1 = 2;
    const n2 = 3;
    if (idx == 0) {
      return n1;
    }
    if (idx == 1) {
      return n2;
    }
  }
  return (
    <View style={styles.parentView}>
      <TextInput
        placeholder="Enter index.."
        value={index}
        onChangeText={(updatedIndex) => setIndex(updatedIndex)}
        style={styles.TextBox}
        keyboardType="numeric"
      />
      <Text style={styles.textStyle}>Answer is : {ans}</Text>
      <Button
        title="Find Number"
        onPress={() => {
          if (!index) {
            alert("Please enter a valid index");
          } else {
            const idx = parseInt(index);
            const answer = getAnswer(idx);
            setAns(answer);
          }
        }}
        style={styles.buttonStyle}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  parentView: {
    flex: 1,
    justifyContent: "center",
    marginHorizontal: 10,
  },
  TextBox: {
    borderWidth: 2,
    fontSize: 25,
  },
  buttonStyle: {
    alignSelf: "center",
  },
  textStyle: {
    fontSize: 20,
    marginVertical: 10,
  },
});

export default TaskTwoScreen;
