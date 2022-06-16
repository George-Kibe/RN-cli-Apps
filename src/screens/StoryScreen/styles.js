import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        height:"100%",
    },
    image:{
        resizeMode:"cover",
        justifyContent:"space-between",
        flex:1
    },
    userInfo:{
        flexDirection:"row",
        alignItems:"center",
        marginTop:10
    },
    username:{
        color:"white",
        fontWeight:"500",
        fontSize:16
    },
    postedTime:{
        color:"#fff",
        marginLeft:20,
        fontWeight:"500",
        fontSize:16
    },
    bottomContainer:{
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"center",
        margin:10,
        marginHorizontal:8
    },
    cameraButton:{
        flex:1,
        color:"white",
        // alignItems:"center",
        // justifyContent:"center",
        // borderWidth:1,
        // borderColor:"white",
        // borderRadius:50,
    },
    cameraAndInput:{
        flexDirection:"row",
        alignItems:"center",
        flex:8,
        marginHorizontal:8
    },
    textInput:{
        flex:8,
        alignSelf:"center",
        color:"white",
        borderWidth:2,
        borderColor:"white",
        borderRadius:50,
        height:"100%",
        marginLeft:8,
        marginRight:0
    },
    messageButton:{
        flex:1,
    }
})

export default styles;