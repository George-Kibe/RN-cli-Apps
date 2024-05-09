/* eslint-disable react/react-in-jsx-scope */
import {createStackNavigator} from '@react-navigation/stack';
import Homescreen from '../screens/Homescreen';
import CallScreen from '../screens/CallScreen';
import JoinCallScreen from '../screens/JoinScreen';
import AUthScreen from '../screens/AuthScreen';
import {useAuthProvider} from '../providers/AuthProvider';
import ContactsScreen from '../screens/ContactsScreen';
import {ActivityIndicator} from 'react-native';

import ChatScreen from '../screens/ChatsScreen';

const Stack = createStackNavigator();

export default function ChatStackNavigator() {
  const {session, loading} = useAuthProvider();
  console.log(session);
  if (loading) {
    return <ActivityIndicator />;
  }
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={ChatScreen} />
      <Stack.Screen name="call" component={CallScreen} />
      <Stack.Screen name="join" component={JoinCallScreen} />
      <Stack.Screen name="auth" component={AUthScreen} />
      <Stack.Screen name="contacts" component={ContactsScreen} />
    </Stack.Navigator>
  );
}
