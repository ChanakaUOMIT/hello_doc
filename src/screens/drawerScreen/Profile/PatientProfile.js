import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  AsyncStorage,
  ActivityIndicator
} from 'react-native';
import CustomHeader from '../../../components/Header/Header';
export default class PatientProfile extends Component {

  constructor(props){
    super(props);
    this.state={
      isLoading:true,
      patient_details:null
    }
  }


  componentDidMount(){
    this.getPatientEmail()
    // this.getDoctorDetails() 
         
}

  async getPatientEmail(){
    console.log("getPatientEmail ");
    try{
        let email=await AsyncStorage.getItem("email");
        console.log('email get asyn '+email);
        this.set_email(email)
        // this.getToken();
      }catch(error){
        alert("getPatientEmail store error ",error);
      }
}

set_email(email){
  this.setState({
    email:email
  })

  console.log("I am in Patient Profile "+this.state.email);
  this.request_patient_details();

}

request_patient_details(){
  var email=this.state.email;
  console.log("I am in request_patient_details in select doctor "+email);
  fetch(`https://hello-doc-app.herokuapp.com/patient/profile`,{
      method:'POST',
      headers:{
          'Content-Type':'application/json'
          
          // 'X-Requested-With':'XMLHttpRequest'
      },
      body:JSON.stringify({
        email:email,
    })
  })
  .then((response)=> response.json())
  // .then((response)=> console.log(response))

  .then((resJson)=>{
      // console.log(resJson);
      this.dataHandler(resJson);
  })

  

  // this.props.navigation.navigate('DrewerNav');
}

dataHandler(data){
  console.log(" %%%%%%% dataHandler in Patient Profile %%%%%%%%%%");
  console.log("In data Handler in  Patient Profile ", data);

  console.log("data.success "+data.success);

  // if(data.message === 'Unauthorized'){
  //     console.log('Check ur username n email bcoz Unauthorized')
  //     alert("Check ur username n email bcoz Unauthorized")
  //     return
  // }

  // const token=data.token;
  // console.log("in dataHandler token "+ token);

  this.set_patient_details(data.msg);
}

set_patient_details(data){
  console.log("set_patient_details ",data);
  this.setState({
      patient_details:data,
      isLoading:false
  })

  console.log("set_patient_details in state ", this.state.patient_details);
  console.log("set_patient_details in state ", this.state.isLoading);
}

render(){
  if(this.state.isLoading){
      return(
          <View>
              <ActivityIndicator size="large" color="red" />
          </View>
      )
  }


  else{
    // render() {
      var data =this.state.patient_details[0];
  
      console.log("<<<<<<<<<<<<<<>>>>>>>>>>>>>>>> ",data.NIC);
  
      return (
        <View style={styles.container}>
        <CustomHeader
                      title="Pick Date"
                      leftPress={() => this.props.navigation.goBack()}
                      iconNameRight="md-git-network"
                      iconName="arrow-round-back"
                      type="sub"
                  />
            <View style={styles.header}></View>
            <Image style={styles.avatar} source={require('../../../Images/patient1.png')} />
            <View style={styles.body}>
              <View style={styles.bodyContent}>
                <Text style={styles.name}>{data.firstName} {data.lastName}</Text>
                <View style={styles.pdetails}>
                  <Text>DOB:{data.dob}</Text>
                  <Text>Address:{data.addStreet}, {data.city}</Text>
                  <Text>Marital State:{data.maritalState.data[0]}</Text>
                  <Text>Height:{data.height}</Text>
                  <Text>Weight:{data.weight}</Text>
                  <Text>Occupation:{data.occupation}</Text>
                </View>
              </View>
            </View>
        </View>
      );

  }
}

  
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#00BFFF",
    height: 200,
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "white",
    marginBottom: 10,
    alignSelf: 'center',
    position: 'absolute',
    marginTop: 130
  },
  name: {
    fontSize: 22,
    color: "#FFFFFF",
    fontWeight: '600',
    marginTop: 300
  },
  body: {
    marginTop: 40,
  },
  bodyContent: {
    flex: 1,
    alignItems: 'center',
    padding: 30,
  },
  name: {
    fontSize: 28,
    color: "#696969",
    fontWeight: "600"
  },
  info: {
    fontSize: 16,
    color: "#00BFFF",
    marginTop: 10
  },
  description: {
    fontSize: 16,
    color: "#696969",
    marginTop: 10,
    textAlign: 'center'
  },
  buttonContainer: {
    marginTop: 10,
    height: 45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    width: 250,
    borderRadius: 30,
    backgroundColor: "#00BFFF",
  },
  
});