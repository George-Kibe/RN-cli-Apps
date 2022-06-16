import { SafeAreaView, ActivityIndicator, ImageBackground, TouchableWithoutFeedback,Dimensions} from 'react-native'
import React, {useState, useEffect} from 'react'
import { useRoute } from '@react-navigation/native'
import stories from "../../data/stories"
import styles from "./styles"

const StoryScreen = () => {
  const [userStory, setUserStory] = useState(null)
  const [activeStoryIndex, setActiveStoryIndex] = useState(0)
  const [activeStory, setActiveStory] = useState(null)

  const route = useRoute()

  useEffect(() => {
    const userId = route.params.userId
    const userStory = stories.find(stories => stories.user.id === userId)
    setUserStory(userStory)
    setActiveStoryIndex(0)
  }, [])
  
  useEffect(() => {
    if (!userStory){
      return
    }
    if (activeStoryIndex < 0){
      setActiveStoryIndex(0)
    }
    if (activeStoryIndex >= userStory.stories.length){
      setActiveStoryIndex(userStory.stories.length - 1)
    }
    setActiveStory(userStory.stories[activeStoryIndex])
  }, [activeStoryIndex, userStory])


  const handlePreviousStory = () =>{
    setActiveStoryIndex(activeStoryIndex - 1)
  }
  const handleNextStory = () =>{
    setActiveStoryIndex(activeStoryIndex + 1 )
  }

  const handlePress = (event) =>{
    const x = event.nativeEvent.locationX
    const y = event.nativeEvent.locationY
    const screenWidth = Dimensions.get("window").width

    if(x < screenWidth /2 ){  
      handlePreviousStory()
    }else{ 
      handleNextStory()
    }
    
  }

  if (!activeStory){
    return(
      <SafeAreaView>
        <ActivityIndicator />
      </SafeAreaView>
    )
  }
  //console.warn(activeStory.imageUrl)
  return (
    <SafeAreaView style={styles.container}>      
      <TouchableWithoutFeedback onPress={handlePress}>
        <ImageBackground source={{uri:activeStory.imageUrl}} style={styles.image}>
        </ImageBackground>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  )
}

export default StoryScreen