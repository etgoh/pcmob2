import React from 'react';
import { StyleSheet, Text } from 'react-native';

export default function CounterText(props) {
 console.log(props);
 return (
   <Text style={{color: props.color,fontSize: props.fontSize}}>
    {props.children}
   </Text>
 )
}




