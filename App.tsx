import React from "react";
import { Provider } from "react-redux";
import store from "./Redux/store";
import TopTabbedNavigation from "./Navigation/topTabbedNavigation";

export default function App() {
  return (
    <Provider store={store}>
      <TopTabbedNavigation />
    </Provider>
  );
}
