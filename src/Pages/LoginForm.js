import React, { Component } from "react";
import { Text , View,Alert, TouchableOpacity} from "react-native";
import Firebase from "./Firebase";
import { withNavigation } from 'react-navigation';
// @flow

//User: abc123@gmail.com
//password: 111222


import { CustomButton, Card, CardSection, Input, Spinner } from "../components/Common";

class LoginForm extends Component {

    static navigationOptions = {
        title: 'Login Form'
        
      };
        

state = { email: "", password: "", error: "", loading: false, signIn: false,  loggedIn: false, videoId: "6ZnfsJ6mM5c" };


constructor(props){
    super(props)
    this.props.navigation.setParams({myPageTitle: 'Login Form'});

   

      Firebase.auth().onAuthStateChanged(user => {
        if (user) {
            this.setState({ loggedIn: true });
            this.setState({ loggedIn: true });
        } else {
        this.setState({ loggedIn: false });
        }
        });

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


    <Card containerStyle={{backgroundColor: 'pink'}}>





            {/*Email */}
            <CardSection>
            {}
            <Input
            autoCorrect
            placeholder="user@email.com"
            label="Email: "
            value={this.state.email}
            onChangeText={email => this.setState({ email })}
            />
            </CardSection>
            
            
            {/*Password */}
            <CardSection>
                <Input
                secureTextEntry
                placeholder="password"
                label="Password"
                value={this.state.password}
                onChangeText={password => this.setState({ password })}
                />
            </CardSection>
            {/* For the Error Message */}
            <Text style={styles.errorTextStyle}>{this.state.error}</Text>
            
            
            {/* Login Button */}
            <CardSection>
                {this.renderSignInBtn()}   
                {/* Conditional rendering for showing "loading" iconn */}
            </CardSection>
            
            {/* Login Button */}

            <CardSection>
                <Text>Not Registered? </Text>
                <CustomButton onPress={() => navigation.navigate("Register")}>
                Register Now 
                </CustomButton>
                
            </CardSection>

    </Card>

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


export {LoginForm};

