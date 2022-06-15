import { View, Text } from 'react-native'
import React from 'react'
import Header from './Header'
import Body from './Body'
import Footer from './Footer'

const Post = ({post}) => {
  const {user, postedAt, caption, likesCount} = post
  return (
    <View>
      <Header imageUrl={user.image} name={user.username}/>
      <Body imageUrl={post.imageUrl}/>
      <Footer caption={caption} likesCount={likesCount} postedAt={postedAt}/>
    </View>
  )
}

export default Post