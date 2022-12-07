import React from "react";
import {Text , View , StyleSheet} from "react-native";
const Header =(props)=>{

    return(
        <View style={styles.Header}>
            <Text style={styles.HeaderTitle} >{props.title}</Text>
        </View>
    )

}

const styles = StyleSheet.create({
    Header:{
        width:'100%',
        backgroundColor:'rgb(127, 255, 208)',
        height:90,
        paddingTop:36,
        justifyContent:"center",
        alignItems:"center"



    },

    HeaderTitle:{
        color:'black',
        fontSize:25,
        // fontWeight:"600"

        
        // borderColor:'black',
        // borderWidth:2
        // fontWeight:13,

    }


})

export default Header;