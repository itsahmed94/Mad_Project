import React, { Component } from 'react';
import {Alert, View, Text, Image,TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { createAppContainer, createStackNavigator } from 'react-navigation'; // Version can be specified in package.json
import {  Spinner , CardSection, Card , CustomButton} from "../components/Common";
import {DetailsScreen, Feedback, Aboutus, LoginForm} from '../Pages';

import ViewVideo from "../Pages/ViewVideo"

import firebase from "firebase";

class HomeScreen extends React.Component {
  componentWillMount(){
    
 
 
   
  
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
        <Text>{Alert.alert("")}</Text>
        
<TouchableOpacity onPress={() => this.props.navigation.navigate('Details')}>
          <Text style={styles.btn}>CONTINUE</Text>
        </TouchableOpacity>
        
      </View>
    );
  }
}




const RootStack = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    Details: {
      screen: DetailsScreen,
    },
    Login: {

      screen: LoginForm,
    },
    FeedBack: {

      screen: Feedback,
    }, 
    About: {
      screen: Aboutus,
    },
    Video: {
      screen: ViewVideo
    }
  },
  {
    initialRouteName: 'Home',
    navigationOptions: {
     
                      title: 'Student Learning Application',
                      tabBarLabel: 'Interesting'
                      
            
    },
  }
);

const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
 

  render() {
    return <AppContainer />;
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    marginRight:20,
    marginLeft: 20,

  } , 
  
  txt: {
     
      color:'#4682b4',
      fontSize: 35,
    fontWeight: 'bold',
    marginTop: -15,
      
    },
    heading: {
     
      color:'#000000',
      fontSize: 25,
    fontWeight: 'bold',
    marginTop: -15,
      
    },

    para:{
      color:'#000000',
      fontSize: 20,
    

    },
  btn: {
     color:'#FFFFFF',
     backgroundColor:'#228B22',
      fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop:20,
    padding:10,
    width: 160,
      
    },
});
