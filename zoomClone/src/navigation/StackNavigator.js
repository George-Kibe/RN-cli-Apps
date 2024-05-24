import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';

const Stack = createStackNavigator();

export default function StackNavigator() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen
        name="Home"
        options={{headerShown: false}}
        component={HomeScreen}
      />
      <Stack.Screen name="Notifications" component={HomeScreen} />
      <Stack.Screen name="Profile" component={HomeScreen} />
      <Stack.Screen name="Settings" component={HomeScreen} />
    </Stack.Navigator>
  );
}
