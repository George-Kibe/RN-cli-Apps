import { View, FlatList } from 'react-native'
import React from 'react'
import Story from "../Story"
import { StyleSheet } from 'react-native'

const data =[
    {
      imageUrl:"https://i.ibb.co/MyddYHc/Watch.jpg",
      name:"Alex Johnson",
    },
    {
      imageUrl:"https://i.ibb.co/p0c4YbL/placeholder3.jpg",
      name:"George Strait",
    },
    {
      imageUrl:"https://i.ibb.co/GQyvhfM/realestate19.jpg",
      name:"James Jackson",
    },
    {
      imageUrl:"https://i.ibb.co/TYTgYjc/realestate6.jpg",
      name:"John FitzGerald",
    },

]

const UserStoriesPreview = () => {
  return (
    <FlatList 
      data={data}
      style={styles.container}
      keyExtractor={({name}) =>name}
      renderItem={({item}) => <Story imageUrl={item.imageUrl} name={item.name} />}
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
export default UserStoriesPreview