import React, {useEffect} from 'react';
import {
  StreamVideo,
  StreamVideoClient,
  User,
} from '@stream-io/video-react-native-sdk';
import {PropsWithChildren} from 'react';
import {useAuth} from './AuthProvider';

const apiKey = '67crtw84yr65';
// const userId = 'GeorgeKibe';
// const token = '';
// const callId = 'GeorgeKibe';
// const user: User = {id: userId};
export const client = new StreamVideoClient({apiKey});

export const StreamClientProvider = ({children}: PropsWithChildren) => {
  const {session} = useAuth();

  useEffect(() => {
    if (!session?.user) {
      return;
    }
    const fetchToken = async () => {
      try {
        const response = await fetch(
          `https://cm6ynw5bgj7vh4v3teiij4t6om0ggqct.lambda-url.ap-southeast-2.on.aws/?id=${session?.user?.id}`,
        );
        if (response.status === 200) {
          const {token} = await response.json();
          // console.log('Token: ', token);
          client.disconnectUser();
          client.connectUser({id: session.user.id}, token);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchToken();
  }, [session?.user]);

  return <StreamVideo client={client}>{children}</StreamVideo>;
};
