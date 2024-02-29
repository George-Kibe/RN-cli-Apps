import { View, Text, TouchableOpacity, Alert } from 'react-native'
import React, {useState, useEffect} from 'react'
import { StyleSheet } from 'react-native'
import ADIcon from "react-native-vector-icons/AntDesign"
import FontistoIcon from "react-native-vector-icons/Fontisto"
import IonIcon from "react-native-vector-icons/Ionicons"
import FontAwesome from "react-native-vector-icons/FontAwesome"

const Footer = ({createdAt, caption, likes:likesCountProp}) => {
  const [isLiked, setIsLiked] = useState(false)
  const [likesCount, setlikesCount] = useState(0)
  const likePressed = () =>{
    setIsLiked(!isLiked)
    const amount = isLiked? -1 : 1 ;
    setlikesCount(likesCount + amount)
  }
  useEffect(() => {
    setlikesCount(likesCountProp)
  }, [])
  
  return (
    <View style={styles.container}>
      <View style={styles.iconsContainer}>
        <View style={styles.leftIcons}>
          <TouchableOpacity onPress={likePressed}>
            {
              isLiked ? <ADIcon name="heart" size={25} color={"#dc143c"}/>
              : <ADIcon name="hearto" size={25} color={"#545454"}/>
            }
            
          </TouchableOpacity>
          <FontistoIcon name="comment" size={23} color={"#545454"}/>
          <IonIcon name="paper-plane-outline" size={28} color={"#545454"}/>
        </View>
        <FontAwesome name="bookmark-o" size={25}/>
      </View>
      <Text style={styles.likes}>{likesCount} Likes</Text>
      <Text style={styles.caption}>{caption}</Text>
      <Text style={styles.createdAt}>{createdAt}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    margin:10
  },
  iconsContainer:{
    flexDirection:"row",
    justifyContent:"space-between"
  },
  leftIcons:{
    flexDirection:"row",
    width:120,
    justifyContent:"space-between"
  },
  likes:{
    fontWeight:'bold',
    margin:3,
  },
  caption:{
    margin:3,
  },
  createdAt:{
    color:"#bcbcbc",
    margin:3,
  }
})
export default Footer