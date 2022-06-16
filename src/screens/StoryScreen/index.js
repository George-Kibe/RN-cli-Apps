import { Text, View, SafeAreaView, ActivityIndicator, ImageBackground, TouchableWithoutFeedback,Dimensions, Alert, TextInput} from 'react-native'
import React, {useState, useEffect} from 'react'
import { useRoute, useNavigation } from '@react-navigation/native'
import stories from "../../data/stories"
import ProfilePicture from "../../components/ProfilePicture"
import Feather from "react-native-vector-icons/Feather"
import IonIcons from "react-native-vector-icons/Ionicons"
import styles from "./styles"

const StoryScreen = () => {
  const [userStory, setUserStory] = useState(null)
  const [activeStoryIndex, setActiveStoryIndex] = useState(0)
  const [activeStory, setActiveStory] = useState(null)

  const navigation = useNavigation()
  const route = useRoute()
  const userId = route.params.userId

  useEffect(() => {
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
    if(activeStoryIndex === 0){
      navigateToPreviousUser()
    }
    setActiveStoryIndex(activeStoryIndex - 1)
  }
  const handleNextStory = () =>{
    if(activeStoryIndex >= userStory.stories.length - 1){
      navigateToNextUser()
    }
    setActiveStoryIndex(activeStoryIndex + 1 )
  }
  const navigateToNextUser = () =>{
    navigation.push("Story", {userId: (parseInt(userId) + 1).toString() })
  }
  const navigateToPreviousUser = () =>{
    navigation.push("Story", {userId: (parseInt(userId) - 1).toString() })
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
          <View style={styles.userInfo}>
            <ProfilePicture uri={userStory.user.imageUrl} size={50}/>
            <Text style={styles.username}>{userStory.user.name}</Text>
            <Text style={styles.postedTime}>{activeStory.postedTime}</Text>
          </View>
          <View style={styles.bottomContainer}>
            <View style={styles.cameraAndInput}>
              <Feather style={styles.cameraButton} name="camera" size={35} color={"#ffffff"}/>
              <TextInput style={styles.textInput} placeholderTextColor={"white"}
                placeholder='Send a message...' />  
            </View>             
            <IonIcons style={styles.messageButton} name="paper-plane-outline" size={35} color={"#ffffff"}/>             
          </View>          
        </ImageBackground>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  )
}

export default StoryScreen