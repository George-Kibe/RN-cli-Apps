import {Alert, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import StartMeeting from '../components/StartMeeting';
import {io} from 'socket.io-client';
import {RNCamera} from 'react-native-camera';
import FontAwesone from 'react-native-vector-icons/FontAwesome';

let socket;

const menuIcons = [
  {
    id: 1,
    name: 'microphone',
    title: 'mute',
    customColor: '#EFEFEF',
  },
  {
    id: 2,
    name: 'video-camera',
    title: 'Stop Video',
    //customColor: '#EFEFEF',
  },
  {
    id: 3,
    name: 'upload',
    title: 'Share Content',
    //customColor: '#EFEFEF',
  },
  {
    id: 4,
    name: 'group',
    title: 'Participants',
    //customColor: '#EFEFEF',
  },
];

const MeetingRoom = () => {
  const [name, setName] = useState('');
  const [roomId, setRoomId] = useState('');
  const [activeusers, setActiveusers] = useState([]);
  const [showCamera, setShowCamera] = useState(false);

  const joinRoom = () => {
    setShowCamera(true);
    console.log('Joining room', roomId);
    socket.emit('join-room', {roomId: roomId, username: name});
  };

  useEffect(() => {
    const API_URL = 'http://localhost:8000/';
    socket = io(API_URL);
    socket.on('connect', () => {
      console.log('Connected to server');
    });
    socket.on('room-users', users => {
      console.log('Users in room:', users);
      setActiveusers(users);
    });
  }, [roomId]);

  return (
    <View style={styles.container}>
      {showCamera ? (
        <View style={styles.cameraContainer}>
          <RNCamera
            // ref={cameraRef}
            style={styles.preview}
            type={RNCamera.Constants.Type.front}
            flashMode={RNCamera.Constants.FlashMode.off}
            androidCameraPermissionOptions={{
              title: 'Permission to use camera',
              message: 'We need your permission to use your camera',
              buttonPositive: 'Ok',
              buttonNegative: 'Cancel',
            }}
            captureAudio={true}
          />
          <View style={styles.menu}>
            {menuIcons.map(item => (
              <TouchableOpacity style={styles.tile}>
                <FontAwesone
                  name={item.name}
                  color={item.customColor ? item.customColor : 'white'}
                  size={20}
                />
                <Text style={styles.textTile}>{item.title}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      ) : (
        <StartMeeting
          name={name}
          setName={setName}
          roomId={roomId}
          setRoomId={setRoomId}
          joinRoom={joinRoom}
        />
      )}
    </View>
  );
};

export default MeetingRoom;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1C1C1C',
  },
  cameraContainer: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black',
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  menu: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
  tile: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    marginTop: 10,
  },
  textTile: {
    color: 'white',
    marginTop: 10,
  },
});
