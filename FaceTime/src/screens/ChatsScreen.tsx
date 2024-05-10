import React from 'react';

import {useAuthProvider} from '../providers/AuthProvider';
import {ChannelList} from 'stream-chat-react-native';
import {useNavigation} from '@react-navigation/native';

const ChatScreen = () => {
  const {user, setChannel} = useAuthProvider();
  const navigation = useNavigation();

  return (
    <ChannelList
      filters={{members: {$in: [user.id]}}}
      onSelect={channel => {
        setChannel(channel);
        navigation.navigate('single-chat', {cid: channel.id});
      }}
    />
  );
};

export default ChatScreen;
