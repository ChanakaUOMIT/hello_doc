import React, { Component } from 'react';

import { View, StyleSheet,TouchableOpacity,Text,AsyncStorage } from 'react-native';
import style from '../../styles/style';
import CustomHeader from '../../components/Header/Header';
import { Table, TableWrapper, Row, Rows, Col } from 'react-native-table-component';
import Icon from 'react-native-vector-icons/Ionicons';

export default class AppointmentSummary extends Component {

    constructor(props) {
        super(props);
        this.state = {
            //tableHead: ['', 'Head1', 'Head2', 'Head3'],
            tableTitle: ['Doctor:', 'Date:', 'Time:', 'No:', 'Fee'], 
            tableData: [
                ['Kapila'],
                ['20-10-2019'],
                ['17:30'],
                ['10'],
                ['1500']
            ],

            table_data:[]
        }
    }

    componentWillMount(){
        console.log("[ViewAppDetails.js] componentWillMount");
        this.getData();
    }

    async getData(){
        try{
            let email=await AsyncStorage.getItem("email");
            let selectDate=await AsyncStorage.getItem("selectDate");
            let selectTime=await AsyncStorage.getItem("selectTime");
            let doctor_reg=await AsyncStorage.getItem("doctor_reg");

            console.log('email get asyn '+email);
            console.log('selectDate get asyn '+selectDate);
            console.log('selectTime get asyn '+selectTime);
            console.log('doctor_reg get asyn '+doctor_reg);

            this.setState({
                email:email,
                selectDate:selectDate,
                selectTime:selectTime,
                doctor_reg:doctor_reg
            })

            this.state.table_data.push(email);
            this.state.table_data.push(selectDate);
            this.state.table_data.push(selectTime);
            this.state.table_data.push(doctor_reg);


            console.log("********** ",this.state.table_data," **********");
            console.log("********** ",this.state.tableData," **********");



            console.log("in state data [ViewAppDetails.js]")
            console.log('email get asyn '+this.state.email);
            console.log('selectDate get asyn '+this.state.selectDate);
            console.log('selectTime get asyn '+this.state.selectTime);
            console.log('doctor_reg get asyn '+this.state.doctor_reg);


            // this.getToken();
          }catch(error){
            alert("token store error", error);
          }
    }

    // async getStudentDetails(){
    //     try{
    //         let StudentDetails=await AsyncStorage.getItem("studentDetails");
    //         console.log("StudentDetails getStudentDetails Function in Manage Student : "+StudentDetails);
    
    //         // JSONObject jsonObj = new JSONObject("your string");
    //         var students_details_json = JSON.parse(StudentDetails);
    
    //         // let studentsJson=StudentDetails.json();
    //         console.log("pass getStudentDetails Function in Manage Student : ", students_details_json);
            
    //         if(StudentDetails!=null){
    //           this.handleUserDetails(students_details_json);
    //         }else{
    //           console.log("Opps not a students_details_json")            
    //         }
    //       }catch(error){
    //         // alert("IN Student Management "+error);   
    //         console.log("IN Student Management "+error);   
    //       }
    // }

    appointmentHandler = () => {
        this.props.navigation.navigate('appback')
    }

    appointmentConfirmHandler=()=>{
        console.log("appointmentConfirmHandler");

            console.log('appointmentConfirmHandler email get asyn '+this.state.email);
            console.log('appointmentConfirmHandler selectDate get asyn '+this.state.selectDate);
            console.log('appointmentConfirmHandler selectTime get asyn '+this.state.selectTime);
            console.log('appointmentConfirmHandler doctor_reg get asyn '+this.state.doctor_reg);
        
        url='https://hello-doc-app.herokuapp.com/appointment/addappointment'; 

        console.log(url);

        fetch(url,{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
                
                // 'X-Requested-With':'XMLHttpRequest'
            },
            body:JSON.stringify({

                email:this.state.email,
                appDate:this.state.selectDate,
                appTime:this.state.selectTime,
                doctorRegNo:this.state.doctor_reg
                
                // email:"patient@gmail.com",
                // appDate:"2019-02-11",
                // appTime:"15.59",
                // doctorRegNo:"8877"
                
            })
        })
        .then((response)=> response.json())
        // .then((response)=> console.log(response))

        .then((resJson)=>{
            // console.log(resJson);
            this.dataHandler(resJson);
        })
    }
    dataHandler(data){
        console.log(" Data ",data);
        console.log("msg "+data.msg);
        if(data.msg === "already registerd"){
            alert("already registerd please try another time slot");
            this.props.navigation.pop();
        }
        else if(data.msg === "Appointment Done"){
            alert("Appointment Done");
        }
    }

    render() {
        const state = this.state;
        const { parent, iconimg,iconView } = style
        return (
            <View style={parent}>
                <CustomHeader
                    title="Appointment Summary"
                    leftPress={() => this.props.navigation.goBack()}
                    iconNameRight="md-git-network"
                    iconName="arrow-round-back"
                    type="sub"
                />

                <View style={styles.container}>
                    <Table>
                        <Row data={state.tableHead} flexArr={[1, 2, 1, 1]} style={styles.head} textStyle={styles.text} />
                        <TableWrapper style={styles.wrapper}>
                            <Col data={state.tableTitle} style={styles.title} heightArr={[28, 28]} widthArr={[40,60]} textStyle={styles.text} />
                            <Rows data={state.tableData} flexArr={[2, 1, 1]} style={styles.row} textStyle={styles.text} />
                        </TableWrapper>
                    </Table>

                <View>
                    <Text>selectDate : {this.state.selectDate}</Text>
                    <Text>selectTime : {this.state.selectTime}</Text>
                    <Text>email : {this.state.email}</Text>
                    <Text>doctor_reg : {this.state.doctor_reg}</Text>
                </View>
                </View>

                

                <View style={iconView}>
                        <TouchableOpacity onPress={this.appointmentHandler}>
                            <Icon name='md-arrow-dropleft-circle' size={40} style={iconimg} />
                        </TouchableOpacity>
                        </View>

                <View>
                    <TouchableOpacity onPress={this.appointmentConfirmHandler}>
                        <Text>Confirm !!!</Text>
                    </TouchableOpacity>
                </View>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: { flex: 1, padding: 16, paddingTop: 80, backgroundColor: '#fff' },
    head: {  height: 40,  backgroundColor: '#f1f8ff'  },
    wrapper: { flexDirection: 'row' },
    title: { flex: 1, width:40, backgroundColor: '#f6f8fa' },
    row: {  height: 28  },
    text: { textAlign: 'center' }
  });
