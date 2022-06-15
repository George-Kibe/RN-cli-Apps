import { View, Text } from 'react-native'
import React from 'react'
import UserStoriesPreview from '../../components/UserStoriesPreview'
import Post from '../../components/Post'

const post ={
  user:{
    image:"https://i.ibb.co/MyddYHc/Watch.jpg",
    username:"George Kibe Senior"
  },
  imageUrl:"https://i.ibb.co/GQyvhfM/realestate19.jpg",
  caption:"Beautiful city Netgram",
  likesCount: 5689,
  postedAt: "6 minutes ago"
}

const HomeScreen = () => {
  return (
    <View>
      <UserStoriesPreview />
      <Post post={post}/>
    </View>
  )
}

export default HomeScreen