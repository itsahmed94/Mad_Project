import React, { Component } from 'react';
import {Alert, View, Text, Image,TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { createAppContainer, createStackNavigator } from 'react-navigation'; // Version can be specified in package.json
import {  Spinner , CardSection, Card , CustomButton,styles} from "../components/Common";
import DashBoard from "../Pages/DashBoard";
import ViewVideo from "../Pages/ViewVideo"
import firebase from "firebase";
import LoginForm from './LoginForm'

class Aboutus extends React.Component{

  static navigationOptions = {
    title: 'Student Learning App',
    
  };

  render() {
    return (
      <View style={{  alignItems: 'center', justifyContent: 'center' }}>
        
        <Image
        
        
        source={require('../img/Logo.png')}
        style={{ marginTop:-10 ,width: 150, height: 150, marginRight:10,justifyContent:'flex-end'}}

        />  

      <Text  style={styles.txt}>About App</Text>

<View style = {styles.container}>
         
      <Text  style={styles.heading}>General Info About App</Text>


      <Text style={styles.para}>

       
       {'MUHAMMAD TAYYAB RANA (FA17-MCSW-0010) \nAHMED SHABBIR (SP17-MCSW-0009) \nUMER SHAFIQ \nFAIZ ULLAH SHAH (FA17-MCSW-0006) \nMUHAMMAD SAQIB (SP18-MCSW-0004) \n'}
        
        
        
         {/* Students can now get videos lecture of any programming language from hear 
      on one click.
      
      Students can now get videos lecture of any programming language from hear 
      on one click.
      
      Students can now get videos lecture of any programming language from hear 
      on one click.

      Students can now get videos lecture of any programming language from hear 
      on one click. */}
      </Text>

      </View>

  
        
        
      </View>
    );
  }
}

export {Aboutus};