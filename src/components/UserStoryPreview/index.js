import { View, Text, TouchableOpacity, Alert } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import ProfilePicture from '../ProfilePicture'
import styles from './styles'


const UserStoryPreview = ({story}) => {
  const {user:{id, imageUrl, name}} = story
  const navigation = useNavigation()
  
  const onPress = () =>{
    //Alert.alert(`${name} story pressed`)
    navigation.navigate("Story", {userId:id})
  }
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <ProfilePicture uri={imageUrl} />
      <Text style={styles.name}>{name}</Text>
    </TouchableOpacity>
  )
}

export default UserStoryPreview