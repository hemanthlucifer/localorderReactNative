import React, { useContext, useEffect, useState } from 'react';
import { View, Text, StyleSheet,  FlatList, ScrollView } from 'react-native';
import AppHeader from '../components/AppHeader';
import Categories from '../components/Categories';
import userNameContext from '../context/userNameContext';
import SupportAnimation from '../components/SupportAnimation';
import ProductListItem from '../components/ProductListItem';
import { FetchProducts } from '../calls/FetchProducts';
import ActivityIndication from '../components/ActivityIndication';
import { ActivityIndicator, MD2Colors, Portal } from 'react-native-paper';
import { FetchProductsByCategory } from '../calls/FetchProductsByCategory';
import { Chip } from 'react-native-paper';
import CategorieFlat from '../components/CategorieFlat';
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from '@react-navigation/native';

export default function HomePage  () {
  const {userLatitude,userLongitude,setCity,setState,setCountry} = useContext(userNameContext);
  const [productData, setProductData] = useState();
  const [category, setCategory] = useState(' ');
  const [location,setLocation] = useState('');
  
  const navigation = useNavigation();
  const getCategoryData = async (selectedCategory) => {
    try {
      if (selectedCategory !== '') {
        const response = await FetchProductsByCategory(selectedCategory,location);
        setProductData(response);
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await FetchProducts(userLatitude, userLongitude);
        setProductData(response.productList);
        setCity(response.city);
        setLocation(response.city);
        setState(response.state);
        setCountry(response.country);
      } catch (e) {
        console.log(e);
      }
    };

    getProducts();
  }, []);

  useEffect(() => {
    getCategoryData(category);
  }, [category]);

  const renderProduct = ({item}) => {
    return <ProductListItem title={item.productName} imageLink={item.productImage} onPress={()=>navigation.navigate('ProductPage', {productId:item.productId})}/>;
  };

  return (
    
    <SafeAreaView style={{flex:1}}>
      <View>
        <AppHeader/>
      </View>
      <View style={myStyles.categoriesContainer}>
        <ScrollView  horizontal={true}>
          <Chip style={{marginHorizontal:5}} showSelectedCheck={true}  mode="outlined" selected={category==="all"} selectedColor="black"  onPress={()=>{setCategory("all")}}> 
            All 
          </Chip>
          <Chip style={{marginHorizontal:5}} showSelectedCheck={true}  mode="outlined" selected={category==="mobiles"} selectedColor="black"  onPress={()=>{setCategory("mobiles")}}> 
            Mobiles 
          </Chip>
          <Chip style={{marginHorizontal:5}}  mode="outlined" selectedColor="black" selected={category==="laptops"} onPress={()=>{setCategory("laptops")}}> 
            Laptops 
          </Chip>
          <Chip style={{marginHorizontal:5}}  mode="outlined" selectedColor="black" selected={category==="bluetooth"} onPress={()=>{setCategory("bluetooth")}}> 
            Bluetooth 
          </Chip>
          <Chip style={{marginHorizontal:5}}  mode="outlined" selectedColor="black" selected={category==="smartwatch"} onPress={()=>{setCategory("smartwatch")}}> 
            Smartwatch 
          </Chip> 
        </ScrollView>
      </View>
      <Portal.Host>
      <View style={{flex:2, flexDirection: 'column', alignItems:'center'}}>
        <FlatList
          data={productData}
          renderItem={renderProduct}
          keyExtractor={item => item.productId}
          numColumns={2}
          ListEmptyComponent={<ActivityIndication/>}
        />
        <SupportAnimation />
      </View>
      </Portal.Host>
        
        
        
    </SafeAreaView>
  );
}

const myStyles = StyleSheet.create({
  headerContainer:{
    flex:1,
  },
  categoriesContainer:{
    padding:10
  }
});
