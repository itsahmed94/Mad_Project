import React, { Component } from 'react';
import {Alert, View, Text, Image,TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { createAppContainer, createStackNavigator } from 'react-navigation'; // Version can be specified in package.json
import {  Spinner , CardSection, Card , CustomButton} from "../components/Common";
import DashBoard from "../Pages/DashBoard";
import ViewVideo from "../Pages/ViewVideo"
import {Feedback, Aboutus, LoginForm, AddVideos} from '../Pages';
import Firebase from "./Firebase";
import { ScrollView } from 'react-native-gesture-handler';



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
 <ScrollView>
 <CardSection style={{paddingTop:130}}>
    <Text style={{fontSize:30,paddingTop:15}}>Mobile App Development Course</Text>

</CardSection>
<CardSection>
<Text style={{fontSize:15,}}>A complete course with video tutorials on mobile app development.Please click on any of the course video you'll able to add feedback later to the videos as well.  </Text>

</CardSection>

<CardSection >
<View style={{flex:1, flexDirection:'row', flexWrap:'wrap', paddingTop:50, paddingBottom:50}}> 
    <TouchableOpacity style={{width:'98%',margin:5, borderColor:'aquamarine', borderStyle: 'solid', borderWidth:2, height:50, textAlignVertical:'center', padding:15}}
      onPress={() => this.openVideo('frvXANSaSec')}
    >

             <Text style={{fontSize:15}}> 1 | Introduction </Text>

    </TouchableOpacity>
    <TouchableOpacity style={{width:'98%',margin:5, borderColor:'aquamarine', borderStyle: 'solid', borderWidth:2, height:50, textAlignVertical:'center', padding:15, fontSize:22}}
      onPress={() => this.openVideo('F5mRW0jo-U4')}
    >
              <Text style={{fontSize:15}}>2 | Django in 4 hours</Text>
    </TouchableOpacity>
    <TouchableOpacity style={{width:'98%',margin:5, borderColor:'aquamarine', borderStyle: 'solid', borderWidth:2, height:50, textAlignVertical:'center', padding:15, fontSize:18}}
      onPress={() => this.openVideo('6u2zsJOJ_GE')}
    >
             <Text style={{fontSize:15}}>3 | Introduction to Database Management System</Text>
    </TouchableOpacity>
    <TouchableOpacity style={{width:'98%',margin:5, borderColor:'aquamarine', borderStyle: 'solid', borderWidth:2, height:50, textAlignVertical:'center', padding:15, fontSize:18}}
      onPress={() => this.openVideo('vLnPwxZdW4Y')}
    >
            <Text style={{fontSize:15}}>4 | Introduction to Programming C++</Text>
    </TouchableOpacity>
    <TouchableOpacity style={{width:'98%',margin:5, borderColor:'aquamarine', borderStyle: 'solid', borderWidth:2, height:50, textAlignVertical:'center', padding:15, fontSize:18}}
      onPress={() => this.openVideo('YWnBbNj_G-U')}
    >
            <Text style={{fontSize:15}}>5 | Introduction to Data Structures and Algorithems</Text>
    </TouchableOpacity>
    <TouchableOpacity style={{width:'98%',margin:5, borderColor:'aquamarine', borderStyle: 'solid', borderWidth:2, height:50, textAlignVertical:'center', padding:15, fontSize:18}}
      onPress={() => this.openVideo('w8Dq8blTmSA')}
    >
            <Text style={{fontSize:15}}>6 | Introduction to Basic Electronics</Text>
    </TouchableOpacity>    
    <TouchableOpacity style={{width:'98%',margin:5, borderColor:'aquamarine', borderStyle: 'solid', borderWidth:2, height:50, textAlignVertical:'center', padding:15, fontSize:18}}
      onPress={() => this.openVideo('iRSAmekqRBo')}
    >
            <Text style={{fontSize:15}}>7 | Introduction to Basic .Net Framework</Text>
    </TouchableOpacity>
    <TouchableOpacity style={{width:'98%',margin:5, borderColor:'aquamarine', borderStyle: 'solid', borderWidth:2, height:50, textAlignVertical:'center', padding:15, fontSize:18}}
      onPress={() => this.openVideo('rfscVS0vtbw')}
    >
            <Text style={{fontSize:15}}>8 | Introduction to Python for Beginners   </Text>
    </TouchableOpacity>
    <TouchableOpacity style={{width:'98%',margin:5, borderColor:'aquamarine', borderStyle: 'solid', borderWidth:2, height:50, textAlignVertical:'center', padding:15, fontSize:18}}
      onPress={() => this.openVideo('PkZNo7MFNFg')}
    >
            <Text style={{fontSize:15}}>9 | Introduction to Java Script for Beginners   </Text>
    </TouchableOpacity>
    <TouchableOpacity style={{width:'98%',margin:5, borderColor:'aquamarine', borderStyle: 'solid', borderWidth:2, height:50, textAlignVertical:'center', padding:15, fontSize:18}}
      onPress={() => this.openVideo('N6BghzuFLIg')}
    >
            <Text style={{fontSize:15}}>10 | Introduction to Data Science   </Text>
    </TouchableOpacity>


   </View>



   

  

</CardSection>


  <CardSection>
   
<CustomButton onPress={() => this.props.navigation.navigate('AddVideos')}>
Add Videos
</CustomButton>

  </CardSection>

<CardSection>

<CustomButton onPress={() => Firebase.auth().signOut()}>
Logout
</CustomButton>

</CardSection>

</ScrollView>
   

    </Card>
 
 
 
 
 
 
 
 
 
 
  );
  }
}

export {CourseContents};