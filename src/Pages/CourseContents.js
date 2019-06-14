import React, { Component } from 'react';
import {Alert, View, Text, Image,TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { createAppContainer, createStackNavigator } from 'react-navigation'; // Version can be specified in package.json
import {  Spinner , CardSection, Card , CustomButton} from "../components/Common";
import DashBoard from "../Pages/DashBoard";
import ViewVideo from "../Pages/ViewVideo"
import {Feedback, Aboutus, LoginForm} from '../Pages';
import Firebase from "./Firebase";



class CourseContents extends React.Component {

  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Course Dashboard'
    };
  };

    //Getting State from previous component?
    state = { email: "", password: "", error: "", loading: false, signIn: false,  loggedIn: false, videoId: "6ZnfsJ6mM5c" };



    constructor(props){
      super(props)
      this.props.navigation.setParams({myPageTitle: 'Course Dashboard'});
    }
  
   

    

    openVideo(courseVideoLink)
  
    {
      const {navigation} = this.props;


        navigation.navigate('Video', {
        
        videoId: courseVideoLink
        
        })

    }

    
    





  
  render() {
    
  return (
  
 
 
 
    


 <Card>
   <CardSection style={{paddingTop:130}}>
    <Text style={{fontSize:30,paddingTop:15}}>Mobile App Development Course</Text>

</CardSection>
<CardSection>
<Text style={{fontSize:15,}}>A complete course with video tutorials on mobile app development.Please click on any of the course video you'll able to add feedback later to the videos as well.  </Text>

</CardSection>

<CardSection >
<View style={{flex:1, flexDirection:'row', flexWrap:'wrap', paddingTop:50, paddingBottom:50}}> 
    <TouchableOpacity style={{width:'98%',margin:5, borderColor:'aquamarine', borderStyle: 'solid', borderWidth:2, height:50, textAlignVertical:'center', padding:15, fontSize:18}}
      onPress={() => this.openVideo('frvXANSaSec')}
    >
              <Text>1 | Introduction to React Native</Text>
    </TouchableOpacity>
    <TouchableOpacity style={{width:'98%',margin:5, borderColor:'aquamarine', borderStyle: 'solid', borderWidth:2, height:50, textAlignVertical:'center', padding:15, fontSize:18}}
      onPress={() => this.openVideo('F5mRW0jo-U4')}
    >
              <Text>2 | Django in 4 hours</Text>
    </TouchableOpacity>
    <TouchableOpacity style={{width:'98%',margin:5, borderColor:'aquamarine', borderStyle: 'solid', borderWidth:2, height:50, textAlignVertical:'center', padding:15, fontSize:18}}
      onPress={() => this.openVideo('6u2zsJOJ_GE')}
    >
              <Text>3 | Introduction to Database Management System</Text>
    </TouchableOpacity>
    
   
   </View>

</CardSection>




<CardSection>

<CustomButton onPress={() => Firebase.auth().signOut()}>
Logout
</CustomButton>

</CardSection>


    </Card>
 
 
 
 
 
 
 
 
 
 
  );
  }
}

export {CourseContents};