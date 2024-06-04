import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { View, Text } from 'react-native';
import StartPage from '../pages/StartPage';
import LoginPage from '../pages/LoginPage';
import RegistrationPage from '../pages/RegistrationPage';
import HomePage from '../pages/HomePage';
import UserPage from '../pages/UserPage';
import { NavigationContainer } from '@react-navigation/native';
import DrawerNavigation from './DrawerNavigation';
import LocationPage from '../pages/LocationPage';
import ProductPage from '../pages/ProductPage';
import SearchPage from '../pages/SearchPage';
import BottomNavigator from './BottomNavigator';

const StackNavigation = () => {
  
    const Stack = createNativeStackNavigator();

  return (
    
    <NavigationContainer>
    <Stack.Navigator initialRouteName='LoginPage' screenOptions={{headerShown:false}}>
    <Stack.Screen name='HomePage' component={BottomNavigator}/>
       <Stack.Screen name='LoginPage' component={LoginPage}/>
       <Stack.Screen name='Registration' component={RegistrationPage}/>
       <Stack.Screen name='LocationPage' component={LocationPage}/>
       <Stack.Screen name='ProductPage' component={ProductPage}/>
       <Stack.Screen name='SearchPage' component={SearchPage}/>
   </Stack.Navigator>
   </NavigationContainer>
    
  );
}

export default StackNavigation;
