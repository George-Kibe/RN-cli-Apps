import {ActivityIndicator} from 'react-native';
import React from 'react';

import {Channel, MessageInput, MessageList} from 'stream-chat-react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useAuthProvider} from '../providers/AuthProvider';

const SingleChatScreen = () => {
  const {channel} = useAuthProvider();
  console.log("Channel: ", channel._user);

  if (!channel) {
    return <ActivityIndicator />;
  }
  return (
    <Channel channel={channel}>
      <MessageList />
      <SafeAreaView edges={['bottom']}>
        <MessageInput />
      </SafeAreaView>
    </Channel>
  );
};

export default SingleChatScreen;
