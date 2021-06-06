import React from "react";
import { View, Text, StyleSheet } from "react-native";
import AppColor from "../Theme/colors";

export default function AppBar() {
  return (
    <View style={styles.main}>
      <Text style={styles.titleText}>திருக்குறள்</Text>
    </View>
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
