import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
const Stack = createNativeStackNavigator();

//Screens
import HomeScreen from "./src/screens/HomeScreen";
import TaskOneScreen from "./src/screens/TaskOneScreen";
import TaskTwoScreen from "./src/screens/TaskTwoScreen";

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Task 1" component={TaskOneScreen} />
        <Stack.Screen name="Task 2" component={TaskTwoScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
