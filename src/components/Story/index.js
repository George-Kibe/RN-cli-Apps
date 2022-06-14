import { View, Text } from 'react-native'
import React from 'react'
import ProfilePicture from '../ProfilePicture'
import styles from './styles'

const Story = ({imageUrl, name}) => {
  return (
    <View style={styles.container}>
      <ProfilePicture uri={imageUrl} />
      <Text style={styles.name}>{name}</Text>
    </View>
  )
}

export default Story