import React from 'react';
import { StyleSheet } from 'react-native';
import { Avatar, Button, Card, Text } from 'react-native-paper';
import { Dimensions } from 'react-native';

const ProductListItem = ({title,imageLink, onPress,productId}) => {
  return (
    <Card onPress={onPress} style={myStyles.cardContainer}>
    <Card.Cover source={{ uri: imageLink }} />
    <Card.Content>
      <Text style={{textAlign:'center'}} variant="titleSmall">{title}</Text>
    </Card.Content>
  </Card>
  );
}

export default ProductListItem;
const { width: screenWidth, height: screenHeight } = Dimensions.get('window');
const myStyles = StyleSheet.create({
    cardContainer:{
        height:230,
        width:0.47*screenWidth,
        borderWidth: 1,
        borderColor: 'black',
        marginVertical: 5,
        marginHorizontal: 5
    }
})
