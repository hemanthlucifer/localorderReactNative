import * as React from 'react';
import { Text , TouchableHighlight} from 'react-native';
import { Button } from 'react-native-paper';

const NormalUseButton = ({title,onPress,buttonWidth,backgroundColor,borderWidth,borderColor,textColor}) => (
  <TouchableHighlight  onPress={onPress}  style={{width:buttonWidth,height:50, backgroundColor:backgroundColor,
    borderWidth: borderWidth, borderColor: borderColor
  }
  }>
    <Text style={{fontSize:20, padding:10, color:textColor, textAlign:'center'}}>{title}</Text>
  </TouchableHighlight>
);

export default NormalUseButton;