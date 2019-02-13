import React, { Component } from 'react';
//import react in our code. 
import { View, StyleSheet, TouchableOpacity, Text,AsyncStorage } from 'react-native';
//import all the components we are going to use.
import DatePicker from 'react-native-datepicker';
import CustomHeader from '../../components/Header/Header';



export default class PickDate extends Component {

    constructor(props) {
        super(props)
        //set value in state for initial date
        this.state = { 
            date: "2019-02-02" ,
            currentDate:''
        
        }
    }

    componentDidMount(){ 
        this.getDate();
    }

    getDate(){
        console.log("Pick Date");

        let today = new Date().toISOString().slice(0, 10)

        console.log(today)

        // var x = 2; //or whatever offset
        // var CurrentDate = new Date();
        // CurrentDate.setMonth(CurrentDate.getMonth() + x);
        // console.log("CurrentDate.setMonth(CurrentDate.getMonth() + x); "+CurrentDate);

        // var d = new Date();
        // CurrentDate.setMonth(CurrentDate.getMonth() + x);
        // today.setMonth(today.getMonth() + 10);


        // var maxDate=today.setMonth(today.getMonth() - 3);
        this.setCurrentDate(today);

        // console.log("var maxDate=setMonth(today.getMonth() - 3); "+maxDate);

        

    }

    setCurrentDate(today){ 
        console.log(" setCurrentDate "+ today);

        // this.state.currentDate=today
        this.setState({
            currentDate:today,
            selectDate:today
        })

        console.log(" getDate in state "+ this.state.currentDate+ " dfdfd");


    }
 
    async setSelectDate(){
        console.log("[PickDate.js] set_select_date ****** "+this.state.selectDate)
        try{
          await AsyncStorage.setItem("selectDate",this.state.selectDate);
          console.log('selectDate saves asyn');
          // this.getToken();
        }catch(error){
          alert("selectDate store error");
        }
    }

    picktimeHandler = () => {
        console.log("[PickDate.js] picktimeHandler "+this.state.currentDate+" *** "+this.state.selectDate);
        this.setSelectDate();
        this.props.navigation.navigate('PickTimeApp')
    }

    render() {
        console.log("I am in Render " +this.state.currentDate+" ***********");
        return (
            <View>
                <CustomHeader 
                    title="Pick Date"
                    leftPress={() => this.props.navigation.goBack()}
                    iconNameRight="md-git-network"
                    iconName="arrow-round-back"
                    type="sub"
                />

<DatePicker
        // style={[{width: 200},styles.container]}
        // style={{width: 200}}
        style={styles.container}
        date={this.state.selectDate}
        mode="date"
        placeholder="select date"
        format="YYYY-MM-DD"
        // minDate="2019-01-01"
        minDate={this.state.currentDate}
        maxDate="2019-12-31"
        confirmBtnText="Confirm"
        cancelBtnText="Cancel"
        customStyles={{
          dateIcon: {
            position: 'absolute',
            left: 0,
            top: 4,
            marginLeft: 0
          },
          dateInput: {
            marginLeft: 36
          }
          // ... You can check the source to find the other keys.
        }}
        // onDateChange={(date) => {this.setState({currentDate: date})}}
        onDateChange={(date) => {this.setState({selectDate: date})}}

      />

                <Text>Date Picker</Text>
                <View>
                <TouchableOpacity onPress={this.picktimeHandler} style={styles.button}>
                    <Text style={styles.buttonText}>Time Slots</Text>
                </TouchableOpacity>
                </View>

            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        // backgroundColor: 'white',
        // flex: 1,
        alignItems: 'center',
        marginLeft:50,
        marginTop:200,
        width:300
    },
    test: {
        color: '#ffffff',
        fontSize: 25,
    },
    button: {
        backgroundColor: '#1c313a',
        width: 250,
        borderRadius: 25,
        marginVertical: 10,
        paddingVertical: 12,
        marginTop:200,
        marginLeft:80



    },


    buttonText: {
        fontSize: 16,
        fontWeight: '500',
        color: '#ffffff',
        textAlign: 'center'
    }
});