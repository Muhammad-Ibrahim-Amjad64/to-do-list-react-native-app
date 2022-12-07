import React from 'react';
import { StyleSheet,View, Text,TouchableOpacity, TouchableHighlight, Touchablef} from "react-native";
// import { TouchableOpacity } from 'react-native-web';

const Goalitem=(props)=>{

    return(
        // touchable is a class . TouchableHighLight 
        // active opacity touchable opacity ki opacity ko control kry ha 
        <TouchableOpacity activeOpacity={0.8} onPress={props.deleteGoal.bind(this,props.id)}>
            <View >
                <Text  style={styles.listofgoals}>{props.goaltitle}</Text>
            </View>       
        </TouchableOpacity>


         
        
        
        
        );
        
        //   goalitem.item.key se hm key print krwa skta 
        //  islo view mn islia wrap kia coz view zayada styling support krta ha
        
    };
    export default Goalitem;



const styles = StyleSheet.create({
    
    listofgoals:{
        marginHorizontal:80,
        color:'rgb(154, 255, 154)',
        borderColor:'white',
        borderWidth:2,
        marginVertical: 20,
        padding:10,
        fontSize:20,
        backgroundColor:'rgb(16, 33, 27)',
        borderRadius:10,
        
        // fontWeight:2,
        
    }
    
    
    
})






