import { View, FlatList } from 'react-native'
import React from 'react'
import UserStoryPreview from '../UserStoryPreview'
import { StyleSheet } from 'react-native'
import stories from "../../data/stories"

const UsersStoriesPreview = () => {
  return (
    <FlatList 
      data={stories}
      style={styles.container}
      keyExtractor={({user:{id}}) => id}
      renderItem={({item}) => <UserStoryPreview story={item} />}
      horizontal
      showsHorizontalScrollIndicator={false}
    />
  )
}

const styles = StyleSheet.create({
  container:{
    marginBottom:15
  }
})
export default UsersStoriesPreview