import React, { useState,useEffect, useCallback, useContext } from 'react';
import { View, Text, StyleSheet,Dimensions, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Icon, Searchbar } from 'react-native-paper';
import SolrQuery from '../calls/SolrQuery';
import ActivityIndication from '../components/ActivityIndication';
import ProductListItem from '../components/ProductListItem';
import { useNavigation } from '@react-navigation/native';
import _ from 'lodash';
import userNameContext from '../context/userNameContext';

const SearchPage = () => {

   const [searchText, setSearchText] = useState('');

   const [searchData,setSearchData] = useState([]);

   const navigation = useNavigation();

   const user = useContext(userNameContext);

   

   const renderProduct = ({item}) => {
    console.log("render product");
    console.log(item.product_image.at(0));
    return <ProductListItem title={item.product_name} imageLink={item.product_image.at(0)} onPress={()=>navigation.navigate('ProductPage', {productId:item.product_id})}/>;
  };

  const fetchQueryData = async () =>{
    try{
        if(searchText !==''){
            const queryData = await SolrQuery(searchText,user.city.split(" ").join(""));
            setSearchData(queryData.response.docs);
        }else{
            setSearchData([]);
        }
    }catch(e){
        console.log(e);
    }
 }

   useEffect(() => {
     fetchQueryData();
   }, [searchText]);

  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.searchContainer}>
            <Searchbar placeholder='Search Products' style={styles.searchBar} onChangeText={setSearchText} value={searchText} clearButtonMode='while-editing'/>
        </View>
        <View style={{flex:2, flexDirection: 'column', alignItems:'center'}}>
        <FlatList
          data={searchData}
          renderItem={renderProduct}
          keyExtractor={item => item.product_id}
          numColumns={2}
        />
      </View>
    </SafeAreaView>
  );
}

export default SearchPage;
const screenWidth = Dimensions.get("screen").width;
const screenHeight = Dimensions.get("screen").height;
const styles = StyleSheet.create({

    container:{
        flex:1,
        flexDirection:'column',
        alignItems:'center',
        backgroundColor:"#fff"
    },

    searchContainer:{
       marginVertical:20,
       width: screenWidth*0.8
    },

    searchBar:{
        backgroundColor:'#fff',
        borderWidth: 2,
        borderColor: "black"
    }
})
