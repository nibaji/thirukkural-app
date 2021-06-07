import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import TopTabbedNavigation from "./topTabbedNavigation";
import KuralDetails from "../Screens/kuralDetails";
import { NavigationContainer } from "@react-navigation/native";
import AppBar from "../Components/appBar";

export default function StackedNavigation() {
  return (
    <NavigationContainer>
      <AppBar />
      <Stacks />
    </NavigationContainer>
  );
}

const Stack = createStackNavigator();

function Stacks() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="KuralsList"
        component={TopTabbedNavigation}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Kural"
        component={KuralDetails}
        options={({ route }: any) => ({ title: route.params.title })}
      />
    </Stack.Navigator>
  );
}
