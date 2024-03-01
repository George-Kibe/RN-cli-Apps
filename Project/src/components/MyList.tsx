/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react-native/no-inline-styles */
import React, {useCallback, useEffect, useRef, useState} from 'react';
import {Character} from '../types';
import {
  ActivityIndicator,
  FlatList,
  View,
  useWindowDimensions,
} from 'react-native';
// import character from '../data/character.json';
import CharacterListItem from './CharacterListItem';

const initialPage = 'https://rickandmortyapi.com/api/character';

const MyList = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [nextPage, setNextPage] = useState('');

  const {width} = useWindowDimensions();
  const itemHeight = width + 40;

  const renderItem = useCallback(
    ({item}) => <CharacterListItem character={item} />,
    [],
  );
  // Use case: increase impression count for posts
  // that are visible on the screen for more than 0.5 seconds
  const viewabilityConfigCallbackPairs = useRef([
    {
      viewabilityConfig: {
        minimumViewTime: 500,
        itemVisiblePercentThreshold: 50,
      },
      onViewableItemsChanged: ({changed, viewableItems}) => {
        changed.forEach(changedItem => {
          if (changedItem.isViewable) {
            console.log('++ Impression for: ', changedItem.item.id);
          }
        });
      },
    },
  ]);

  const fetchItems = async (page: string) => {
    setLoading(true);
    try {
      const response = await fetch(page);
      const jsonResponse = await response.json();
      // console.log(JSON.stringify(jsonResponse, null, 2));
      setItems(existingItems => {
        return [...existingItems, ...jsonResponse.results];
      });
      setNextPage(jsonResponse.info.next);
      setLoading(false);
    } catch (error) {
      console.log('Error Loading results: ', error);
      setLoading(false);
    }
  };
  const loadMore = async () => {
    if (loading) {
      return;
    }
    console.log('Load More From Page:', nextPage);
    fetchItems(nextPage);
    try {
    } catch (error) {}
  };
  const onRefresh = () => {
    if (loading) {
      return;
    }
    setItems([]);
    // setNextPage(initialPage);
    fetchItems(initialPage);
  };

  useEffect(() => {
    fetchItems(initialPage);
  }, []);
  if (loading && items.length < 1) {
    return <ActivityIndicator />;
  }

  return (
    <FlatList
      data={items}
      renderItem={renderItem}
      contentContainerStyle={{gap: 10}}
      columnWrapperStyle={{gap: 10}}
      onEndReached={loadMore}
      onEndReachedThreshold={3}
      refreshing={loading}
      onRefresh={onRefresh}
      initialNumToRender={8}
      // debug={true}
      getItemLayout={(data, index) => ({
        length: itemHeight,
        offset: (itemHeight + 5) * index,
        index,
      })}
      ListFooterComponent={() => (
        <View>{loading && <ActivityIndicator />}</View>
      )}
      viewabilityConfigCallbackPairs={viewabilityConfigCallbackPairs.current}
      numColumns={2}
    />
  );
};

export default MyList;
