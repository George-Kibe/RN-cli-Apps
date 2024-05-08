import {StreamVideoClient, User} from '@stream-io/video-react-native-sdk';

const apiKey = '67crtw84yr65';
const userId = 'GeorgeKibe';
const token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiR2VvcmdlS2liZSJ9.buESIT7YOzrgKbvxjNBHP8DfyA9piC8FfB_GmMKvKC8';
// const callId = 'GeorgeKibe';
const user: User = {id: userId};
export const client = new StreamVideoClient({apiKey, user, token});
