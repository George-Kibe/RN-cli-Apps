import { View, FlatList } from 'react-native'
import React, {useState, useEffect} from 'react'
import UserStoryPreview from '../UserStoryPreview'
import {API, graphqlOperation} from "aws-amplify"
import { StyleSheet } from 'react-native'
import storys from "../../data/stories"
import {listStories} from "../../graphql/queries"

const UsersStoriesPreview = () => {
  const [stories, setStories] = useState([])

  useEffect(() =>{
    fetchStories()
  },[])

  const fetchStories = async () =>{
    try{
      const storiesData = await API.graphql(graphqlOperation(listStories()))
      //setStories(storiesData.data.listStories.items)
      console.log("StoriesData",storiesData)
      
    }catch (error){
      console.log("Error:", error)
    }
  }
  console.log(stories)
  return (
    <FlatList 
      data={storys}
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