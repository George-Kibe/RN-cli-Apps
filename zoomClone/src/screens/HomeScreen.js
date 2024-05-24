import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import MenuButtons from '../components/MenuButtons';
import Contacts from '../components/Contacts';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Header />
      <SearchBar />
      <MenuButtons />
      <Contacts />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1C1C1C',
    // padding: 15,
    flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
