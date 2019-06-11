import React, { Component } from "react";
import { Text , View,Alert} from "react-native";
import firebase from "firebase";

import { CustomButton, Card, CardSection, Input, Spinner } from "../components/Common";

class LoginForm extends Component {
// To handle the text input we need the state in the action

state = { email: "", password: "", error: "", loading: false, signIn: false };

//Helper method onButtonPress() to Login the user
onRegister(){
    const { email, password } = this.state;
    //Firebase mathod to login using userid & password

    //Clear out the Error Message on Every Login Attempt
    this.setState({ error: "", loading: true });

    // Authentication : Fetching data from cloud and exception handling .

    

}
onButtonPress() {

const { email, password, signIn } = this.state;
//Firebase mathod to login using userid & password

//Clear out the Error Message on Every Login Attempt
this.setState({ error: "", loading: true });
// Authentication : Fetching data from cloud and exception handling .

firebase
.auth()
.signInWithEmailAndPassword(email, password)
.then(this.onLoginSuccess.bind(this))
.catch(() => {
firebase
.auth()
.createUserWithEmailAndPassword(email, password)
.then(this.onLoginSuccess.bind(this))
.catch(this.onLoginFailed.bind(this));

});

}
// Logined Failed Function if password is wrong then it shows an error and loading false;

onLoginFailed() {
this.setState({
error: "Authentication Failed",
loading: false
});
}
// Logined Success Function if password is ok then it clear the email , password ,error and loading false ;

onLoginSuccess() {
this.setState({
email: "",
password: "",
loading: false,
error: "",
signIn: true
});
{ this.props.navigation.navigate('Home')}
}

// Render button function is checking loading true or false if it is true then spinner shows other wise Signin button shows   

renderButton() {
if (this.state.loading) {
return <Spinner size="large" />;
}
return (
<CustomButton onPress={this.onButtonPress.bind(this)}>
Sign In this
</CustomButton>

);

}

render() {
return (


    <Card>

    <CardSection>    
   <View>     
        <Text style ={{color: '#000000',fontWeight: 'bold' , fontSize: 35, paddingLeft:100, paddingBottom:10}}>Login Form</Text>
        </View>
    </CardSection>



{/* For User ID */}
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
{/* For Password */}
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
{/* For the Login Button */}
<CardSection>
{this.renderButton()}
{/* Moved to renderButton() <CustomButton onPress={this.onButtonPress.bind(this)}>
Sign In
</CustomButton> */}
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
}
};


export default LoginForm;

