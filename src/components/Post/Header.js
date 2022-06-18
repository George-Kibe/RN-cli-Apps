import { View, Text } from 'react-native'
import React from 'react'
import ProfilePicture from '../ProfilePicture'
import { StyleSheet } from 'react-native'
import Icon from "react-native-vector-icons/Entypo"

const Header = ({image, name}) => {
  return (
    <View style={styles.container}>
      <View style={styles.left}>
        <ProfilePicture uri={image} size={40}/>
        <Text style={styles.name}>{name}</Text>
      </View>
      <View style={styles.right}>
        <Icon name="dots-three-vertical" size={15}/>
      </View>      
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center"
    },
    left:{
      flexDirection:"row"
    },
    right:{
      marginRight:10,
    },
    name:{
        textAlign:"center",
        alignSelf:"center",
        color:"#3c3c3c"
    }
})
export default Header