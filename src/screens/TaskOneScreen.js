/*
Note:
I have not added functionality for permanent storage of Sections list in device because of shortage of time.
If you can provide me some more time I can add that functionality using AsyncStorage!!

*/

import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  TextInput,
  Button,
} from "react-native";

//Components
import SectionCard from "../components/SectionCard";

const TaskOneScreen = () => {
  const [Sections, setSections] = useState({ count: 0, sections: [] });
  const [addSection, setState] = useState(0);
  const [title, setTitle] = useState("");

  //Function to add a new Section
  function addNewSection() {
    const count = Sections.count;
    const sections = [
      ...Sections.sections,
      { id: count, heading: title, subSections: [] },
    ];
    setSections({ sections, count: count + 1 });
    setTitle("");
  }

  //Function to add sub section
  function addSubSection(Subtitle, id) {
    const sections = Sections.sections.map((section) => {
      if (section.id == id) {
        section.subSections = [...section.subSections, Subtitle];
      }
      return section;
    });
    setSections({ sections, count: Sections.count });
  }

  return (
    <View style={styles.parentView}>
      {addSection == 0 ? (
        <TouchableOpacity
          style={styles.addSectionButton}
          onPress={() => setState(1)}
        >
          <Text style={{ color: "white" }}>Add a new Section</Text>
        </TouchableOpacity>
      ) : null}

      {addSection == 1 ? (
        <View style={styles.TextBox}>
          <TextInput
            placeholder="Enter Section title.."
            value={title}
            onChangeText={(title) => setTitle(title)}
            style={{ flex: 1 }}
          />
          <Button
            title="Save"
            onPress={() => {
              addNewSection();
              setState(0);
            }}
          />
        </View>
      ) : null}

      <FlatList
        data={Sections.sections}
        renderItem={({ item }) => {
          return <SectionCard item={item} addSubSection={addSubSection} />;
        }}
        ListFooterComponent={() => {
          return <View style={{ height: 300 }}></View>;
        }}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  parentView: {
    marginHorizontal: 8,
  },
  addSectionButton: {
    backgroundColor: "#3498DB",
    alignSelf: "center",
    borderRadius: 10,
    padding: 10,
    marginVertical: 10,
  },
  TextBox: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderWidth: 2,
    marginVertical: 10,
  },
});

export default TaskOneScreen;
