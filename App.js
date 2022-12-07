import Goalitem from './comp/Goalitem';
import GoalInput from './comp/GoalInput';
import Header from './comp/Header';
// import { StatusBar } from 'expo-status-bar';
import React,{ useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput,TouchableOpacity , ScrollView, FlatList} from 'react-native';


export default function App() {
 
  const [goalList,setgoalList]= useState([]);
  const [addMode,setaddMode] = useState(false);
  console.log("RE-RENDERING ........");
  console.log(goalList);

  // function goalHandeler(enteredText) {
  //   setgoal(enteredText);
  // This function is equvalent to the below function 

 
  // when we click on the buton from goalInput we this function should be called 
  // we have to pass data from goalInput.js to app.js 
  // We can do that by setting props on Goal input component
  // yaha pr titleOfGoal argument aya coz only a goal is und here   
  const addGoalHandler= titleOfGoal=>{
      if (titleOfGoal.length==0) {
        return;
        
        
      }
    
      // currentGoals contains all the current states ... redirects all the current goals and adds the new goal/state in the goallist 
      setgoalList(currentGoals=> [...currentGoals, {id:Math.random().toString() , value: titleOfGoal}]);

      
      // yaha sirf  aik expression thi jisko return krwa na tha is lia [] use kia 
      // agar keys ka error aa rha ho tou sbki keys set krdo
      // Ab masla ye aa rha jha ke agar hm alaga component bna rhy hain tou goal tou udhar defined so goal is undefined here . So, now addgoal handler will receive an argumnet instead of goal aur ye argument GoalInput se aa rha ho ga 


      setaddMode(false);
  };

  const goalDeleteHandler = goalId=>{
    setgoalList(currentGoals=>{
      console.log(`the to be deleted goal  id is :${goalId}`)
     return currentGoals.filter((goal)=> goal.id !==goalId)})
      // a (builtin method in javascript) filter method returns a new array which is based on an old array which you are calling it 

      console.log(goalList);  // but that code is not reachable coz uper return So jb re render ho ga tb hm display krwa skty hain so this should be out of that function 
  }

  const cancelGoalAddingHandler = ()=>{
    setaddMode(false);

  }
  return (
    // APPLYING MODAL IN GOALINPUT

    //code from future----
    
    
    
    <View style={styles.container}>
      <Header title="To do list"/>
      <View style={styles.Button}>

      <Button  color={'rgb(0, 67, 53)'}borderWidth={1}  borderColor={'white'}  title='Tap to add new goals' onPress={()=>{setaddMode(true)}}/>
      </View>


      <GoalInput cancel={cancelGoalAddingHandler} mode={addMode} onAddingGoal={addGoalHandler}/>
      
      {/*  Using flat insted of ScrollView aur flat list can replay the map method of arry with the help of render item  */}
       {/* key agar id set hogi tou hm key extracter ka use krskta hain  */}
      <FlatList 
      // flat list is used to generate unique keys for all items :)
      // item.id = is the index of the item . by default ye =>item.key hota ha mgr hmne uper id ki islia yahan bhi id karain gy item.id is the id of an item (goal) 
      //  we dont need key flatlist automatically key generate krta ha but not arrays of strings is not supported . us array mn key honi zarori ha 
      keyExtractor={(item,index)=>item.id} 
      data={goalList} 
      renderItem={goalitem=>(
        <Goalitem id={goalitem.item.id} goaltitle={goalitem.item.value} deleteGoal={goalDeleteHandler}/>
        
        // deleteGoal={goalDeleteHandler.bind(this,goalitem.item.id)}
        //  that would also work 
        
        )
      }/>
      {/* jis view ko scroll view se replace karain gy wo scrollable ho ja aa ga  */}
      {/* <ScrollView> */}
        {/* is view mn list of tasks display  */}
      
        {/* key is the unique identifier for each goal this syntax is alsi react specific hmne key goal ka naam hi set kr dia so hm aik task do bar add nai kraain gy assuming   */}

       {/* {goalList.map((mygoal)=>(
         
         <View key={mygoal}>
         <Text  style={styles.listofgoals}>{mygoal}</Text>
         </View>
         // islo view mn islia wrap kia coz view zayada styling support krta ha
         
       
       ))} */}


 
        
      {/* </ScrollView> */}

    </View>
    
  );
}

const styles = StyleSheet.create({

  Button:{
    marginVertical:20,
    marginHorizontal:80
  },
  



  container: {
    // padding:80,
    flex:1,

    backgroundColor:'black',

    // alignItems:'center',
  },


  

});
