
import React,{ useState } from 'react';
import { StyleSheet, View, Button, TextInput ,Modal} from 'react-native';



const GoalInput=(props)=>{
  const [goal,setgoal]= useState('');

  const goalDatahandler=()=>{
    props.onAddingGoal(goal);
    setgoal('');


  }
 
  const  goalHandeler=(enteredText)=> {
    setgoal(enteredText)
    // ye set goal goal ki value update kry ga with every  key stroke
  }
    return(
        // We can set visibility of that modal // if 
    // <Modal>
    <Modal  visible={props.mode} animationType={'fade'}>  
      <View style={styles.screen}>
      {/* is view mn adding  */}
      <TextInput placeholder='type your goal please :)' style={styles.textInput} onChangeText={goalHandeler}  value={goal}/>

      <View style={styles.buttons}>
        <View style={styles.Button}>

      <Button title='Add to your task' color={'rgb(20, 23, 81)'}  onPress={goalDatahandler} />
        </View>

      <View style={styles.Button}>
      <Button  title='Cancel' color="red" onPress={props.cancel} />
      </View>

      </View>
      

      {/* <Button title='Add to your task' color={'rgb(20, 23, 81)'}  onPress={props.onAddingGoal.bind(this,goal)} /> */}
      {/* onPress={()=>props.onAddingGoal(goal)}    // confirmed that is working        that would work */}

      {/* but in react native that approach is not very effective we can use vanila js syntax  where bind is a function in which 'this' must be passed and actual parameter after that so  bind(this , goal) */}




      {/* //'rgb(134, 255, 215)'  ye wo sea green button*/} 

      </View>
    </Modal>
    ) 

}

export default GoalInput;
    
    

const styles = StyleSheet.create({

  Button:{
    width:'40%'
  },

  screen:{
    // view is not actually occupying all the avalible space on the screen. So, by setting flex:1 it will occupy all space and that css will work nicely for modal view
    flex:1,
    backgroundColor:'rgb(45, 62, 74);',
    
    // flexDirection:'row',
    justifyContent:'center',
    alignItems:'center'
    
  },

  buttons:{
    flexDirection:'row',
    justifyContent:'space-around',
    width:'60%',
    margin:10,

    

  },

    
  // button:{
  //   backgroundColor:'cyan',
  //   // color:"rgb(134, 255, 215)",
  //   // backgroundColor2:'black',

  //   textDecorationColor:'bleck',
  //   borderColor:"blue",
  //   // borderWidth:5,
  
  // } ,

  textInput:{
        // marginRight:30,

    // justifyContent:'space-around',
    // alignItems:'center',
    
    // maxWidth:1000,
    width:'60%',
    
    backgroundColor:'white',
    borderColor:'cyan',
    borderWidth:1,padding:5},



})
