/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react-native/no-inline-styles */
import {
  StyleSheet,
  SafeAreaView,
  FlatList,
  // useWindowDimensions,
} from 'react-native';
import React, {useCallback, useEffect, useRef, useState} from 'react';
import CharacterListItem, {Character} from '../components/CharacterListItem';
import {ActivityIndicator} from 'react-native';
import {Text, View, ViewToken} from 'react-native';
// import characters from '../data/character.json';

type CharacterListType = {
  character: Character;
};

const RickAndMorty = () => {
  const initialPage = 'https://rickandmortyapi.com/api/character';
  const [loading, setLoading] = useState<Boolean>(false);
  const [items, setItems] = useState<CharacterListType[]>([]);
  const [nextPage, setNextPage] = useState('');
  const [currentPostId, setCurrentPostId] = useState('1');
  // const {width} = useWindowDimensions();

  const fetchNextItems = async (url: string) => {
    if (loading) {
      return;
    }
    console.log('fetching items from: ', url);
    setLoading(true);
    try {
      const response = await fetch(url);
      const jsonResponse = await response.json();
      // console.log(JSON.stringify(jsonResponse, null, 2));
      setItems(exisitingItems => {
        return [...exisitingItems, ...jsonResponse.results];
      });
      setNextPage(jsonResponse.info.next);
      setLoading(false);
    } catch (error: any) {
      console.log(error.message);
      setLoading(false);
    }
  };

  // Use case: increase impression count for posts
  // that are visible on the screen for more than 0.5 seconds
  const viewabilityConfigCallbackPairs = useRef([
    {
      viewabilityConfig: {
        itemVisiblePercentThreshold: 50, // better to use whn items does not occupy 100% height
        minimumViewTime: 500, // in millisends half a second
      },
      onViewableItemsChanged: ({
        changed,
        viewableItems,
      }: {
        changed: Array<ViewToken>;
        viewableItems: Array<ViewToken>;
      }) => {
        // console.log('Changed: ', changed);
        // console.log('Viewable Items: ', viewableItems);
        if (viewableItems.length > 0 && viewableItems[0].isViewable) {
          setCurrentPostId(viewableItems[0].item.id);
        }
        changed.forEach(changedItem => {
          if (changedItem.isViewable) {
            console.log('++ Impression for: ', changedItem.item.id);
          }
        });
      },
    },
  ]);

  useEffect(() => {
    fetchNextItems(initialPage);
  }, []);

  const handleRefresh = () => {
    setItems([]);
    setNextPage(initialPage);
    fetchNextItems(initialPage);
  };
  // avoid arrow/anonymous functions in the renderItem
  const renderItem = useCallback(
    ({item}) => <CharacterListItem character={item} />,
    [],
  );

  if (items.length <= 0) {
    // to ensure debug works even before the API is called
    return <ActivityIndicator size={'large'} />;
  }
  // const itemHeight = width + 40;

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={items}
        renderItem={renderItem}
        contentContainerStyle={{gap: 10}}
        refreshing={loading}
        onRefresh={handleRefresh}
        ListFooterComponent={() => (
          <View>
            {loading && <ActivityIndicator size={'large'} />}
            <Text
              onPress={() => fetchNextItems(nextPage)}
              style={styles.loadMore}>
              Load More...
            </Text>
          </View>
        )}
        extraData={false}
        onEndReached={() => fetchNextItems(nextPage)} // Load items when end of list is reached
        onEndReachedThreshold={5}
        // debug={true}
        // removeClippedSubviews
        initialNumToRender={1} // default to one if the primary component has 100% height
        windowSize={2}
        viewabilityConfigCallbackPairs={viewabilityConfigCallbackPairs.current}
        showsVerticalScrollIndicator={false}
        pagingEnabled
        // getItemLayout={(data, index) => ({
        //   length: itemHeight,
        //   offset: (itemHeight + 5) * index,
        //   index,
        // })}
        numColumns={4}
      />
    </SafeAreaView>
  );
};

export default RickAndMorty;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  loadMore: {
    textAlign: 'center',
    fontSize: 20,
    alignSelf: 'center',
    fontWeight: 'bold',
    color: 'blue',
  },
});
