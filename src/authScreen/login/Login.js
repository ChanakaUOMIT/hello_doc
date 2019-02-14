import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    TouchableOpacity,
    TextInput,
    AsyncStorage
} from 'react-native';
import { Container, Header, Content, Button, Text, Body } from 'native-base';
import style from '../../styles/style';
import Logo from '../../components/login/logo';

class Login extends Component {
    constructor(props) {
                super(props);

        this.state={
            emailAddress:'',
            password:'', 
            validEmail:false,
            validPassword:false
        }

    }

    loginHandler = () => {
        console.log(" loginHandler ");
        console.log("in loginHandler "+this.state.emailAddress);
        console.log("in loginHandler "+this.state.password)

        // url='https://ems.aladinlabs.com/api/auth/login';
        // url='http://localhost:3000/users/login';
        // url='http://10.10.23.5:3000/users/login';
        url='https://hello-doc-app.herokuapp.com/users/login';



        

        console.log(url);

        fetch(url,{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
                
                // 'X-Requested-With':'XMLHttpRequest'
            },
            body:JSON.stringify({
                email:this.state.emailAddress,
                password:this.state.password,
                // remember_me:true

                // email:'student@ems.com',
                // password:'abc123',
                // remember_me:true
                // email:'patient@gmail.com',
                // password:'1111',
                role:"002"
                // // remember_me:true
            })
        })
        .then((response)=> response.json())
        // .then((response)=> console.log(response))

        .then((resJson)=>{
            // console.log(resJson);
            this.dataHandler(resJson);
        })

        

        // this.props.navigation.navigate('DrewerNav')
    }

    dataHandler(data){
        // var success=true;
        console.log(" %%%%%%% dataHandler %%%%%%%%%%");
        console.log("In data Handler in Login ", data);

        // if(data.message === 'Unauthorized'){
        //     console.log('Check ur username n email bcoz Unauthorized')
        //     alert("Check ur username n email bcoz Unauthorized")
        //     return
        // }


        var token=data.token;
        var email=data.email;
        console.log("in dataHandler token "+ token);
        console.log("in dataHandler email "+ email);
    
        this.setToken(token);
        this.setEmail(email);

        console.log(" #########@@@@@@@@ "+data.msg)
        var success=data.success
        console.log("success "+success)

        if(success===undefined){
            console.log(" (((((((((((()))))))))))))))))) ")
            // alert("Please check your input")
            this.props.navigation.navigate('DrewerNav')
        }else if(!data.success ) {
            // this.props.navigation.navigate('DrewerNav')
            alert("Please check your input")

        }

        


    }

    async setEmail(email){
        console.log(" setEmail ****** "+email)
        try{
          await AsyncStorage.setItem("email",email);
          console.log('email saves asyn');
          // this.getToken();
        }catch(error){
          alert("email store error");
        }
      }


    
    async setToken(mytoken){
        console.log(" setToken ****** "+mytoken)
        try{
          await AsyncStorage.setItem("token",mytoken);
          alert('Token saves asyn');
          // this.getToken();
        }catch(error){
          alert("token store error");
        }
      }
    signupHandler = () => {
        this.props.navigation.navigate('SignUp1')
    }
    forgotpwHandler = () => {
        this.props.navigation.navigate('forgotpw')
    }

    handleEmailChange(email){
        const emailCheckRegex=/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

        this.setState({ emailAddress:email});

        if(!this.state.validEmail){
            if(emailCheckRegex.test(email)){
                this.setState({ validEmail : true })
                console.log("this state valid email in if "+this.state.validEmail);
            }else{
                if(!emailCheckRegex.test(email)){
                    this.setState({ validEmail : false })
                console.log("this state valid email in else "+this.state.validEmail);

                }
            }
        }

        console.log("this state valid email in if "+this.state.validEmail);

    }
    handlerPasswordChange(password){
        this.setState({ password });
        
        if(!this.state.validPassword){
            if(password.length >= 6 ){
                //Password has to be at least 6 character long
                this.setState({ validPassword: true})
            }else if(password < 6){
                this.setState({ validPassword: false});
            }
        }

        console.log("in handle password : "+this.state.validPassword);
    }

    toggleNextButtonState(){
        const { validEmail, validPassword }=this.state;
        if(validEmail && validPassword ){
            return false;
        }
        return true;
    }

    render() {
        const { parent, signupButton, signupTxt, signupTxtCont,loginTxt,input,buttonStyle } = style
        // const opacityStyle= disabled? 0.2: 0.8;

        return (
            <View style={parent}>
                <Logo style={alignItems='center'} />
                <Text style={loginTxt}>Login</Text>
                <TextInput 
                    style={input} underlineColorAndroid='#BDBDBD' 
                    placeholder="email"
                    inputType="email"
                    onChangeText={email=>this.handleEmailChange(email)} />
                <TextInput 
                    style={input} secureTextEntry={true} 
                    placeholder="Password" 
                    // onChangeText={text => this.setState({ password: text })} />
                    onChangeText={password => this.handlerPasswordChange(password)} />


                <View style={{ alignItems: 'center' }}>
                    <Button 
                        onPress={this.loginHandler} 
                        style={buttonStyle}
                        // style={[{opacity:opacityStyle},buttonStyle]}

                        // disabled={true}
                        // disabled={this.state.validPassword && this.state.validPassword}

                        // disabled={this.toggleNextButtonState()}
                    >
                        <Text>Login</Text>
                    </Button>
                </View>
                <View style={signupTxtCont}>
                <TouchableOpacity onPress={this.forgotpwHandler}>
                        <Text style={signupButton}>Forgot Password?</Text>
                    </TouchableOpacity>
                </View>
                <View style={signupTxtCont}>
                    <Text style={signupTxt}>Dont have an account yet?</Text>
                    <TouchableOpacity onPress={this.signupHandler}>
                        <Text style={signupButton}>SignUp</Text>
                    </TouchableOpacity>
                </View>

            </View>
        )
    }
}

export default Login;


// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: '#fff',
//         alignItems: 'center',
//         justifyContent: 'center',
//     },
// }); 