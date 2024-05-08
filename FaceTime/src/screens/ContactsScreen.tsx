/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react-native/no-inline-styles */
import {Text, FlatList} from 'react-native';
import React, {useEffect, useState} from 'react';
import {supabase} from '../lib/supabase';
import {useAuth} from '../providers/AuthProvider';
import {useStreamVideoClient} from '@stream-io/video-react-native-sdk';
import {generateRandomString} from '../lib/generateRandomString';
import {useNavigation} from '@react-navigation/native';

const ContactsScreen = () => {
  const navigation = useNavigation();
  const [profiles, setProfiles] = useState([]);
  const {session} = useAuth();
  const client = useStreamVideoClient();

  useEffect(() => {
    const fetchProfiles = async () => {
      let {data: profiles, error} = await supabase.from('profiles').select('*');
      setProfiles(profiles?.filter(p => p.id !== session?.user.id));
    };
    fetchProfiles();
  }, []);

  const onUserPressed = user => {
    if (!client) {
      return;
    }
    const callId = generateRandomString(20);
    console.log('Creating a call with id: ', callId);

    client.call('default', callId).getOrCreate({
      ring: true,
      data: {
        members: [{user_id: session?.user.id}, {user_id: user.id}],
      },
    });

    navigation.navigate('call');
  };

  return (
    <FlatList
      data={profiles}
      renderItem={({item}) => (
        <Text
          onPress={() => onUserPressed(item)}
          style={{
            padding: 10,
            margin: 5,
            backgroundColor: 'white',
            fontSize: 16,
          }}>
          {item.id}
        </Text>
      )}
      ListHeaderComponent={() => (
        <Text style={{margin: 15, fontWeight: 'bold'}}>
          My id: {session?.user?.id}
        </Text>
      )}
    />
  );
};

export default ContactsScreen;
