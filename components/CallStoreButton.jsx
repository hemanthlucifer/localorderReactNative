import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TouchableHighlight, Dimensions } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

const CallStoreButton = ({onPress}) => {
  return (
    <TouchableHighlight style={myStyles.buttonStyles} onPress={onPress}>
      <View style={myStyles.container}>
      <Feather name="phone-call" size={30} color="#fff" />
        <Text style={myStyles.titleStyle}>Call the store</Text>
      </View>
    </TouchableHighlight>
  );
}

export default CallStoreButton;
const screenHeight = Dimensions.get('window').height
const myStyles = StyleSheet.create({
  buttonStyles: {
    height: screenHeight*0.08,
    borderRadius: 10,
    backgroundColor: 'black',
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    width:'100%',
    flexDirection: 'row',
    justifyContent:'center'
  },
  titleStyle: {
    textAlign: 'center',
    fontSize: 20,
    marginLeft: 10,
    color:'#fff'
  },
});
