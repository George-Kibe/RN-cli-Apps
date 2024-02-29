import { View, Text, FlatList } from 'react-native'
import React, {useState, useEffect} from 'react'
import {API, graphqlOperation, DataStore} from "aws-amplify"
import Post from "../Post"
import UsersStoryPreview from "../UsersStoriesPreview"
import {listPosts} from "../../graphql/queries"

const Feed = () => {
  const [posts, setPosts] = useState([])
  useEffect(() =>{
    fetchPosts();
  },[])

  const fetchPosts = async () =>{
    try{
      const postData = await API.graphql(graphqlOperation(listPosts));
      setPosts(postData.data.listPosts.items)
      //warn(postData.data.listPosts.items)
    }catch (error){
      console.log(error.message)
    }
  }
  //console.log("Posts:", posts)
  return (
    <FlatList 
        data={posts}
        ListHeaderComponent={UsersStoryPreview}
        renderItem={({item}) => <Post post={item} />}
        keyExtractor={({id}) => id}
    />
  )
}

export default Feed