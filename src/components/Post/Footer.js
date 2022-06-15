import { View, Text } from 'react-native'
import React from 'react'
import { StyleSheet } from 'react-native'
import { Icon } from 'react-native-vector-icons/icon'

const Footer = ({postedAt, caption, likesCount}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.likes}>{likesCount} Likes</Text>
      <Text style={styles.caption}>{caption}</Text>
      <Text style={styles.postedAt}>{postedAt}</Text>
      {/*<Icon name="rocket" size={30} color="#900"/> */}
    </View>
  )
}

const styles = StyleSheet.create({
  container:{

  },
  likes:{
    fontWeight:'bold',
    margin:3,
  },
  caption:{
    margin:3,
  },
  postedAt:{
    color:"#bcbcbc",
    margin:3,
  }
})
export default Footer