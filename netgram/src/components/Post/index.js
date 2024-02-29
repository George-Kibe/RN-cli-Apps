import { View, Text } from 'react-native'
import React from 'react'
import Header from './Header'
import Body from './Body'
import Footer from './Footer'
import { ActivityIndicator } from 'react-native'

const Post = ({post}) => {
  const {user, createdAt, caption, likes} = post
  //console.warn(post)
  if(!user){
    return(
      <View>
        <ActivityIndicator />
        <Text>Image or user missing!</Text>
      </View>
    )
  }
  return (
    <View>
      <Header image={user.image} name={user.name}/>
      <Body image={post.image}/>
      <Footer caption={caption} likes={likes} createdAt={createdAt}/>
    </View>
  )
}

export default Post