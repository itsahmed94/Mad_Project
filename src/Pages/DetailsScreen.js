import React, { Component } from 'react';
import {Alert, View, Text, Image,TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { createAppContainer, createStackNavigator } from 'react-navigation'; // Version can be specified in package.json
import {  Spinner , CardSection, Card , CustomButton} from "../components/Common";
import DashBoard from "../Pages/DashBoard";
import ViewVideo from "../Pages/ViewVideo"
import firebase from "firebase";
import {Feedback, Aboutus, LoginForm} from '../Pages';





class DetailsScreen extends React.Component {

    static navigationOptions = ({ navigation }) => {
      const { params = {} } = navigation.state;
        title: "Test"
        
      };
      
      state = {loggedIn: false}
 
    render() {

    return (
      <View style={{  alignItems: 'center', justifyContent: 'center' }}>
            
        <Image
        
        
        source={require('../img/Logo.png')}
        style={{ marginTop:10 ,width: 250, height: 250, marginRight:10,justifyContent:'flex-end'}}

        />  

<TouchableOpacity onPress={() => this.props.navigation.navigate('Login')}>
          <Text style={styles.btn}>Sign In</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => this.props.navigation.navigate('FeedBack')}>
          <Text style={styles.btn}>FeedBack</Text>
        </TouchableOpacity>

        
<TouchableOpacity onPress={() => this.props.navigation.navigate('Home')}>
          <Text style={styles.btn}>Home</Text>
        </TouchableOpacity>
        
<TouchableOpacity onPress={() => this.props.navigation.navigate('About')}>
          <Text style={styles.btn}>About App</Text>
        </TouchableOpacity>
        

        
        
      </View>
    );
  }





FirebaseSignout(){
  firebase.auth().signOut();
  this.setState({loggedIn:false})
}


 openVideo(courseVideoLink)
  
      {
        //this.props.navigation.setParam({videoId:courseVideoLink});

       this.props.navigation.navigate('Video', {
        
        videoId: courseVideoLink
        
      })
  
      }

  
  renderContent() {
    //Alert.alert(this.state.loggedIn)
  switch (this.state.loggedIn) {
  case true:
      
  return (


  <Card>
       <CardSection style={{paddingTop:130}}>
        <Text style={{fontSize:30,paddingTop:15}}> Mobile App Development Course</Text>
  
  </CardSection>
  <CardSection>
  <Text style={{fontSize:15,}}> A complete course with video tutorials on mobile app development. Please click on any of the course video you'll able to add feedback later to the videos as well.  </Text>

  </CardSection>
  
  <CardSection >
    <View style={{flex:1, flexDirection:'row', flexWrap:'wrap', paddingTop:50, paddingBottom:50}}> 
        <TouchableOpacity style={{width:'98%',margin:5, borderColor:'aquamarine', borderStyle: 'solid', borderWidth:2, height:50, textAlignVertical:'center', padding:15, fontSize:18}}
          onPress={() => this.openVideo('frvXANSaSec')}
        >
                  <Text>1 | Introduction</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{width:'98%',margin:5, borderColor:'aquamarine', borderStyle: 'solid', borderWidth:2, height:50, textAlignVertical:'center', padding:15, fontSize:18}}
          onPress={() => this.openVideo('F5mRW0jo-U4')}
        >
                  <Text>2 | Django in 4 hours</Text>
        </TouchableOpacity>
        
        
       
       </View>

  </CardSection>




  <CardSection>

  <CustomButton onPress={() => this.FirebaseSignout}>
  Logout
  </CustomButton>
  
  </CardSection>
  </Card>



  /*<DashBoard/>*/ 
  );
  case false:
  return <LoginForm />;
  default:
  return alert.alert("Loading...");
  }
  }
  render() {
  return (
  <View>
 
  {this.renderContent()}
  {/*
  Before the renderContent Handling
  <LoginForm /> */}
  </View>
  );
  }
  }
export { DetailsScreen};