import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import OnBoarding from './src/Screens/OnBoarding';
import TabNavigation from './src/Navigation/TabNavigation';
import Home from './src/Screens/Home';
import LoginScreen from './src/Screens/LoginScreen';
import SingupScreen from './src/Screens/SignupScreen'; 
import { createStackNavigator } from '@react-navigation/stack';

const App = () => {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="onBoarding" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="onBoarding" component={OnBoarding} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="SignupScreen" component={SingupScreen} />
        <Stack.Screen name="tabNavigation" component={TabNavigation} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;