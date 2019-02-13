import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    AsyncStorage
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import DropdownMenu from 'react-native-dropdown-menu';
import style from '../../styles/style';
import CustomHeader from '../../components/Header/Header';


export default class AppointmentScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            text: ''
        };
    }

    selectdocHandler = () => {
        console.log("selectdocHandler in appoiment "+this.state.text);
        this.setField();
        this.props.navigation.navigate('selectDoc') 
    }

    async setField(){
        var field=this.state.text;
        console.log("setField in appoinmentScreen "+field);

        try{
            await AsyncStorage.setItem("field",field);
            console.log("field saved in async ")
            alert('field saves asyn');
            // this.getToken();
          }catch(error){
            alert("field store error");
          }


    }    

    render() {

        const { parent, headText, drpView, drpDown, buttonStyle,signupTxt,iconView,iconimg  } = style

        var data = [["All", "Cardiologist", "Surgeon", "Physician", "Psychiastrist"]];
        return (
            <View style={parent}>
            <CustomHeader 
                    title="AppointmentScreen"
                    openDrawer={() => this.props.navigation.openDrawer()}
                    iconName="md-phone-portrait"
                />
                <View style={drpView}>
                    <Text style={headText}>Search Doctor</Text>
                    <View style={{ height: 64 }} />
                    <DropdownMenu
                        style={drpDown}
                        bgColor={'grey'}
                        tintColor={'#666666'}
                        activityTintColor={'green'}

                        // arrowImg={}      
                        // checkImage={}   
                        // optionTextStyle={{color: '#333333'}}
                        // titleStyle={{color: '#333333'}} 
                        // maxHeight={300} 
                        handler={(selection, row) => this.setState({ text: data[selection][row] })}
                        data={data}
                    >
                    </DropdownMenu>

                    <View style={iconView}>
                    <TouchableOpacity onPress={this.selectdocHandler}>
                        <Icon name='md-arrow-dropright-circle' size={40} style={iconimg} />
                    </TouchableOpacity>
                </View>
                </View>
              
                
                
                        
            </View>

        )
    }
}

AppointmentScreen.navigationOptions = {
    tabBarIcon: ({ tintColor, focused }) => (
        <Icon
            name={focused ? 'md-calendar' : 'ios-calendar'}
            size={28}
            color={tintColor}
        />

    )
}