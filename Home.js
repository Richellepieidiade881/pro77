import { Component } from "react";
import {View,Text,
    StyleSheet,
    SafeAreaView,
    TouchableOpacity,
    Platform,StatusBar,
    ImageBackground,
    Image
 } from "react-native";

 export default class HomeScreen extends Component{
     render(){
         return{
             <View
             style={{
              flex:1;
              justifyContent:"Center"
              alignItem:"Center"
             }}>
             <Text> HomeScreen </Text>
             </View>
         }
     }
 }

 