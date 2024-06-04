import * as React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { SegmentedButtons } from 'react-native-paper';

const Categories = () => {
  const [value, setValue] = React.useState('');

  const filterCategories = ()=>{
    if(value!==''){
      console.log(value);
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <SegmentedButtons
        value={value}
        onValueChange={setValue}
        onPress={filterCategories()}
        buttons={[
          {
            value: 'laptops',
            label: 'Laptops',
          },
          {
            value: 'mobiles',
            label: 'Mobiles',
          },
          { value: 'smartwatches', 
          label: 'SmartWatches' ,
        },
        {
            value: 'bluetooth',
            label: 'Bluetooth',
          },
        ]}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
});

export default Categories;