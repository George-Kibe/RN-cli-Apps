/* eslint-disable react/react-in-jsx-scope */
import {createStackNavigator} from '@react-navigation/stack';
import Homescreen from '../screens/Homescreen';
import {NavigationContainer} from '@react-navigation/native';
import CallScreen from '../screens/CallScreen';
import JoinCallScreen from '../screens/JoinScreen';
import AUthScreen from '../screens/AuthScreen';
import {useAuth} from '../providers/AuthProvider';
import ContactsScreen from '../screens/ContactsScreen';
import {ActivityIndicator} from 'react-native';

const Stack = createStackNavigator();

export default function RootStackNavigator() {
  const {session, loading} = useAuth();
  console.log(session);
  if (loading) {
    return <ActivityIndicator />;
  }
  if (!session) {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="auth">
          <Stack.Screen name="Home" component={Homescreen} />
          <Stack.Screen name="call" component={CallScreen} />
          <Stack.Screen name="join" component={JoinCallScreen} />
          <Stack.Screen name="auth" component={AUthScreen} />
          <Stack.Screen name="contacts" component={ContactsScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Homescreen} />
        <Stack.Screen name="call" component={CallScreen} />
        <Stack.Screen name="join" component={JoinCallScreen} />
        <Stack.Screen name="auth" component={AUthScreen} />
        <Stack.Screen name="contacts" component={ContactsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
