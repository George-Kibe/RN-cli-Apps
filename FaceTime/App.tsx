import 'react-native-gesture-handler';

import {
  PermissionsAndroid,
  Platform,
  SafeAreaView,
  StyleSheet,
  View,
} from 'react-native';
import React, {useEffect} from 'react';
import RootStackNavigator from './src/navigation/RootStackNavigator';
import {AuthProvider} from './src/providers/AuthProvider';
import {StreamClientProvider} from './src/providers/StreamProvider';
import {CallsProvider} from './src/providers/CallsProvider';
import {NavigationContainer} from '@react-navigation/native';
import ChatStackNavigator from './src/navigation/MessagesStack';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import ChatProvider from './src/providers/ChatProvider';
import {Text} from 'react-native';

const App = () => {
  useEffect(() => {
    const run = async () => {
      if (Platform.OS === 'android') {
        await PermissionsAndroid.requestMultiple([
          'android.permission.POST_NOTIFICATIONS',
          'android.permission.BLUETOOTH_CONNECT',
        ]);
      }
    };
    run();
  }, []);

  return (
    <GestureHandlerRootView>
      <AuthProvider>
        <NavigationContainer>
          <StreamClientProvider>
            <CallsProvider>
              <ChatProvider>
                <SafeAreaView style={styles.container}>
                  <ChatStackNavigator />
                </SafeAreaView>
              </ChatProvider>
            </CallsProvider>
          </StreamClientProvider>
        </NavigationContainer>
      </AuthProvider>
    </GestureHandlerRootView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
  },
});
