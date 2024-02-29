import { View, SafeAreaView } from 'react-native'
import React from 'react'
//import UserStoriesPreview from '../../components/UserStoriesPreview'
import Feed from '../../components/Feed'

const HomeScreen = () => {
  return (
    <SafeAreaView>
      <Feed />
    </SafeAreaView>
  )
}

export default HomeScreen