import React from 'react';
import {createContext, PropsWithChildren, useEffect, useState} from 'react';
import {ActivityIndicator} from 'react-native';
import {StreamChat} from 'stream-chat';
import {Chat, OverlayProvider} from 'stream-chat-react-native';
import {useAuthProvider} from './AuthProvider';
import {supabase} from '../lib/supabase';

const client = StreamChat.getInstance('67crtw84yr65');

export default function ChatProvider({children}: PropsWithChildren) {
  const [isReady, setIsReady] = useState(false);
  const {user, profile} = useAuthProvider();

  useEffect(() => {
    // console.log("USE EFFECT: ", profile)
    if (!user) {
      return;
    }

    const connect = async () => {
      await client.connectUser(
        {
          id: user.id,
          name: profile?.full_name || 'No Full Name',
          image: 'https://i.ibb.co/MyddYHc/Watch.jpg',
        },
        client.devToken(user.id),
      );
      setIsReady(true);
    };
    connect();
    return () => {
      if (isReady) {
        client.disconnectUser();
      }

      setIsReady(false);
    };
  }, [user?.id]);

  // if (!isReady) {
  //   return <ActivityIndicator />;
  // }

  return (
    <OverlayProvider>
      <Chat client={client}>{children}</Chat>
    </OverlayProvider>
  );
}
