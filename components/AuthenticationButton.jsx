import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TouchableHighlight, Dimensions} from 'react-native';

const AuthenticationButton = ({onPress,title, disabled, buttonColor}) => {
  return (
    <TouchableHighlight style={{ height:screenHeight*0.08,borderRadius:10,backgroundColor: buttonColor}} onPress={onPress} disabled={disabled}>
        <Text style={myStyles.titleStyle}>{title}</Text>
    </TouchableHighlight>
  );
}

export default AuthenticationButton;
const screenHeight = Dimensions.get('window').height
const myStyles = StyleSheet.create({
    titleStyle:{
        textAlign:'center',
        fontSize:30,
        padding:8,
        color:'white'
    }
})
