/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, StyleSheet, useColorScheme} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import Homescreen from './src/screens/Homescreen';
import {StatusBar} from 'react-native';
import {View} from 'react-native';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <View style={[backgroundStyle, styles.container]}>
      {/* <StatusBar barStyle={'default'} /> */}
      <Homescreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1},
});

export default App;
