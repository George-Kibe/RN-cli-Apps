import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import MeetingRoom from '../screens/MeetingRoom';

const Stack = createStackNavigator();

export default function StackNavigator() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        options={{headerShown: false}}
        component={HomeScreen}
      />
      <Stack.Screen
        name="Room"
        options={{
          title: 'Start A Meeting',
          headerStyle: {
            backgroundColor: '#1C1C1C',
            shadowOpacity: 0,
          },
          headerTintColor: '#fff',
        }}
        component={MeetingRoom}
      />
      <Stack.Screen name="Notifications" component={HomeScreen} />
      <Stack.Screen name="Profile" component={HomeScreen} />
      <Stack.Screen name="Settings" component={HomeScreen} />
    </Stack.Navigator>
  );
}
