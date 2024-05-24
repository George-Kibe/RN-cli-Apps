import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Fontisto from 'react-native-vector-icons/Fontisto';
import {TextInput} from 'react-native-gesture-handler';

const SearchBar = () => {
  return (
    <View style={styles.container}>
      <Fontisto name="search" size={20} color="#858585" />
      <TextInput style={styles.searchText}>Search</TextInput>
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#333333',
    flexDirection: 'row',
    paddingHorizontal: 10,
    height: 40,
    alignItems: 'center',
    borderRadius: 10,
  },
  searchText: {
    color: '#858585',
    paddingLeft: 10,
    fontSize: 20,
  },
});
