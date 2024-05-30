import {StyleSheet, View, FlatList} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import VideoPost from '../components/VideoPost';

const dummyposts = [
  {
    id: '1',
    video:
      'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/vertical-videos/1.mp4',
    caption: 'Hey there',
  },
  {
    id: '2',
    video:
      'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/vertical-videos/2.mp4',
    caption: 'Caption of the post',
  },

  {
    id: '3',
    video:
      'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/vertical-videos/3.mp4',
    caption: 'Hola',
  },
  {
    id: '4',
    video:
      'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/vertical-videos/4.mp4',
    caption: 'Piano practice',
  },
  {
    id: '5',
    video:
      'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/vertical-videos/5.mp4',
    caption: 'Hello World!',
  },
];

const Homescreen = () => {
  const [currentPostId, setCurrentPostId] = useState(dummyposts[0].id);
  const [posts, setPosts] = useState<typeof dummyposts>([]);

  const viewabilityConfigCallbackPairs = useRef([
    {
      viewabilityConfig: {
        itemVisiblePercentThreshold: 50,
        // minimumViewTime: 100,
      },
      onViewableItemsChanged: ({changed, viewableItems}) => {
        // console.log('Changed: ', changed);
        // console.log('Viewable Items: ', viewableItems);
        if (viewableItems.length > 0 && viewableItems[0].isViewable) {
          setCurrentPostId(viewableItems[0].item.id);
        }
      },
    },
  ]);
  const onEndReached = () => {
    // fetch more posts from database
    setPosts(currentPosts => [...currentPosts, ...dummyposts]);
  };

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        // const response = await fetch('');
        // const data = await response.json();
        setPosts(dummyposts);
      } catch (error) {
        console.error(error);
      }
    };
    fetchPosts();
  }, []);

  return (
    <View style={styles.contaianer}>
      <FlatList
        data={posts || dummyposts}
        renderItem={({item}) => (
          <VideoPost post={item} currentPostId={currentPostId} />
        )}
        pagingEnabled
        // keyExtractor={(item, index) => `${item.id}-${index}`}
        viewabilityConfigCallbackPairs={viewabilityConfigCallbackPairs.current}
        showsVerticalScrollIndicator={false}
        // onEndReached={onEndReached}
        onEndReachedThreshold={3}
      />
    </View>
  );
};

export default Homescreen;

const styles = StyleSheet.create({
  contaianer: {
    flex: 1,
    backgroundColor: 'black',
  },
});
