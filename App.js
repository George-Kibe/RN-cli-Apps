import React from 'react';
import {StatusBar, SafeAreaView} from 'react-native';
//import HomeScreen from './src/screens/HomeScreen';
import ProfileScreen from './src/components/ProfileScreen';

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ProfileScreen />
      </SafeAreaView>
    </>
  );
};

export default App;
