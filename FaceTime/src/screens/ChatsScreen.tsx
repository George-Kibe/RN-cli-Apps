/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';

import {useAuthProvider} from '../providers/AuthProvider';
import Entypo from 'react-native-vector-icons/Entypo';
import {ChannelList} from 'stream-chat-react-native';
import {Pressable} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import { Text } from 'react-native';

const Stack = createStackNavigator();
const ChatScreen = () => {
  const {user} = useAuthProvider();
  const handlePress = () => {
    // handle click
    // href={'/(home)/users'
  };
  const goToChannel = () => {
    console.log("Going to channel...")
    // channel => router.push(`/channel/${channel.cid}`)
  };
  return (
    <>
    <Text>This is chatsgh</Text>
      <Stack.Screen
        options={{
          headerRight: () => (
            <Pressable onPress={handlePress}>
              <Entypo
                name="squared-plus"
                size={24}
                color="black"
                style={{marginRight: 10}}
              />
            </Pressable>
          ),
        }}
      />
      <ChannelList
        filters={{members: {$in: [user.id]}}}
        onSelect={goToChannel}
      />
    </>
  );
};

export default ChatScreen;
