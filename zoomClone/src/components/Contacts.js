import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import ProfileImage from '../assets/images/profile.png';
import ProfileOne from '../assets/images/profile1.png';
import ProfileTwo from '../assets/images/profile2.png';

const contacts = [
  {
    type: 'starred',
    name: 'Starred',
  },
  {
    type: 'contact',
    name: 'Jessy The',
    photo: ProfileImage,
  },
  {
    type: 'contact',
    name: 'Alicia The',
    photo: ProfileOne,
  },
  {
    type: 'contact',
    name: 'Dolphine The',
    photo: ProfileTwo,
  },
];

const Contacts = () => {
  return (
    <View style={styles.container}>
      {contacts.map((item, index) => (
        <View style={styles.row} key={index}>
          <View style={styles.icon}>
            {item.type === 'starred' ? (
              <AntDesign name="star" size={30} color={'white'} />
            ) : (
              <Image source={item.photo} style={styles.image} />
            )}
          </View>
          <Text style={styles.text}>{item.name}</Text>
        </View>
      ))}
    </View>
  );
};

export default Contacts;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    // alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },
  icon: {
    backgroundColor: '#333333',
    width: 55,
    height: 55,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'white',
    marginLeft: 10,
  },
  image: {
    width: 55,
    height: 55,
    borderRadius: 15,
  },
});
