import React from 'react';
import {StatusBar, SafeAreaView} from 'react-native';
import HomeScreen from './src/screens/HomeScreen';

//continue from 1:32:00
const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <HomeScreen />
      </SafeAreaView>
    </>
  );
};

export default App;
