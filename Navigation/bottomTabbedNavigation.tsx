import React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { FontAwesome, Ionicons, Octicons } from "@expo/vector-icons";
import aram from "../Screens/aram";
import porul from "../Screens/porul";
import kaamam from "../Screens/kaamam";
import AppColor from "../Theme/colors";

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
    <BottomTab.Navigator
      initialRouteName="Arathuppaal"
      activeColor={AppColor.accent}
      barStyle={{ backgroundColor: AppColor.primary }}
    >
      <BottomTab.Screen
        name="Arathuppaal"
        component={aram}
        options={{
          tabBarLabel: "அறத்துப்பால்",
          tabBarIcon: ({ color }) => (
            <Octicons name="law" size={24} color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Porutpaal"
        component={porul}
        options={{
          tabBarLabel: "பொருட்பால்",
          tabBarIcon: ({ color }) => (
            <FontAwesome name="rupee" size={24} color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Kaamathuppaal"
        component={kaamam}
        options={{
          tabBarLabel: "காமத்துப்பால்",
          tabBarIcon: ({ color }) => (
            <Ionicons name="male-female-outline" size={24} color={color} />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}
