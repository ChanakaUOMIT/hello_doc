import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image,
} from 'react-native';
import CustomHeader from '../../components/Header/Header';
import Icon from 'react-native-vector-icons/Ionicons';
import SendSMS from 'react-native-sms';

export default class ChatScreen extends Component {
    constructor(props) {
        super(props);


    }

    someFunction() {
        SendSMS.send({
            //Message body
            body: ' ',
            //Recipients Number
            recipients: ['0769288884','0713067517'],
            //An array of types that would trigger a "completed" response when using android
            successTypes: ['sent', 'queued']
        }, (completed, cancelled, error) => {
            if (completed) {
                console.log('SMS Sent Completed');
            } else if (cancelled) {
                console.log('SMS Sent Cancelled');
            } else if (error) {
                console.log('Some error occured');
            }
        });
    }
    render() {
        return (
            <View>
                <CustomHeader
                    title="ChatScreen"
                    openDrawer={() => this.props.navigation.openDrawer()}
                    iconName="md-phone-portrait"
                />
            

            <View style={styles.MainContainer}>
                <TouchableOpacity onPress={this.someFunction.bind(this)}>
                    <View>
                        <Image
                            //We are showing the Image from online
                            source={require('../../Images/Messaging.png')}
                            //You can also show the image from you project directory like below
                            //source={require('./Images/sms.png')}
                            style={styles.ImageStyle}
                        />
                        <Text style={styles.text}>Send SMS</Text>
                    </View>
                </TouchableOpacity>
            </View>
            </View>
         );
    }
}




const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        color: 'black',
        textAlign:'center',
        fontSize: 25,
        marginTop:16,
      },
      ImageStyle: {
        height: 150,
        width: 150,
        resizeMode: 'stretch',
        alignItems:'center',
        justifyContent:'center',
        marginTop:120,
        marginLeft:120
      },
});

ChatScreen.navigationOptions = {
    tabBarIcon: ({ tintColor, focused }) => (
        <Icon
            name={focused ? 'md-phone-portrait' : 'ios-phone-portrait'}
            size={28}
            color={tintColor}
        />

    )
}