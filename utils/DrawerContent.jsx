import * as React from 'react';
import { Drawer } from 'react-native-paper';
import { useContext } from 'react';
import userNameContext from '../context/userNameContext';
import { Text } from 'react-native-paper';

const MyComponent = ({navigation}) => {
  const [active, setActive] = React.useState('');
  const user = useContext(userNameContext);
  const greetings = `Hi ${user.userNameState}`;
  const address = user.city+", "+user.state+", "+user.country;
  return (
    <>
    <Drawer.Section    theme={{ colors: { primary: 'green' } }} style={{marginTop:80, left:0}}>
      <Drawer.Item
        label="Home Page"
        active={active === 'first'}
        onPress={() => navigation.navigate('HomeScreen')}
        icon={'home-circle'}
        rippleColor={'black'}
      />
      <Drawer.Item
        label="Profile Page"
        active={active === 'second'}
        onPress={() => navigation.navigate('UserProfile')}
        icon={'account-circle'}
        rippleColor={'black'}
      />
      <Drawer.Item
        label="Subscribe"
        active={active === 'third'}
        onPress={() => navigation.navigate('Subscription')}
        icon={'crown'}
        rippleColor={'black'}
      />
    </Drawer.Section>
    </>
  );
};

export default MyComponent;