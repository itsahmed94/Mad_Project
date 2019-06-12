import React, { Component } from 'react';
import {Alert, View, Text, Image,TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { createAppContainer, createStackNavigator } from 'react-navigation'; // Version can be specified in package.json
import {  Spinner , CardSection, Card , CustomButton,styles} from "../components/Common";
import {DetailsScreen, Feedback, Aboutus, LoginForm, HomeScreen, ViewVideo, CourseContents} from '../Pages';


import firebase from "firebase";
import { CourseLoader } from './CourseLoader';




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
    },
    Course: {
      screen: CourseContents
    },
    Loader: {
      screen: CourseLoader
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




class App extends React.Component {
  render() {
    return (<AppContainer />);
  }
}








export default App;




