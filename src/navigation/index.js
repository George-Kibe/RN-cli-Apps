import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import BottomHomeNavigator from './BottomHomeNavigator'
import StoryScreen from '../screens/StoryScreen'

const RootStack = createStackNavigator()

const Navigator = () => (
    <RootStack.Navigator>
        <RootStack.Screen name="Home Main" component={BottomHomeNavigator}
            options={{
                headerShown:false
            }}
        />
        <RootStack.Screen name="Story" component={StoryScreen} 
            options={{
                 headerShown:false
            }}
        />
    </RootStack.Navigator>
)
export default Navigator