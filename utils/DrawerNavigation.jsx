import React from 'react';
import { View, Text } from 'react-native';

import { createDrawerNavigator } from '@react-navigation/drawer';
import UserPage from '../pages/UserPage';
import OrderPage from '../pages/OrderPage';
import HomePage from '../pages/HomePage';
import StartPage from '../pages/StartPage';
import { NavigationContainer } from '@react-navigation/native';
import DrawerContent from '../utils/DrawerContent'
import Subscribe from '../pages/Subscribe';

const DrawerNavigation = () => {
  
   const Drawer = createDrawerNavigator();

  return (
    
    <Drawer.Navigator  screenOptions={{headerShown:false}}  drawerContent={props => <DrawerContent {...props}  />} >
        <Drawer.Screen name='HomeScreen' component={HomePage}/>
        <Drawer.Screen name='UserProfile' component={UserPage}/>
        <Drawer.Screen name='Subscription' component={Subscribe}/>
    </Drawer.Navigator>
   
  );
}

export default DrawerNavigation;
