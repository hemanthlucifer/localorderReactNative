import React from 'react';
import { View, Text, TouchableHighlight,StyleSheet } from 'react-native';

export default function StartButton ({onPress,title,color}) {
  return (
    <TouchableHighlight style={[myStyles.buttonContainer, {backgroundColor:color}]} onPress={onPress}>
        <Text style={myStyles.buttonText}>{title}</Text>
    </TouchableHighlight>
  );
}

const myStyles = StyleSheet.create({
    buttonContainer:{
        width:'100%',
        height:80,
        borderRadius:20,
        backgroundColor:'black'
    },
    buttonText:{
        textAlign:'center',
        marginTop:22,
        fontSize: 20,
        color:'white'
    }
})


