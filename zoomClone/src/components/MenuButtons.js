/* eslint-disable react-native/no-inline-styles */
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const items = [
  {
    id: 1,
    name: 'video-camera',
    title: 'New meeting',
    customColor: '#FF751F',
  },
  {
    id: 2,
    name: 'plus-square',
    title: 'Join',
  },
  {
    id: 3,
    name: 'calendar',
    title: 'Schedule',
  },
  {
    id: 4,
    name: 'upload',
    title: 'Share Screen',
  },
];

const MenuButtons = ({navigation}) => {
  const openMeeting = () => {
    navigation.navigate('Room');
  };

  return (
    <View style={styles.container}>
      <View style={styles.buttonsContainer}>
        {items.map(item => (
          <TouchableOpacity
            onPress={openMeeting}
            key={item.id}
            style={[
              styles.button,
              {backgroundColor: item.customColor ? item.customColor : 'blue'},
            ]}>
            <FontAwesome name={item.name} size={25} color={'white'} />
            <Text numberOfLines={1} style={styles.menuText}>
              {item.title}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default MenuButtons;

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    paddingBottom: 10,
    alignItems: 'center',
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    justifyContent: 'center',
  },
  buttonsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    width: '100%',
  },
  button: {
    width: 50,
    height: 50,
    backgroundColor: 'blue',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  menuText: {
    paddingTop: 4,
    fontSize: 8,
    color: 'white',
    marginLeft: 10,
    alignSelf: 'center',
  },
});
