import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { FontAwesome, Ionicons, Octicons } from "@expo/vector-icons";
import aram from "../Screens/aram";
import porul from "../Screens/porul";
import kaamam from "../Screens/kaamam";
import AppColor from "../Theme/colors";
import { View, Text, StyleSheet } from "react-native";

export default function TopTabbedNavigation() {
  return (
    <NavigationContainer>
      <View style={styles.main}>
        <Text style={styles.titleText}>திருக்குறள்</Text>
      </View>
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

const styles = StyleSheet.create({
  main: {
    flexDirection: "row",
    backgroundColor: AppColor.primary,
    padding: 5,
    justifyContent: "space-between",
    alignItems: "center",
  },
  titleText: {
    padding: 5,
    textAlign: "left",
    fontWeight: "bold",
    fontSize: 23,
    color: AppColor.accent,
  },
});
