import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavitator } from '@react-navigation/native';

const AppStack = createStackNavitator();

import Incidents from './pages/Incidents';

export default function Routes() {
  return (
    <NavigationContainer>
      <AppStack.Navigator screenOptions={{ headerShown: false }}>
        <AppStack.Screen name="Incidents" component={Incidents} />

      </AppStack.Navigator>
    </NavigationContainer>

  );
}

