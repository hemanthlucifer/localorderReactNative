import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import StartPage from './pages/StartPage';
import LoginPage from './pages/LoginPage';
import RegistrationPage from './pages/RegistrationPage';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DrawerContent from './utils/DrawerContent'
import { PaperProvider } from 'react-native-paper';

import StackNavigation from './utils/StackNavigation';
import { createDrawerNavigator } from '@react-navigation/drawer';
import DrawerNavigation from './utils/DrawerNavigation';
import HomePage from './pages/HomePage';
import UserNameState from './context/UserNameState';
import LocationPage from './pages/LocationPage';
import { SafeAreaProvider } from 'react-native-safe-area-context';



export default function App() {
  
  const Stack = createNativeStackNavigator();
   
  return (
    <UserNameState>
      <SafeAreaProvider>
      <PaperProvider>
       <StackNavigation/>
    </PaperProvider>
      </SafeAreaProvider>
    </UserNameState>   
  );
}


