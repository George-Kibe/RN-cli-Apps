/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react-native/no-inline-styles */
import {StyleSheet, SafeAreaView, FlatList} from 'react-native';
import React, {useEffect, useState} from 'react';
import CharacterListItem from '../components/CharacterListItem';
import {ActivityIndicator} from 'react-native';
import {Text} from 'react-native';
import {View} from 'react-native';
// import characters from '../data/character.json';

const RickAndMorty = () => {
  const [loading, setLoading] = useState<Boolean>(false);
  const [items, setItems] = useState([]);
  const [nextPage, setNextPage] = useState(
    'https://rickandmortyapi.com/api/character',
  );

  const fetchNextItems = async () => {
    if (loading) {
      return;
    }
    console.log('fetching items from: ', nextPage);
    setLoading(true);
    try {
      const response = await fetch(nextPage);
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

  useEffect(() => {
    fetchNextItems();
  }, []);

  // if (loading) {
  //   return <ActivityIndicator size={'large'} />;
  // }
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={items}
        renderItem={({item}) => <CharacterListItem character={item} />}
        contentContainerStyle={{gap: 10}}
        ListFooterComponent={() => (
          <View>
            {loading && <ActivityIndicator size={'large'} />}
            <Text onPress={fetchNextItems} style={styles.loadMore}>
              Load More...
            </Text>
          </View>
        )}
        onEndReached={fetchNextItems} // Load items when end of list is reached
        onEndReachedThreshold={5}
        debug={true}
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
