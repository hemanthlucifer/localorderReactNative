import React, { useContext } from 'react';
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';
import StartButton from '../components/StartButton';
import * as Location from 'expo-location';
import { useNavigation } from '@react-navigation/native';
import userNameContext from '../context/userNameContext';
import { SafeAreaView } from 'react-native-safe-area-context';

const LocationPage = ({ navigation }) => {
  const { setUserLatitude, setUserLongitude } = useContext(userNameContext);

  const getLocation = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status === 'granted') {
      let currentLocation = await Location.getCurrentPositionAsync({});
      console.log(currentLocation);
      setUserLatitude(currentLocation.coords.latitude);
      setUserLongitude(currentLocation.coords.longitude);
      navigation.navigate('HomePage');
    }
    navigation.navigate('HomePage');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={require('../assets/locationPage.png')} />
      </View>
      <Text style={styles.text}>Please allow location access for getting local products</Text>
      <View style={styles.buttonContainer}>
        <StartButton title={'Allow Access'} color={'#835730'} onPress={getLocation} />
      </View>
    </SafeAreaView>
  );
};

export default LocationPage;

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#fff',
    flexDirection:'column',
    alignItems:'center'
  },
  imageContainer: {
    width: screenWidth * 0.8,
    aspectRatio: 1,
    marginTop: screenHeight*0.1,
    justifyContent: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  text: {
    fontSize: 16,
    color: 'black',
    marginVertical:20,
    padding:10,
    textAlign: 'center',
  },
  buttonContainer: {
    marginTop:screenHeight*0.2,
    width:'90%'
  },
});
