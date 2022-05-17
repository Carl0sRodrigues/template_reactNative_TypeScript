import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Home, Tab } from '../screens';

const Stack = createStackNavigator();

export default function StackNavigation() {
  return(
    <Stack.Navigator>
      <Stack.Screen
        name='Home'
        component={Home}
        options={{
          headerShown: false
        }}
      />
      <Stack.Screen
        name='Tab'
        component={Tab}
        options={{
          headerShown: false
        }}
      />
    </Stack.Navigator>
  );
}