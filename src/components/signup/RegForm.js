import React, { Component } from 'react';
import {View, 
        Text,
        TextInput,
        TouchableOpacity,
        ScrollView,
        AsyncStorage
} from 'react-native';

import style from '../../styles/style';

export default class RegForm extends Component { 

    constructor(props) {
        super(props);

    this.state={
        f_name:'',
        l_name:'',
        nic:'', 
        // dob:'',
        // address:'',
        email:'',
        number:'',
        // occu:'',
        city:'',
        street:'',
        add_no:'',
        pwd:'',
        roleId:"002"
    }

}

    handleFirstNameChange(name){
        this.setState({
            f_name:name
        })
    }

    handlLastNameChange(name){
        this.setState({
            l_name:name
        })
    }

    handleNICChange(nic){
        this.setState({
            nic:nic
        })
    }

    handledobChange(dob){
        this.setState({
            dob:dob
        })
    }

    // handleaddreessChange(address){
    //     this.setState({
    //         address:address
    //     })
    // }

    handleEmailChange(email){
        this.setState({
            email:email
        })
    }

    handlenumberChange(number){
        this.setState({
            number:number
        })
    }

    handleOccupationChange(occu){
        this.setState({
            occu:occu
        })
    }

    handleCityChange(data){
        this.setState({
            city:data
        })
    }

    handleStreetChange(data){
        this.setState({
            street:data
        })
    }

    handleaddreessNoChange(data){
        this.setState({
            add_no:data
        })
    }
    handlePWDChange(data){
        this.setState({
            pwd:data
        })
    }

    regButton(){
        console.log("In register patient");
        console.log(this.state.f_name);
        console.log(this.state.l_name);
        console.log(this.state.nic);
        // console.log(this.state.dob);
        console.log(this.state.city);
        console.log(this.state.add_no);
        console.log(this.state.street);
        console.log(this.state.email);
        console.log(this.state.number);
        // console.log(this.state.occu);
        console.log(this.state.pwd);

        this._sendRequest();    roleId :"002"

    }

    _sendRequest(){
        console.log("I am in send request");

        url='https://hello-doc-app.herokuapp.com/users/addUsers';        

    console.log(url);

    fetch(url,{
        method:'POST',
        headers:{
            'Content-Type':'application/json'
            
            // 'X-Requested-With':'XMLHttpRequest'
        },
        body:JSON.stringify({

            // NIC:'33434l1dd97',
            // firstName:'dfdsf',
            // lastName :'dfdsf',
            // contactNo :'dfdsf',
            // email :'dfds7dfd19s',
            // password :'dfdsdf',
            // addNo :'dfdsf',
            // addStreet:'dfdsf',
            // addCity:'dfdsf',
            // roleId :"002"

            NIC:this.state.nic,
            firstName:this.state.f_name,
            lastName :this.state.l_name,
            contactNo :this.state.number,
            email :this.state.email,
            password :this.state.pwd,
            addNo :this.state.add_no,
            addStreet:this.state.addStreet,
            addCity:this.state.addCity,
            roleId :this.state.roleId
            
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
    console.log(" %%%%%%% dataHandler %%%%%%%%%%");
    console.log("In data Handler in Login ", data);

    // if(data.message === 'Unauthorized'){
    //     console.log('Check ur username n email bcoz Unauthorized')
    //     alert("Check ur username n email bcoz Unauthorized")
    //     return
    // }

    var signupDecision=data.success;
    // var email=data.email;
    console.log("in dataHandler signupDecision "+ signupDecision);

    if(!signupDecision){
        alert(data.msg)
    }else{
        alert(data.msg)
        this.setSignupDecision()
    }
    // console.log("in dataHandler email "+ email);

    // this.setToken(token);
    // this.setEmail(email);

}

async setSignupDecision(){
    // console.log(" setEmail ****** "+email)
    try{
      await AsyncStorage.setItem("signupDecision","true");
      console.log('signupDecision saves asyn');
      // this.getToken();
    }catch(error){
      alert("signupDecision store error",error);
    }
  }


    
  
     
    render () {
        
        const { input, parent,loginTxt,buttonStyle,signupTxt,nextButton } = style
        return (
            <ScrollView>
                <View style={parent}>
                <Text style={loginTxt}>Enter Basic Information </Text>
                <TextInput 
                    style={input} 
                    placeholder='Enter  First Name'
                    // onChangeText={(text) => {this.name =text}}
                    // onChangeText={email=>this.setState(email=email)} 
                    onChangeText={name=>this.handleFirstNameChange(name)}
                    value= {this.name}
                />

                <TextInput 
                    style={input} 
                    placeholder='Enter Last Name'
                    // onChangeText={(text) => {this.name =text}}
                    // onChangeText={email=>this.setState(email=email)} 
                    onChangeText={name=>this.handlLastNameChange(name)}
                    value= {this.name}
                />
                <TextInput 
                    style={input} 
                    placeholder='Enter NIC'
                    // onChangeText={(text) => {this.nic =text}}
                    onChangeText={NIC=>this.handleNICChange(NIC)}
                    value= {this.nic} 
                />
                {/* <TextInput 
                    style={input} 
                    placeholder='Enter Date of Birth'
                    // onChangeText={(text) => {this.dob =text}}
                    onChangeText={dob=>this.handledobChange(dob)}
                    value= {this.dob}
                 /> */}
                <TextInput 
                    style={input} 
                    placeholder='Enter Address No:' 
                    // onChangeText={(text) => {this.addr =text}}
                    onChangeText={addreess=>this.handleaddreessNoChange(addreess)}
                    value= {this.addr}
                />
                <TextInput 
                    style={input} 
                    placeholder='Enter Street' 
                    // onChangeText={(text) => {this.addr =text}}
                    onChangeText={addreess=>this.handleStreetChange(addreess)}
                    value= {this.addr}
                />
                <TextInput 
                    style={input} 
                    placeholder='Enter City' 
                    // onChangeText={(text) => {this.addr =text}}
                    onChangeText={addreess=>this.handleCityChange(addreess)}
                    value= {this.addr}
                />
                <TextInput 
                    style={input} 
                    placeholder='Enter email' 
                    // onChangeText={(text) => {this.email =text}}
                    onChangeText={email=>this.handleEmailChange(email)}
                    value= {this.email}
                />
                <TextInput 
                    style={input} 
                    placeholder='Enter mobile number' 
                    // onChangeText={(text) => {this.mobile =text}}
                    onChangeText={number=>this.handlenumberChange(number)}
                    value= {this.mobile}
                />

                <TextInput 
                    secureTextEntry={true}
                    style={input} 
                    placeholder='Enter Password' 
                    // onChangeText={(text) => {this.mobile =text}}
                    onChangeText={pwd=>this.handlePWDChange(pwd)}
                    value= {this.mobile}
                />
                {/* <TextInput 
                    style={input} 
                    placeholder='Enter Occupation' 
                    // onChangeText={(text) => {this.mobile =text}}
                    onChangeText={Occupation=>this.handleOccupationChange(Occupation)}
                    value= {this.mobile}
                 /> */}

               {/*<TouchableOpacity
                    style={buttonStyle} onPress= {this.profile}>
                    <Text> View Profile </Text>
               </TouchableOpacity>*/}

                <View>
                    <TouchableOpacity
                        style={buttonStyle} onPress = {()=>this.regButton()}>
                        <Text> Register</Text>
                    </TouchableOpacity>

                {/* <ScrollView>
                        {dataDisplay}
                </ScrollView>*/}
               </View>
                
            </View>
            </ScrollView>
        )
    };
}
