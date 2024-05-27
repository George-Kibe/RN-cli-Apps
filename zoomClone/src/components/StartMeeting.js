/* eslint-disable react-native/no-inline-styles */
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TextInput,
  View,
} from 'react-native';
import React, {useState} from 'react';

const StartMeeting = ({name, setName, roomId, setRoomId, joinRoom}) => {
  return (
    <View style={styles.startMeetingContainer}>
      <View style={styles.info}>
        <TextInput
          value={name}
          onChangeText={setName}
          placeholder="Enter Name"
          placeholderTextColor={'#767476'}
          style={styles.textInput}
        />
      </View>
      <View style={styles.info}>
        <TextInput
          value={roomId}
          onChangeText={setRoomId}
          placeholder="Room ID"
          placeholderTextColor={'#767476'}
          style={styles.textInput}
        />
      </View>

      <View style={{alignItems: 'center'}}>
        <TouchableOpacity onPress={joinRoom} style={styles.startMeetingButton}>
          <Text style={{color: 'white'}}>Start Meeting</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default StartMeeting;

const styles = StyleSheet.create({
  startMeetingContainer: {},
  info: {
    width: '100%',
    backgroundColor: '#373538',
    height: 50,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#484648',
    padding: 12,
    justifyContent: 'center',
  },
  textInput: {
    color: 'white',
    fontSize: 15,
  },
  startMeetingButton: {
    backgroundColor: '#0470DC',
    width: 300,
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    borderRadius: 15,
  },
});
