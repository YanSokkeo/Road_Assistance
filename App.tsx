import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import OnBoarding from './src/Screens/OnBoarding';
import TabNavigation from './src/Navigation/TabNavigation';
import Home from './src/Screens/Home';
import { createStackNavigator } from '@react-navigation/stack';

const App = () => {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="onBoarding" component={OnBoarding} />
        <Stack.Screen name="tabNavigation" component={TabNavigation} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;