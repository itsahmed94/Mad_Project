import React, { Component } from 'react';
import {Alert, View, Text, Image,TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { createAppContainer, createStackNavigator } from 'react-navigation'; // Version can be specified in package.json
import {  Spinner , CardSection, Card , CustomButton,styles} from "../components/Common";
import {DetailsScreen, Feedback, Aboutus, LoginForm} from '.';

import ViewVideo from "./ViewVideo"

import firebase from "firebase";

class HomeScreen extends React.Component {
 
    componentWillMount(){
 
     
    
    }
  
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
         
        <View style={{  alignItems: 'center', justifyContent: 'center' }}> 
         <Image
          
          
          source={require('../img/Logo.png')}
          style={{ marginTop:10,width: 250, height: 250, marginRight:10,justifyContent:'flex-end'}}
  
          />     
          <Text style={styles.txt}>Welcome</Text>
          <Text style={styles.txt}>To</Text>
          <Text style={styles.txt}>W4edu360</Text>
          
  <TouchableOpacity onPress={() => this.props.navigation.navigate('Details')}>
            <Text style={styles.btn}>CONTINUE</Text>
          </TouchableOpacity>
          
        </View>
      );
    }
  }
  
  
  
  export {HomeScreen};