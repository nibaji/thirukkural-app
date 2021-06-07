import React from "react";
import { Provider } from "react-redux";
import store from "./Redux/store";
import { StatusBar } from "react-native";
import AppColor from "./Theme/colors";
import StackedNavigation from "./Navigation/stackedNavigation";

export default function App() {
  return (
    <Provider store={store}>
      <StatusBar backgroundColor={AppColor.primary} />
      <StackedNavigation />
    </Provider>
  );
}
