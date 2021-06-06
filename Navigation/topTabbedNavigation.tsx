import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { FontAwesome, Ionicons, Octicons } from "@expo/vector-icons";
import aram from "../Screens/aram";
import porul from "../Screens/porul";
import kaamam from "../Screens/kaamam";
import AppColor from "../Theme/colors";
import AppBar from "../Components/appBar";

export default function TopTabbedNavigation() {
  return (
    <NavigationContainer>
      <AppBar />
      <TopTabs />
    </NavigationContainer>
  );
}

const TopTab = createMaterialTopTabNavigator();

function TopTabs() {
  return (
    <TopTab.Navigator
      initialRouteName="Arathuppaal"
      tabBarOptions={{
        activeTintColor: AppColor.accent,
        style: { backgroundColor: AppColor.primary },
        showIcon: true,
        indicatorStyle: { backgroundColor: AppColor.accent },
      }}
    >
      <TopTab.Screen
        name="Arathuppaal"
        component={aram}
        options={{
          tabBarLabel: "அறத்துப்பால்",
          tabBarIcon: ({ color }) => (
            <Octicons name="law" size={24} color={color} />
          ),
        }}
      />
      <TopTab.Screen
        name="Porutpaal"
        component={porul}
        options={{
          tabBarLabel: "பொருட்பால்",
          tabBarIcon: ({ color }) => (
            <FontAwesome name="rupee" size={24} color={color} />
          ),
        }}
      />
      <TopTab.Screen
        name="Kaamathuppaal"
        component={kaamam}
        options={{
          tabBarLabel: "காமத்துப்பால்",
          tabBarIcon: ({ color }) => (
            <Ionicons name="male-female-outline" size={24} color={color} />
          ),
        }}
      />
    </TopTab.Navigator>
  );
}
