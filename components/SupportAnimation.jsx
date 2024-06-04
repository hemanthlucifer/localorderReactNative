import * as React from 'react';
import { Dimensions } from 'react-native';
import { FAB, Portal, PaperProvider } from 'react-native-paper';
import call from 'react-native-phone-call';

const SupportAnimation = () => {
  const [state, setState] = React.useState({ open: false });

  const onStateChange = ({ open }) => setState({ open });

  const { open } = state;

  const screenHeight = Dimensions.get("window").height;

  const args ={
    number: '6300795020',
    prompt:false,
    skipCanOpen: true
  }

  return (
      <Portal>
        <FAB.Group
          open={open}
          visible
          icon={'headphones'}
          color='black'
          style={{marginVertical:screenHeight*0.02}}
          actions={[
            {
              icon: 'phone',
              label: 'phone',
              onPress: () => call(args).catch(console.error),
            },
            {
              icon: 'email',
              label: 'Email',
              onPress: () => console.log('Pressed email'),
            },
            {
              icon: 'chat',
              label: 'chat',
              onPress: () => console.log('Pressed notifications'),
            },
          ]}
          onStateChange={onStateChange}
          onPress={() => {
            if (open) {
              
            }
          }}
        />
      </Portal>
  );
};

export default SupportAnimation;