import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import DateTimePicker from 'react-native-modal-datetime-picker';
import moment from 'moment'
import CustomHeader from '../../components/Header/Header';
import style from '../../styles/style';

export default class PrescriptionScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isVisible: false,
            choosenDate: ''

        };
    }

    viewHandler = () => {
        this.props.navigation.navigate('viewHandle')
    }

    handlePicker = (date) => {
        console.log(" &&&&&&&&&&&&& "+date)
        console.log(" %%%%%%%% "+dateToString(date))
        this.setState({
            isVisible: false,
            choosenDate: moment(date).format('MMMM, Do YYYY')
        })
    }

    showPicker = () => {
        this.setState({
            isVisible: true
        })
    }

    hidePicker = () => {
        this.setState({
            isVisible: false
        })
    }


    render() {

        const { parent, signupTxt, buttonStyle, timeText,
            headText, imagepic, iconimg, iconView } = style

        return (

            <View style={{flexGrow: 1}}>
                <CustomHeader
                    title="PrescriptionScreen"
                    openDrawer={() => this.props.navigation.openDrawer()}
                    iconName="ios-list"
                />

                <View style={parent}>

                    <Text style={headText}>
                        View Prescription
             </Text>

                    <Image
                        style={imagepic}
                        source={require('../../Images/medical-prescription.jpg')}
                    />

                    <Text style={timeText} >
                        {this.state.choosenDate}
                    </Text>

                    <TouchableOpacity style={buttonStyle} onPress={this.showPicker}>
                        <Text style={signupTxt}>Pick Date</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={buttonStyle} onPress={this.viewHandler}>
                        <Text style={signupTxt}>View</Text>
                    </TouchableOpacity>


                    <DateTimePicker
                        isVisible={this.state.isVisible}
                        onConfirm={this.handlePicker}
                        onCancel={this.hidePicker}
                        mode={'date'}
                    />

                    {/* <DatePicker
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

                        /> */}

                    
                </View> 

            </View>
        )
    }
}

PrescriptionScreen.navigationOptions = {
    tabBarIcon: ({ tintColor, focused }) => (
        <Icon
            name={focused ? 'ios-list' : 'ios-list'}
            size={28}
            color={tintColor}
        />

    )
}
