import {ActivityIndicator, Button, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useStreamVideoClient} from '@stream-io/video-react-native-sdk';
import {Pressable} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {generateRandomString} from '../lib/generateRandomString';
import {supabase} from '../lib/supabase';
import {useAuthProvider} from '../providers/AuthProvider';
// import {client} from '../lib/stream';

const Homescreen = () => {
  const {session, loading} = useAuthProvider();
  const navigation = useNavigation();
  const client = useStreamVideoClient();
  // const call = client?.call('default', callId);
  if (loading) {
    console.log('loading');
    return <ActivityIndicator />;
  }
  if (!session) {
    navigation.navigate('auth');
    // return;
  }

  const createCall = async () => {
    // create a call
    if (!client) {
      return;
    }
    try {
      const callId = generateRandomString(20);
      const call = client.call('default', callId);
      // call.getOrCreate();
      call.join({create: true});
      navigation.navigate('call', {callId: callId});
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
      {/* <Stack.Screen options={{ title: 'FaceTime' }} /> */}

      <View style={{flexDirection: 'row', gap: 10}}>
        <Pressable onPress={createCall} style={styles.button}>
          <Text>Create Call</Text>
        </Pressable>

        <Pressable
          onPress={() => navigation.navigate('join')}
          style={styles.button}>
          <Text>Join Call</Text>
        </Pressable>

        <Pressable
          onPress={() => navigation.navigate('contacts')}
          style={styles.button}>
          <Text>Contacts</Text>
        </Pressable>
      </View>

      <Button title="Sign out" onPress={() => supabase.auth.signOut()} />
      <Button title="Chats" onPress={() => navigation.navigate('chats')} />
    </View>
  );
};

export default Homescreen;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    padding: 10,
  },
  button: {
    flex: 1,
    backgroundColor: 'gainsboro',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
});
