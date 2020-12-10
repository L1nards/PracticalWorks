import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import homescreen from './Screens/HomeScreen';
import listscreen from './Screens/ListScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
     
    <NavigationContainer>
      <Stack.Navigator initialRouteName="React application">
        <Stack.Screen name="React application" component={homescreen}/>
        <Stack.Screen name="List View" component={listscreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}