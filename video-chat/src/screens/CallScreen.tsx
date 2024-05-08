/* eslint-disable react/no-unstable-nested-components */
import {ActivityIndicator, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {
  CallContent,
  StreamCall,
  useStreamVideoClient,
  useCalls,
  RingingCallContent,
  CallTopView,
} from '@stream-io/video-react-native-sdk';
import { useNavigation } from '@react-navigation/native';
// import {client} from '../lib/stream';

// const callId = 'default_7d46bbe7-2577-4a2b-b39f-fef833e8c177';

const CallScreen = ({route}) => {
  const navigation = useNavigation();
  const callId = route.params?.callId;
  const client = useStreamVideoClient();
  // const call = client?.call('default', callId);
  const [loaded, setLoaded] = useState(false);
  const calls = useCalls();
  const call = calls[0];

  useEffect(() => {
    if (!call && loaded) {
      navigation.goBack();
      return;
    }
    if (call && !loaded) {
      setLoaded(true);
    }
  }, [call]);

  // useEffect(() => {
  //   call?.join({create: true});
  // }, [call]);

  if (!call) {
    return (
      <View>
        <ActivityIndicator />
        <Text> Failed, try Again</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <StreamCall call={call}>
        <RingingCallContent
          CallTopView={() => <CallTopView title={`ID: ${call.id}`} />}
          onHangupCallHandler={() => navigation.navigate('Home')}
        />
      </StreamCall>
    </View>
  );
};

export default CallScreen;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
  },
});
