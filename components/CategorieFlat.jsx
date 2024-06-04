import React from 'react';
import { Text } from 'react-native';
import { Chip } from 'react-native-paper';

const CategorieFlat = ({onPress,title}) => (
  <Chip style={{padding:5, borderWidth:2, borderColor:'black',width:'25%',marginHorizontal:5}} 
  icon="information" 
  onPress={onPress} 
  selectedColor='green'
  mode='outlined'
  >
    <Text style={{padding:5}}>{title}</Text>
    </Chip>
);

export default CategorieFlat;
