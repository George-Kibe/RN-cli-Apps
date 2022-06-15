import { View, Image } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeScreen from '../screens/HomeScreen'
import Entypo from "react-native-vector-icons/Entypo"
import FontAwesome from "react-native-vector-icons/FontAwesome"
import MaterialIcons from "react-native-vector-icons/MaterialIcons"
import Ionicons from "react-native-vector-icons/Ionicons"
import HomeStackScreen from "./HomeStackScreen"

const Tab = createBottomTabNavigator()

const Navigator = () => {
  return (
    <Tab.Navigator screenOptions={{
        "tabBarActiveTintColor": "#ff0000",
        "tabBarInactiveTintColor": "#0000ff",
        "tabBarShowLabel": true,
        "tabBarStyle": [
          {
            "display": "flex"
          },
          null
        ],
        headerShown: false
      }}>
        <Tab.Screen name="Home" component={HomeStackScreen} 
            options={{
                tabBarIcon:({color}) => (
                    <Entypo name="home" color={color} size={22} />
                )
            }}
        />
        <Tab.Screen name="Discovery" component={HomeScreen}
            options={{
                tabBarIcon:({color}) => (
                    <FontAwesome name="search" color={color} size={22} />
                )
            }}
        />
        <Tab.Screen name="Post" component={HomeScreen} 
             options={{
                tabBarIcon:({color}) => (
                    <MaterialIcons name="post-add" color={color} size={22} />
                )
            }}
        />
        <Tab.Screen name="Notifications" component={HomeScreen} 
             options={{
                tabBarIcon:({color}) => (
                    <Ionicons name="notifications" color={color} size={22} />
                )
            }}
        />
        <Tab.Screen name="Profile" component={HomeScreen} 
             options={{
                tabBarIcon:({color}) => (
                    <FontAwesome name="user-circle" color={color} size={22} />
                )
            }}
        />
    </Tab.Navigator>
  )
}

export default Navigator