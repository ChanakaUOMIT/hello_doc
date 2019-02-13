import React, { Component } from 'react';

import { View, Text, TouchableOpacity } from 'react-native';
import style from '../../styles/style';
import CustomHeader from '../../components/Header/Header';
import RegForm from '../../components/signup/RegForm';

export default class SignUp1 extends Component {

    gotoLoginHandler = () => {
        this.props.navigation.navigate('Login')
    }

    basicHealthHandler = () => {
        // this.props.navigation.navigate('SignUp2')
        this.props.navigation.goBack();
    }

    render() {
        const { parent, signupTxtCont, signupTxt, signupButton, nextButton } = style
        return (
            <View style={parent}>
                <CustomHeader 
                    title="Basic Information"
                    leftPress={() => this.props.navigation.goBack()}
                    iconNameRight="md-git-network"
                    iconName="arrow-round-back"
                    type="sub"
                />
                <RegForm type="SignUp" />
                <View>
                    <TouchableOpacity
                        style={nextButton} onPress={this.basicHealthHandler}>
                        <Text> Login </Text>
                    </TouchableOpacity>
                </View>
                <View style={signupTxtCont}>
                    <Text style={signupTxt}>Alrady have an Account?</Text>
                    <TouchableOpacity onPress={this.gotoLoginHandler}>
                        <Text style={signupButton}>SignIn</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}
