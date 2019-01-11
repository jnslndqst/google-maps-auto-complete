import React from "react";
import { Platform } from "react-native";
import {
  createStackNavigator,
  createBottomTabNavigator
} from "react-navigation";

import TabBarIcon from "../components/TabBarIcon";
import LocationScreen from "../screens/LocationScreen";
import AddressScreen from "../screens/AddressScreen";

const Locationtack = createStackNavigator({
  Location: LocationScreen
});

Locationtack.navigationOptions = {
  tabBarLabel: "Places"
};

const AddressStack = createStackNavigator({
  Address: AddressScreen
});

AddressStack.navigationOptions = {
  tabBarLabel: "Addresses"
};

export default createBottomTabNavigator({
  Locationtack,
  AddressStack
});
