import * as React from 'react';
import { View , Text} from 'react-native';
import { ActivityIndicator, MD2Colors } from 'react-native-paper';

const ActivityIndication = () => (
  <View style={{justifyContent:'center'}}>
    <ActivityIndicator animating={true} size={100} color={MD2Colors.red500}/>
    <Text style={{textAlign:'center', color:MD2Colors.red500}}>Please wait while we load local products</Text>
  </View>
);

export default ActivityIndication;