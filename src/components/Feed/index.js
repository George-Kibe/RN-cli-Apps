import { View, Text, FlatList } from 'react-native'
import React from 'react'
import Post from "../Post"
import UsersStoryPreview from "../UsersStoriesPreview"

const data =[
    {
        id:"1",
        user:{
          image:"https://i.ibb.co/MyddYHc/Watch.jpg",
          username:"George Kibe Senior"
        },
        imageUrl:"https://i.ibb.co/GQyvhfM/realestate19.jpg",
        caption:"Beautiful city Netgram",
        likesCount: 5689,
        postedAt: "6 minutes ago"
    },
    {
        id:"2",
        user:{
          image:"https://i.ibb.co/MyddYHc/Watch.jpg",
          username:"George Kibe Junior"
        },
        imageUrl:"https://i.ibb.co/p0c4YbL/placeholder3.jpg",
        caption:"Beautiful city Netgram",
        likesCount: 5689,
        postedAt: "6 minutes ago"
    },
    {
        id:"3",
        user:{
          image:"https://i.ibb.co/p0c4YbL/placeholder3.jpg",
          username:"George Kibe Senior"
        },
        imageUrl:"https://i.ibb.co/GQyvhfM/realestate19.jpg",
        caption:"Beautiful city Netgram",
        likesCount: 5689,
        postedAt: "6 minutes ago"
    },

]
const Feed = () => {
  return (
    <FlatList 
        data={data}
        ListHeaderComponent={UsersStoryPreview}
        renderItem={({item}) => <Post post={item} />}
        keyExtractor={({id}) => id}
    />
  )
}

export default Feed