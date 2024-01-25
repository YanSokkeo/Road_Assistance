import { StyleSheet } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import OnBoarding from "../Screens/OnBoarding";
import Home from "../Screens/Home";
import Maping from "../Screens/Maping";
import LeaderBoard from "../Screens/LeaderBoard";
import Profile from "../Screens/Profile";
import TabNavigation from "./TabNavigation";

const StackNavigator = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          gestureEnabled: false,
        }}
      >
        <Stack.Screen name="onBoarding" component={OnBoarding} />
        <Stack.Screen name="tabNavigation" component={TabNavigation} />
        <Stack.Screen name="home" component={Home}/>
        <Stack.Screen name="map" component={Maping} />
        <Stack.Screen name="leaderBoard" component={LeaderBoard}/>
        <Stack.Screen name="profile" component={Profile} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigator;

const styles = StyleSheet.create({});
