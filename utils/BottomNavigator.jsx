import * as React from 'react';
import { BottomNavigation, Text } from 'react-native-paper';
import HomePage from '../pages/HomePage';
import UserPage from '../pages/UserPage';
import { Dimensions } from 'react-native';



const BottomNavigator = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'home',  focusedIcon: 'home', unfocusedIcon: 'home-outline'},
    { key: 'user',  focusedIcon: 'account-circle', unfocusedIcon:'account-circle-outline' },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    home: HomePage,
    user: UserPage,
  });

  const screenHeight = Dimensions.get("window").height;

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
      barStyle={{height:screenHeight*0.06,backgroundColor:"#ffff"}}
    />
  );
};

export default BottomNavigator;