import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  TextInput,
  Button,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const SectionCard = ({ item, addSubSection }) => {
  const [showTextBox, setState] = useState(0); //This variable manages the visibility of TextBox
  const [title, setTitle] = useState(""); //Title of Sub Section
  return (
    <View style={styles.parentView}>
      <View style={styles.SectionHeading}>
        <Text style={styles.SectionTitle}>{item.heading}</Text>
        <TouchableOpacity onPress={() => setState(1)}>
          <Ionicons name="add-circle-outline" size={30} color="black" />
        </TouchableOpacity>
      </View>
      {showTextBox == 1 ? (
        <View style={styles.TextBox}>
          <TextInput
            placeholder="Enter Lecture title.."
            value={title}
            onChangeText={(title) => setTitle(title)}
            style={{ flex: 1 }}
          />
          <Button
            title="Save"
            onPress={() => {
              addSubSection(title, item.id);
              setState(0);
              setTitle("");
            }}
          />
        </View>
      ) : null}

      {item.subSections.map((section) => {
        //Used Map function to render all the Sub Sections
        return <Text style={styles.subSections}> {section.toString()}</Text>;
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  SectionTitle: {
    fontSize: 35,
    marginRight: 5,
  },
  SectionHeading: {
    flexDirection: "row",
    alignItems: "center",
  },
  subSections: {
    fontSize: 20,
  },
  TextBox: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderWidth: 2,
  },
  parentView: {
    backgroundColor: "white",
    borderRadius: 8,
    marginVertical: 8,
    padding: 5,
  },
});

export default SectionCard;
