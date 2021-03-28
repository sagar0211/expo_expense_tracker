import React from "react";
import { StatusBar } from "expo-status-bar";
import { ThemeProvider } from "@shopify/restyle";
import { createStackNavigator } from "@react-navigation/stack";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Provider } from "react-redux";
import "react-native-gesture-handler";

import store from "./store";

/* Stacks */

import { ExpenseNavigator } from "./src/expense__tracker";

import { LoadAssets, theme } from "./src/components";



const fonts = {
  SFBOLD: require("./assets/fonts/SF-Pro-Text-Bold.otf"),
  SFREGULAR: require("./assets/fonts/SF-Pro-Text-Regular.otf"),
  SFSEMI: require("./assets/fonts/SF-Pro-Text-Semibold.otf"),
  RBlack: require("./assets/fonts/Rubik/Rubik-Black.ttf"),
  RRegular: require("./assets/fonts/Rubik/Rubik-Regular.ttf"),
  RMedium: require("./assets/fonts/Rubik/Rubik-Medium.ttf"),
};

const AppStack = createStackNavigator();

export default function App() {
  return (
    <Provider {...{ store }}>
      <ThemeProvider {...{ theme }}>
        <LoadAssets {...{  fonts }}>
          <SafeAreaProvider>
            <AppStack.Navigator headerMode="none" initialRouteName="ExpenseTracker">
              <AppStack.Screen
                name="ExpenseTracker"
                component={ExpenseNavigator}
              />
            </AppStack.Navigator>
          </SafeAreaProvider>
        </LoadAssets>
        <StatusBar />
      </ThemeProvider>
    </Provider>
  );
}
