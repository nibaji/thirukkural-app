import React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import aram from "../Screens/aram";
import porul from "../Screens/porul";
import kaamam from "../Screens/kaamam";
import { NavigationContainer } from "@react-navigation/native";

export default function BottomTabbedNavigation() {
  return (
    <NavigationContainer>
      <BottomTabs />
    </NavigationContainer>
  );
}

const BottomTab = createMaterialBottomTabNavigator();

function BottomTabs() {
  return (
    <BottomTab.Navigator>
      <BottomTab.Screen name="Arathuppaal" component={aram} />
      <BottomTab.Screen name="Porutpaal" component={porul} />
      <BottomTab.Screen name="Kaamathuppaal" component={kaamam} />
    </BottomTab.Navigator>
  );
}
