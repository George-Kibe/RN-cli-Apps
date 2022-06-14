import { View, Image } from 'react-native'
import React from 'react'
import styles from './styles'

const ProfilePicture = ({uri}) => {
  return (
    <View style={styles.container}>
        <Image  style={styles.image} source={{uri: uri}}/>
    </View>
  )
}

export default ProfilePicture