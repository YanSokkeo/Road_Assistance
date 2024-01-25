import { StyleSheet } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import color from "../../color";
import Ionicons from "react-native-vector-icons/Ionicons";
import Home from "../Screens/Home";
import Search from "../Screens/Search";
import Profile from "../Screens/Profile";
import Maping from "../Screens/Maping";

const TabNavigation = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName: string;

          if (route.name === "home") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === "map") {
            iconName = focused ? "map" : "map-outline";
          } else if (route.name === "search") {
            iconName = focused ? "search" : "search-outline";
          } else if (route.name === "profile") {
            iconName = focused ? "person-circle" : "person-circle-outline";
          }

          // Fallback to empty string if iconName is undefined
          iconName = iconName ?? "";

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={25} color={color} />;
        },
        tabBarStyle: {
          paddingBottom: 10,
          height: 60,
          backgroundColor: color.white,
        },
        tabBarShowLabel: false,
        tabBarActiveTintColor: color.button,
        tabBarInactiveTintColor: color.gray,
      })}
    >
      <Tab.Screen
        name="home"
        component={Home}
        initialParams={{ type: "Home" }}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="map"
        component={Maping}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="search"
        component={Search}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="profile"
        component={Profile}
        options={{ headerShown: false }}
      />
      {/* Add other Tab.Screen components as needed */}
    </Tab.Navigator>
  );
};

export default TabNavigation;

const styles = StyleSheet.create({});
