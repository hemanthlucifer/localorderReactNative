import { React, useEffect, useState } from "react";
import { View, Text, StyleSheet, Image, Dimensions } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { FetchProductById } from "../calls/FetchProductById";
import { DataTable } from "react-native-paper";
import CallStoreButton from "../components/CallStoreButton";
import call from 'react-native-phone-call';

const ProductPage = ({ route }) => {
  const { productId } = route.params;

  const [productData, setProductData] = useState("");

  const [phoneNumber,setPhoneNumber] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await FetchProductById(productId);
        setProductData(response);
        setPhoneNumber(response.storePhone.toString())
      } catch (e) {
        console.log(e);
      }
    };

    fetchData();
  }, []);

  const args = {
    number: phoneNumber,
    prompt: true,
    skipCanOpen: true
}
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          style={{ width: "100%", height: "100%" }}
          source={{
            uri: productData.productImage,
          }}
        />
      </View>
      <View style={styles.tittleContainer}>
        <Text style={styles.title}>{productData.productName}</Text>
      </View>
      <View style={styles.descriptionContainer}>
        <Text style={styles.description}>{productData.productDesc}</Text>
      </View>
      <View style={styles.detailsContainer}>
        <DataTable style={{borderBottomWidth:2}}>
          <DataTable.Row style={{borderWidth:2}}>
            <DataTable.Cell style={{width:'50%',borderRightWidth:2}}>
              <Text style={styles.detilLabel}>Product Price: </Text>
            </DataTable.Cell>
            <DataTable.Cell style={{flexDirection:'column',alignItems:'center',justifyContent:'center'}}>
              <Text style={styles.valueText}>{productData.productPrice}</Text>
            </DataTable.Cell>
          </DataTable.Row>
          <DataTable.Row style={{borderWidth:2}}>
            <DataTable.Cell style={{width:'50%',borderRightWidth:2}}>
              <Text style={styles.detilLabel}>Store name: </Text>
            </DataTable.Cell>
            <DataTable.Cell style={{flexDirection:'column',alignItems:'center',justifyContent:'center'}}>
              <Text style={styles.valueText}>{productData.storeName}</Text>
            </DataTable.Cell>
          </DataTable.Row>
          <DataTable.Row style={{borderWidth:2}}>
            <DataTable.Cell style={{width:'50%',borderRightWidth:2}}>
              <Text style={styles.detilLabel}>Store location: </Text>
            </DataTable.Cell>
            <DataTable.Cell style={{flexDirection:'column',alignItems:'center',justifyContent:'center'}}>
              <Text style={styles.valueText}>{productData.storeLocation}</Text>
            </DataTable.Cell>
          </DataTable.Row>
          <DataTable.Row style={{borderWidth:2}}>
            <DataTable.Cell style={{width:'50%',borderRightWidth:2}}>
              <Text style={styles.detilLabel}>Store name: </Text>
            </DataTable.Cell>
            <DataTable.Cell style={{flexDirection:'column',alignItems:'center',justifyContent:'center'}}>
              <Text style={styles.valueText}>{productData.storeName}</Text>
            </DataTable.Cell>
          </DataTable.Row>
          <DataTable.Row style={{borderWidth:2}}>
            <DataTable.Cell style={{width:'50%',borderRightWidth:2}}>
              <Text style={styles.detilLabel}>Store phone: </Text>
            </DataTable.Cell>
            <DataTable.Cell style={{flexDirection:'column',alignItems:'center',justifyContent:'center'}}>
              <Text style={styles.valueText}>{productData.storePhone}</Text>
            </DataTable.Cell>
          </DataTable.Row>
        </DataTable>
      </View>
      <View style={styles.buttonContainer}>
        <CallStoreButton onPress={()=>call(args).catch(console.error)}/>
      </View>
    </SafeAreaView>
  );
};

export default ProductPage;
const screenHeight = Dimensions.get("window").height;
const screeWidth = Dimensions.get("window").width;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#fff",
  },

  imageContainer: {
    width: screeWidth * 0.5,
    height: screenHeight * 0.3,
    marginTop: screenHeight * 0.05,
  },

  tittleContainer: {
    padding: 5,
    flexDirection: "column",
    alignItems: "center",
  },

  title: {
    fontSize: 30,
    fontWeight: "bold",
  },

  description: {
    textAlign: "justify",
    fontWeight: "500",
  },

  descriptionContainer: {
    padding: 5,
    width: screeWidth * 0.9,
  },

  detailsContainer: {
    flexDirection: "column",
    alignItems: "center",
    width: screeWidth * 0.9,
    padding:10,
    marginVertical:15
  },

  detailRow: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    width: "100%",
  },

  detilLabel: {
    fontSize: 20,
    fontWeight: "500",
  },

  valueText: {
    fontSize: 20,
    fontWeight: "400",
    textAlign:'center'
  },

  buttonContainer:{
    width: screeWidth*0.9
  }
});
