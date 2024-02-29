/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
import {ActivityIndicator, FlatList, StyleSheet} from 'react-native';
import character from '../data/character.json';
import CharacterListItem from './CharacterListItem';

const MyList = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);

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
      } catch (error) {
        console.log('Error Loading results: ', error);
        setLoading(false);
      }
    };
    fetchItems();
  }, []);
  if (loading || items.length < 1) {
    return <ActivityIndicator />;
  }

  return (
    <FlatList
      data={items}
      renderItem={({item}) => <CharacterListItem character={item} />}
      contentContainerStyle={{gap: 10}}
    />
  );
};

export default MyList;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
  },
});
