import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import OnBoarding from './src/Screens/OnBoarding';
import TabNavigation from './src/Navigation/TabNavigation';
import Home from './src/Screens/Home';

const App = () => {
  return (

    // <OnBoarding/>

    <NavigationContainer>
      <TabNavigation />
    </NavigationContainer>
  );
};

export default App;