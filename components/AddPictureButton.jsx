import * as React from 'react';
import { Button } from 'react-native-paper';
import { StyleSheet } from 'react-native';

const AddPictureButton = ({onPress}) => (
  <Button icon="camera" mode="elevated" buttonColor='white' onPress={onPress} style={styles.conatiner}>
    Add Pic
  </Button>
);

export default AddPictureButton;

const styles = StyleSheet.create({
  conatiner:{
    borderColor:'blue',
    borderWidth:1
  }
})