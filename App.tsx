import React from "react";
import { Provider } from "react-redux";
import store from "./Redux/store";
import TopTabbedNavigation from "./Navigation/topTabbedNavigation";
import { StatusBar } from "react-native";
import AppColor from "./Theme/colors";

export default function App() {
  return (
    <Provider store={store}>
      <StatusBar backgroundColor={AppColor.primary} />
      <TopTabbedNavigation />
    </Provider>
  );
}
