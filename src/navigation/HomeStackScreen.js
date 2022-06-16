import React from "react";
import Ionicons from "react-native-vector-icons/Ionicons"
import Feather from "react-native-vector-icons/Feather"
import { createStackNavigator } from '@react-navigation/stack'
import HomeScreen from "../screens/HomeScreen";
import StoryScreen from "../screens/StoryScreen";

const HomeStack = createStackNavigator()
const HomeStackScreen = () => {
    return (
        <HomeStack.Navigator>
            <HomeStack.Screen name="Netgram Home" component={HomeScreen} 
                options={{
                    title:"Netgram Home",
                    headerLeft: () =>(
                        <Feather name="camera" size={25} color="#000" 
                            style={{marginLeft:10}}/>
                    ),
                    //to insert logo later on
                    // headerTitle: () =>(
                    //  <Image source={logo} resizeMode="contain" style={{width:125, height:50}} />
                    // ),
                    headerRight:() =>(
                        <Ionicons name="paper-plane-outline" size={25} color="#000" 
                            style={{marginRight:10}}/>
                    ),
                }}
            />
        </HomeStack.Navigator>
    )
}
export default HomeStackScreen;