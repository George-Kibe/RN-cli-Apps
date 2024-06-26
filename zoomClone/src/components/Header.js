import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Entypo from 'react-native-vector-icons/Entypo';

const Header = () => {
  return (
    <View style={styles.container}>
      <Entypo name="notification" size={30} color="#EFEFEF" />
      <Text style={styles.heading}>Meet & Chat</Text>
      <Entypo name="new-message" size={30} color="#EFEFEF" />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    // backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  heading: {
    fontSize: 20,
    color: '#EFEFEF',
    fontWeight: '700',
  },
});
