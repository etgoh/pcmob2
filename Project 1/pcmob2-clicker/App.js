import React, {useState} from 'react';
import { Text, View, StyleSheet, Button, TouchableOpacity } from 'react-native';
import CounterText from './components/CounterText';

export default function App() {
  let [count, setCount] =useState(0)

  function buttonPressed(){
    console.log ("Button was pressed");
    console.log (`Before pressing, it was ${count}`)
    setCount(count+1)
  }

  function showEncouragingText(){
    if(count>=10){
      return "Keep Going"
    }
  }
  return (
    <View style={styles.container}>
    <CounterText color="lightgrey" fontSize={10}>{count}</CounterText>
     <CounterText color="lightblue" fontSize={30}>{count}</CounterText>
     <CounterText color="blue" fontSize={60}>{count}</CounterText>
     <CounterText color="navy" fontSize={90}>{count}</CounterText>

  <TouchableOpacity onPress={buttonPressed} style={styles.button}><Button title="Press me!" onPress={buttonPressed}></Button>
  </TouchableOpacity>
     
      <Text style={styles.encouragingText}>{showEncouragingText()} </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  encouragingText:{
    marginTop:50,
    color: '#aaaaaa'
  },

  button:{
    backgroundColor:'red',
    padding:20,
    borderRadius:10,
    marginTop:20 
  },
  buttonText:{
    color:'white',
    fontWeight:'bold',
    fontSize:40,

  }
});