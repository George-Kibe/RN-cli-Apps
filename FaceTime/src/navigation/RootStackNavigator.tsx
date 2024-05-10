/* eslint-disable react/react-in-jsx-scope */
import {createStackNavigator} from '@react-navigation/stack';
import Homescreen from '../screens/Homescreen';
import CallScreen from '../screens/CallScreen';
import JoinCallScreen from '../screens/JoinScreen';
import AUthScreen from '../screens/AuthScreen';
import {useAuthProvider} from '../providers/AuthProvider';
import ContactsScreen from '../screens/ContactsScreen';
import {ActivityIndicator} from 'react-native';

const Stack = createStackNavigator();

export default function RootStackNavigator() {
  const {session, loading} = useAuthProvider();
  console.log('session: ', session);
  if (loading) {
    console.log('loading');
    return <ActivityIndicator />;
  }
  // if (!session) {
  //   return (
  //     <Stack.Navigator initialRouteName="auth">
  //       <Stack.Screen name="Home" component={Homescreen} />
  //       <Stack.Screen name="call" component={CallScreen} />
  //       <Stack.Screen name="join" component={JoinCallScreen} />
  //       <Stack.Screen name="auth" component={AUthScreen} />
  //       <Stack.Screen name="contacts" component={ContactsScreen} />
  //     </Stack.Navigator>
  //   );
  // }
  return (
    <Stack.Navigator initialRouteName="auth">
      <Stack.Screen name="Home" component={Homescreen} />
      <Stack.Screen name="call" component={CallScreen} />
      <Stack.Screen name="join" component={JoinCallScreen} />
      <Stack.Screen name="auth" component={AUthScreen} />
      <Stack.Screen name="contacts" component={ContactsScreen} />
    </Stack.Navigator>
  );
}
