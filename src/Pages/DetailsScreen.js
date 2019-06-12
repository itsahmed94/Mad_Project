import React, { Component } from 'react';
import {Alert, View, Text, Image,TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { createAppContainer, createStackNavigator } from 'react-navigation'; // Version can be specified in package.json
import {  Spinner , CardSection, Card , CustomButton, styles} from "../components/Common";
import DashBoard from "../Pages/DashBoard";
import ViewVideo from "../Pages/ViewVideo"
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
        style={{ marginTop:10 ,width: 250, height: 150, marginRight:10,justifyContent:'flex-end'}}

        />  

<TouchableOpacity onPress={() => this.props.navigation.push('Loader',{loggedIn: this.state.loggedIn})}>
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





// FirebaseSignout(){
//   firebase.auth().signOut();
//   this.setState({loggedIn:false})
// }



 
  }






export { DetailsScreen};