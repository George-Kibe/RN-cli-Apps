/* eslint-disable react/react-in-jsx-scope */
import {createStackNavigator} from '@react-navigation/stack';
import Homescreen from '../screens/Homescreen';
import CallScreen from '../screens/CallScreen';
import JoinCallScreen from '../screens/JoinScreen';
import AUthScreen from '../screens/AuthScreen';
import ContactsScreen from '../screens/ContactsScreen';
import ChatScreen from '../screens/ChatsScreen';
import SingleChatScreen from '../screens/SingleChatScreen';

const Stack = createStackNavigator();

export default function RootStackNavigator() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={Homescreen} />
      <Stack.Screen name="chats" component={ChatScreen} />
      <Stack.Screen name="single-chat" component={SingleChatScreen} />
      <Stack.Screen name="call" component={CallScreen} />
      <Stack.Screen name="join" component={JoinCallScreen} />
      <Stack.Screen name="auth" component={AUthScreen} />
      <Stack.Screen name="contacts" component={ContactsScreen} />
    </Stack.Navigator>
  );
}
