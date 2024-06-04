import * as React from 'react';
import { Button } from 'react-native-paper';

import { StyleSheet } from 'react-native';

const RemovePictureButton = ({onPress}) => (
  <Button icon="select-remove" mode="elevated" onPress={onPress} buttonColor='white' style={styles.conatiner}>
    Remove 
  </Button>
);

export default RemovePictureButton;

const styles = StyleSheet.create({
  conatiner:{
    borderColor:'blue',
    borderWidth:1
  }
})