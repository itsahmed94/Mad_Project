import React, { Component } from "react";
import { Text , View,Alert, TouchableOpacity} from "react-native";
import Firebase from "./Firebase";
import { withNavigation } from 'react-navigation';
// @flow

//User: abc123@gmail.com
//password: 111222


import { CustomButton, Card, CardSection, Input, Spinner } from "../components/Common";

class Register extends Component {
    static navigationOptions = {
        title: 'Register Form',
        
      };    

state = { email: "", password: "", error: "", loading: false, signIn: false,  loggedIn: false, videoId: "6ZnfsJ6mM5c",notify:""};

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


onButtonPress() {
const {email, password} = this.state;
 //Clear out the Error Message on Every Login Attempt

this.setState({
    error: "",
    loading: true,
    notify: "Registering...."
});


        // Authentication : POST user data in the firebase cloud
        Firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then(this.onLoginSuccess.bind(this))
        .catch((e) => {
            this.onLoginFailed(e);
        })


        


    }



onLoginFailed(e){
    this.setState({error:e.message, loading:false})
}
// Logined Success Function if password is ok then it clear the email , password ,error and loading false ;
onLoginSuccess() {

    this.setState({
    email: "",
    password: "",
    loading: false,
    notify: "Registration Successful",
    signIn: true
    });



}

// Render button function is checking loading true or false if it is true then spinner shows other wise Signin button shows   
renderSignupBtn() {
    if (this.state.loading) {
    return <Spinner size="large" />;
    }
    return (
    <CustomButton onPress={() => this.onButtonPress(this)}>
    Register
    </CustomButton>

    );
11
}


renderNotification(){
    if(this.state.error == ""){
        return(
        <Text style={styles.notifyTextStyle}>{this.state.notify}</Text>)
        }
        else{
            return(
            <Text style={styles.errorTextStyle}>{this.state.error}</Text>)
        }

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
         
            
            
            {/* Register Button */}
            <CardSection>
                {this.renderSignupBtn()}   
                {/* Conditional rendering for showing "loading" iconn */}
            </CardSection>
            
            {/* Register Button */}

            <CardSection>
               {/* For the Error Message */}
               {this.renderNotification()}        
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
},
notifyTextStyle: {
    fontSize: 20,
    alignSelf: "center",
    color: "green"
    },
};


export {Register};

