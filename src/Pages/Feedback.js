
import React, { Component } from 'react';
import {Alert, View, Text, Image,TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { createAppContainer, createStackNavigator } from 'react-navigation'; // Version can be specified in package.json
import {  Spinner , CardSection, Card , CustomButton,styles} from "../components/Common";
import DashBoard from "../Pages/DashBoard";
import ViewVideo from "../Pages/ViewVideo"
import firebase from "firebase";
import LoginForm from './LoginForm'


  class Feedback extends React.Component{

    static navigationOptions = {
      title: 'Student Learning App',
      
    };
    constructor(props) {
      super(props);
      this.state = { text: 'Enter you feedback comments here.' };
    }
  
    render() {
      return (
        <View style={{  alignItems: 'center', justifyContent: 'center' }}>
          
          <Image
          
          
          source={require('../img/Logo.png')}
          style={{ marginTop:-10 ,width: 150, height: 150, marginRight:10,justifyContent:'flex-end'}}
  
          />  
  
        <Text  style={styles.txt}>Feedback</Text>
        <Text>Send your feedback about the app to the us....</Text>
  
        <TextInput
        style={{height: 40,width:340, borderColor: '#4682b4', borderWidth: 1 , fontWeight:"bold" ,padding:10 ,marginTop: 50, marginBottom: 50}}
        onChangeText={(text) => this.setState({text})}
        value={this.state.text}
      />

        
                
  <TouchableOpacity onPress={() => Alert.alert("Thank you for sending your feedback... {'\n'}We'll get back to you soon!")}>
            <Text style={styles.btn}>SUBMIT</Text>
          </TouchableOpacity>
          
  
          
          
        </View>
      );
    }
    
        
  
  }
  export {Feedback};
  
