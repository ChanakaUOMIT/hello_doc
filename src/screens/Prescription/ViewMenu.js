import React, { Component } from 'react';

import { View, StyleSheet,TouchableOpacity,Text } from 'react-native';
import style from '../../styles/style';
import CustomHeader from '../../components/Header/Header';

export default class ViewMenu extends Component {
    prescHandler = () => {
        this.props.navigation.navigate('ViewPresc')
    }
    DescHandler = () => {
        this.props.navigation.navigate('ViewDisease')
    }
    reportHandler = () => {
        this.props.navigation.navigate('ViewReport')
    }
    illnessStateHandler = () => {
        this.props.navigation.navigate('ViewillnessState')
    }
    render() {

        const { parent, signupTxtCont, signupTxt, buttonStyle, nextButton } = style
        return (
            <View style={parent}>
                <CustomHeader
                    title="Prescription"
                    leftPress={() => this.props.navigation.goBack()}
                    iconNameRight="md-git-network"
                    iconName="arrow-round-back"
                    type="sub"
                />

                <View style={styles.container}>
                <TouchableOpacity style={buttonStyle} onPress={this.prescHandler}>
                    <Text style={signupTxt}>Prescription</Text>
                </TouchableOpacity>
                <TouchableOpacity style={buttonStyle} onPress={this.DescHandler}>
                    <Text style={signupTxt}>DiseaseDetails</Text>
                </TouchableOpacity>
                <TouchableOpacity style={buttonStyle} onPress={this.reportHandler}>
                    <Text style={signupTxt}>Lab Reports</Text>
                </TouchableOpacity>
                <TouchableOpacity style={buttonStyle} onPress={this.illnessStateHandler}>
                    <Text style={signupTxt}>Illness State</Text>
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
    title: { flex: 1, backgroundColor: '#f6f8fa' },
    row: {  height: 28  },
    text: { textAlign: 'center' }
  });
