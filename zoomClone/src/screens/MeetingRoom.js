/* eslint-disable react-native/no-inline-styles */
import {StyleSheet, Text, Touchable, View} from 'react-native';
import React, {useState} from 'react';
import {TextInput} from 'react-native-gesture-handler';
import {TouchableOpacity} from 'react-native';

const MeetingRoom = () => {
  const [name, setName] = useState('');
  const [roomId, setRoomId] = useState('');
  console.log(name, roomId);

  return (
    <View style={styles.container}>
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
          <TouchableOpacity style={styles.startMeetingButton}>
            <Text style={{color: 'white'}}>Start Meeting</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default MeetingRoom;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1C1C1C',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
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
