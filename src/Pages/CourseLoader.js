import React, { Component } from "react";
import { Text , View,Alert, TouchableOpacity} from "react-native";
import Firebase from "./Firebase";
import { withNavigation } from 'react-navigation';

// @flow

import { CustomButton, Card, CardSection, Input, Spinner } from "../components/Common";
import {Feedback, Aboutus, LoginForm} from '../Pages';
import { CourseContents } from "./CourseContents";


class CourseLoader extends Component {

    static navigationOptions = ({ navigation }) => {
        const { params = {} } = navigation.state;
          title: "Test"
          
        };
        

state = { email: "", password: "", error: "", loading: false, signIn: false,  loggedIn: false, videoId: "6ZnfsJ6mM5c" };

constructor(props){
    super(props)

   

      Firebase.auth().onAuthStateChanged(user => {
        if (user) {
        this.setState({ loggedIn: true });
        } else {
        this.setState({ loggedIn: false });
        }
        });

}


renderContent() {

            switch (this.state.loggedIn) {
            case true:
                return (
                    <CourseContents navigation={this.props.navigation} />
                        );
            case false:
                    return <LoginForm navigation={this.props.navigation} />;
            default:
                    return alert.alert("Loading...");
            }
}












//Helper method onButtonPress() to Login the user
onRegister(){
    const { email, password } = this.state;
    //Firebase mathod to login using userid & password

    //Clear out the Error Message on Every Login Attempt
    this.setState({ error: "", loading: true });

    // Authentication : Fetching data from cloud and exception handling .

    

}

onButtonPress() {
const {email, password} = this.state;
this.setState({
    error: "",
    loading: true
});

// Authentication : Fetching data from cloud and exception handling .
    Firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then(
            () => {
                this.onLoginSuccess(this)
            }
        ).catch((e) => {

            //Login failed 
            this.setState({
                loading: false,
                error: e.message
            })
        });
    }




// Logined Success Function if password is ok then it clear the email , password ,error and loading false ;
onLoginSuccess() {
    this.renderContent();    

    this.setState({
    email: "",
    password: "",
    loading: false,
    error: "Login Successful",
    signIn: true
    });



}

// Render button function is checking loading true or false if it is true then spinner shows other wise Signin button shows   
renderSignInBtn() {
    if (this.state.loading) {
    return <Spinner size="large" />;
    }
    return (
    <CustomButton onPress={() => this.onButtonPress(this)}>
    Sign In 
    </CustomButton>

    );

}

render() {
    const { navigation } = this.props;
return (

   <View>
        {this.renderContent()}
    </View>
  

);
}
}

const styles = {
errorTextStyle: {
fontSize: 20,
alignSelf: "center",
color: "red"
},

myHeader:{
    color: '#000000',fontWeight: 'bold' , fontSize: 35, paddingLeft:100, paddingBottom:10
}
};


export {CourseLoader};

