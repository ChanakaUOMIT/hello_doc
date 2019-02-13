import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    ProgressBarAndroid,
    ScrollView
} from 'react-native';

import style from '../../styles/style';
import CustomHeader from '../../components/Header/Header';
import ProfileForm from '../../components/signup/profilePicForm';

export default class ProfilePic extends Component {

    render() {
        const { parent, signupTxtCont, signupTxt, signupButton, pbar, progBar, form } = style
        return (
            <View style={parent}>
                <CustomHeader 
                    title="Add Profile Picture"
                    leftPress={() => this.props.navigation.goBack()}
                    iconNameRight="md-git-network"
                    iconName="arrow-round-back"
                    type="sub"
                />
                <View style={progBar}>
                    <ProgressBarAndroid
                        style={pbar}
                        styleAttr="Horizontal"
                        indeterminate={false}
                        progress={0.66}
                    />
                </View>
                <View style={form}>
                    <ProfileForm type="ProfileForm" />
                </View>

                <View>
                    <ScrollView>

                    </ScrollView>
                </View>
            </View>

        )
    }
}
