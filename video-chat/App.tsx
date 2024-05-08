import 'react-native-gesture-handler';

import {
  PermissionsAndroid,
  Platform,
  SafeAreaView,
  StyleSheet,
} from 'react-native';
import React, {useEffect} from 'react';
import RootBottomTabsNavigator from './src/navigation';
import {StreamVideo} from '@stream-io/video-react-native-sdk';
import {client} from './src/lib/stream';
import RootStackNavigator from './src/navigation/RootStackNavigator';
import {AuthProvider} from './src/providers/AuthProvider';

// continue from 2:21:51

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
    <AuthProvider>
      <StreamVideo client={client}>
        <SafeAreaView style={styles.container}>
          <RootStackNavigator />
        </SafeAreaView>
      </StreamVideo>
    </AuthProvider>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
  },
});
