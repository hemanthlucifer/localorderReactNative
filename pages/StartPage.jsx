import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import StartButton from '../components/StartButton';
import { Dimensions } from 'react-native';


export default function StartPage ({ navigation }) {
  return (
    <View style={myStyles.container}>
       <View style={myStyles.imageContainer}>
       <Image style={myStyles.image}  source={require('../assets/localOrderLogo.png')}/>
       </View>
       <View style={myStyles.buttonStyle}>
          <StartButton title='Get Started' onPress={()=>{navigation.navigate('LoginPage')}} color={'black'}/>
       </View>
    </View>
  );
}
const { width: screenWidth, height: screenHeight } = Dimensions.get('window');
const myStyles = StyleSheet.create({
    container:{
         flex:1,
         backgroundColor:"darkslategrey",
         alignItems:'center'
    },
    quoteTextContainer:{
        marginTop:15,
        flexDirection:'row',
        justifyContent:'center'
    },
    quoteText:{
        fontStyle:'italic',
        color:'white'
    },
    buttonStyle:{
        height:100,
        width:screenWidth*0.9,
        marginTop:screenHeight*0.16,
    },
    imageContainer:{
      marginBottom:screenHeight*0.22,
      width:screenWidth*0.9,
      height:400,
      
    },
    image:{
      height:250,
      width:'100%',
    }
})


