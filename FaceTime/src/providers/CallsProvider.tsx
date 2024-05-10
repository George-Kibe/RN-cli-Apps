import { useNavigation } from '@react-navigation/native';
import {useCalls} from '@stream-io/video-react-native-sdk';

import {PropsWithChildren, useEffect} from 'react';

export function CallsProvider({children}: PropsWithChildren) {
  const navigation = useNavigation();
  const calls = useCalls();

  useEffect(() => {
    if (calls.length > 0) {
      navigation.navigate('call');
    }
  }, [calls]);

  return children;
}
