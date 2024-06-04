import React from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import { Button, Card, Text } from "react-native-paper";
import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome6 } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';

const Subscribe = () => {
  return (
    <SafeAreaView style={myStyles.planContainer}>
        <View style={myStyles.pageHeading}>
            <Text style={myStyles.headingText}>Subscrption Plans !</Text>
        </View>
      <Card style={myStyles.plan}>
        <Card.Title title="Monthly Plan - 30/-" style={myStyles.cardTitle}/>
        <Card.Content>
            <View style={{flexDirection:'row', justifyContent:'space-between'}}>
               <Text>. Valid for 30 days</Text>
               <Text>. Unlimited queries</Text>
            </View>
            <View style={{flexDirection:'row', justifyContent:'space-between', marginVertical:20}}>
               <Text>. Genuine details</Text>
               <Text>. 24/7 support</Text>
            </View>
            <View style={myStyles.iconContainer}>
            <MaterialIcons name="30fps" size={30} color="black" />
            <MaterialIcons name="local-grocery-store" size={30} color="black" />
            <MaterialCommunityIcons name="account-details" size={30} color="black" />
            <FontAwesome6 name="headphones-simple" size={30} color="black" />
            </View>
        </Card.Content>
        <View></View>
        <Card.Actions>
          <Button style={myStyles.buttonStyles}>Ok</Button>
        </Card.Actions>
      </Card>

      <Card style={myStyles.plan}>
        <Card.Title title="Yearly Plan - 300/-" style={myStyles.cardTitle}/>
        <Card.Content>
            <View style={{flexDirection:'row', justifyContent:'space-between'}}>
               <Text>. Valid for 360 days</Text>
               <Text>. Unlimited queries</Text>
            </View>
            <View style={{flexDirection:'row', justifyContent:'space-between', marginVertical:20}}>
               <Text>. Genuine details</Text>
               <Text>. 24/7 support</Text>
            </View>
            <View style={myStyles.iconContainer}>
            <MaterialIcons name="30fps" size={30} color="black" />
            <MaterialIcons name="local-grocery-store" size={30} color="black" />
            <MaterialCommunityIcons name="account-details" size={30} color="black" />
            <FontAwesome6 name="headphones-simple" size={30} color="black" />
            </View>
        </Card.Content>
        <View></View>
        <Card.Actions>
          <Button style={myStyles.buttonStyles}>Ok</Button>
        </Card.Actions>
      </Card>
      
    </SafeAreaView>
  );
};

export default Subscribe;

const screenHeight = Dimensions.get("window").height;

const myStyles = StyleSheet.create({
  planContainer: {
    width: "100%",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor:'white',
    flex:1
  },
  plan: {
    width: "90%",
    marginVertical: 30,
    height:screenHeight*0.3,
    backgroundColor:'white',
    borderWidth:1,
    borderColor: 'black'
  },
  iconContainer:{
    flexDirection:'row',
    justifyContent:'space-between'
  },
  cardTitle:{
    flexDirection:"column",
    alignItems:"center"
  },
  buttonStyles:{
    marginVertical:10
  },
  pageHeading:{
    backgroundColor:'black',
    width:'100%',
    height:screenHeight*0.1
  },
  headingText:{
    fontSize:30,
    marginVertical:10,
    color:'white'
  }
});
