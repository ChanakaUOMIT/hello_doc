import React, { Component } from 'react';

import { View, Text, TouchableOpacity } from 'react-native';
import style from '../../styles/style';
import CustomHeader from '../../components/Header/Header';

export default class SignUp1 extends Component {

    render() {
        const { parent, signupTxtCont, signupTxt, signupButton, nextButton } = style
        return (
            <View>
                <CustomHeader
                    title="Forgot Password?"
                    leftPress={() => this.props.navigation.goBack()}
                    iconNameRight="md-git-network"
                    iconName="arrow-round-back"
                    type="sub"
                />
                <View style={parent}>
                    <Text>Forgot Password</Text>
                </View>
            </View>
        )
    }
}
