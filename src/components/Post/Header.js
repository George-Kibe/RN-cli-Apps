import { View, Text } from 'react-native'
import React from 'react'
import ProfilePicture from '../ProfilePicture'
import { StyleSheet } from 'react-native'

const Header = ({imageUrl, name}) => {
  return (
    <View style={styles.container}>
      <ProfilePicture uri={imageUrl} size={40}/>
      <Text style={styles.name}>{name}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flexDirection:"row",
        //alignItems:"center"
    },
    name:{
        textAlign:"center",
        alignSelf:"center",
        color:"#3c3c3c"
    }
})
export default Header