import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeScreen from '../screens/HomeScreen'

const Tab = createBottomTabNavigator()

const Navigator = () => {
  return (
    <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Discovery" component={HomeScreen} />
        <Tab.Screen name="Post" component={HomeScreen} />
        <Tab.Screen name="Notifications" component={HomeScreen} />
        <Tab.Screen name="Profile" component={HomeScreen} />
    </Tab.Navigator>
  )
}

export default Navigator