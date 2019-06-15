import React, { Component } from 'react';
import {Alert, View, Text, Image,TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { createAppContainer, createStackNavigator } from 'react-navigation'; // Version can be specified in package.json
import {  Spinner , CardSection, Card , CustomButton} from "../components/Common";
import DashBoard from "./DashBoard";
import ViewVideo from "./ViewVideo"
import {Feedback, Aboutus, LoginForm} from '.';
import Firebase from "./Firebase";



class AddVideos extends React.Component {

  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Course Dashboard'
    };
  };

    //Getting State from previous component?
    state = { email: "", password: "", error: "", loading: false, signIn: false,  loggedIn: false, videoId: "6ZnfsJ6mM5c" };



    constructor(props){
      super(props)
      this.props.navigation.setParams({myPageTitle: 'Add Videos'});
    }
  
   

    

    openVideo(courseVideoLink)
  
    {
      const {navigation} = this.props;


        navigation.navigate('Video', {
        
        videoId: courseVideoLink
        
        })

    }

    
    
    addVideoUnderUser(videoId){

      this.userId = Firebase.auth().currentUser.uid

                Firebase.database().ref('/users/'+this.userId+'/employees').set({

        username: "This is my work",
        email: "asfasdfsd",
        profile_picture : "https://scontent.fisb5-1.fna.fbcdn.net/v/t1.0-1/c0.1.50.50a/p50x50/10616567_10203772282440383_5358120401328196795_n.jpg?_nc_cat=105&_nc_ht=scontent.fisb5-1.fna&oh=1e73f8f5eb9031b956b864d951da6c89&oe=5D54CCA1"
      }).then()
  .catch(() => {


      console.log("Error Occured... in EmployeeeRecord")
  // firebase
  // .auth()
  // .createUserWithEmailAndPassword(email,password)
  // .then(user => loginUserSuccess(dispatch, user));
  });


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
    
    
    <TextInput
        style={{height: 40, borderColor: 'gray', borderWidth: 1}}
        onChangeText={(videoId) => this.setState({videoId})}
        value={this.state.videoId}
      />
    

    <TouchableOpacity style={{width:'98%',margin:5, borderColor:'aquamarine', borderStyle: 'solid', borderWidth:2, height:50, textAlignVertical:'center', padding:15}}
      onPress={() => this.addVideoUnderUser(this.state.videoId)}
    >

             <Text style={{fontSize:25}}> Add Video </Text>

    </TouchableOpacity>
    <TouchableOpacity style={{width:'98%',margin:5, borderColor:'aquamarine', borderStyle: 'solid', borderWidth:2, height:50, textAlignVertical:'center', padding:15}}
      onPress={() => this.openVideo('frvXANSaSec')}
    >

             <Text style={{fontSize:25}}> 1 | Introduction </Text>

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

export {AddVideos};