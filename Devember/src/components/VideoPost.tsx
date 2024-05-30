import {Dimensions, Pressable, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Video, {VideoRef} from 'react-native-video';
import {SafeAreaView} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {Alert} from 'react-native';
const {height, width} = Dimensions.get('window');

type VideoPostType = {
  post: {
    id: string;
    video: string;
    caption: string;
  };
  currentPostId: string;
};
const VideoPost = ({post, currentPostId}: VideoPostType) => {
  const videoRef = useRef<VideoRef>(null);
  const [status, setStatus] = useState();

  const onBuffer = () => {
    // Alert.alert('Buffering!');
  };
  const onError = () => {
    // Alert.alert(
    //   'Error loading Video, Ensure you have stable internet connection!',
    // );
  };
  const isPlaying = status?.isPlaying;
  const handlePress = () => {
    if (!videoRef.current) {
      return;
    }
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.resume();
      // videoRef.current.presentFullscreenPlayer();
    }
  };
  // console.log('Status: ', status);
  useEffect(() => {
    if (!videoRef.current) {
      return;
    }
    if (currentPostId !== post.id) {
      videoRef.current.pause();
    }
    if (currentPostId === post.id) {
      videoRef.current.resume();
    }
  }, [currentPostId, videoRef.current]);

  return (
    <View style={styles.contaianer}>
      <Video
        source={{uri: post.video}}
        ref={videoRef}
        onBuffer={onBuffer}
        onError={onError}
        style={[styles.video, StyleSheet.absoluteFill]}
        resizeMode="cover"
        onPlaybackStateChanged={status => setStatus(status)}
        repeat={true}
        muted={false}
      />
      <Pressable onPress={handlePress} style={styles.content}>
        <LinearGradient
          colors={['transparent', 'rgba(0, 0, 0, 0.8)']}
          style={[StyleSheet.absoluteFill, styles.overlay]}
        />
        {!isPlaying && (
          <Ionicons
            style={styles.playIcon}
            name="play"
            size={30}
            color="rgba(255, 255, 255,0.6)"
          />
        )}
        <SafeAreaView style={{flex: 1}}>
          <View style={styles.footer}>
            <View style={styles.leftColumn}>
              <Text style={styles.caption}>{post.caption}</Text>
            </View>
            <View style={styles.rightColumn}>
              <Ionicons name="heart" size={30} color="white" />
              <Ionicons name="share-social-sharp" size={30} color="white" />
              <Ionicons name="bookmark" size={30} color="white" />
            </View>
          </View>
        </SafeAreaView>
      </Pressable>
    </View>
  );
};

export default VideoPost;

const styles = StyleSheet.create({
  contaianer: {
    height,
  },
  video: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  content: {
    flex: 1,
    padding: 10,
  },
  playIcon: {
    position: 'absolute',
    alignSelf: 'center',
    top: '50%',
  },
  footer: {
    marginTop: 'auto',
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  leftColumn: {
    flex: 1,
  },
  rightColumn: {
    gap: 10,
  },
  caption: {
    color: 'white',
    fontSize: 16,
    fontFamily: 'Inter',
    padding: 10,
  },
  overlay: {
    top: '50%',
  },
});
