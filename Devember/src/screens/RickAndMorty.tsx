/* eslint-disable react-native/no-inline-styles */
import {StyleSheet, SafeAreaView, FlatList} from 'react-native';
import React, {useEffect, useState} from 'react';
import CharacterListItem from '../components/CharacterListItem';
import { ActivityIndicator } from 'react-native';
// import characters from '../data/character.json';

const RickAndMorty = () => {
  const [loading, setLoading] = useState<Boolean>(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          'https://rickandmortyapi.com/api/character',
        );
        const jsonResponse = await response.json();
        // console.log(JSON.stringify(jsonResponse, null, 2));
        setItems(jsonResponse.results);
        setLoading(false);
      } catch (error: any) {
        console.log(error.message);
        setLoading(false);
      }
    };
    fetchItems();
  }, []);

  if (loading){
    return <ActivityIndicator size={'large'} />;
  }
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={items}
        renderItem={({item}) => <CharacterListItem character={item} />}
        contentContainerStyle={{gap: 10}}
      />
    </SafeAreaView>
  );
};

export default RickAndMorty;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
