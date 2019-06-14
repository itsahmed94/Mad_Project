import React, { Component } from 'react';
import {Alert, View, Text, Image,TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { createAppContainer, createStackNavigator } from 'react-navigation'; // Version can be specified in package.json
import {  Spinner , CardSection, Card , CustomButton,styles} from "../components/Common";
import {DetailsScreen, Feedback, Aboutus, LoginForm} from '.';
import LinearGradient from 'react-native-linear-gradient';


import ViewVideo from "./ViewVideo"

import firebase from "firebase";

class HomeScreen extends React.Component {
 
    constructor(props){
      super(props)
    }
  
    handleSave(){
      Alert.alert("hello world")
    }
    static navigationOptions = {
      title: 'Student Learning App',
      
    };
   
    
  
      render() {
     
  
  
      return (
        
         
<LinearGradient colors={['#f1f382', '#f1f382', 'white']} style={styles.linearGradient}>
       {/* <LinearGradient colors={['#d4f6f2', '#f1f382', '#f1f333']} style={styles.linearGradient}> */}

         <Image
          
          
          source={require('../img/Logo.png')}
          style={{ marginTop:10,width: 250, height: 250}}
  
          />     
          <Text style={styles.txt}>Welcome</Text>
          <Text style={styles.txt}>To</Text>
          <Text style={styles.txt}>W4edu360</Text>
          
  <TouchableOpacity onPress={() => this.props.navigation.navigate('Details')}>
            <Text style={styles.btn}>CONTINUE</Text>
          </TouchableOpacity>
       
          </LinearGradient >
      );
    }
  }
  
  
  
  export {HomeScreen};