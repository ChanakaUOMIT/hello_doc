import React, { Component } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    Alert,
    ScrollView
} from 'react-native';
import style from '../../styles/style';

export default class HealthForm extends Component {
    constructor(props) {
        super(props);

    this.state={
        occu:'',
        weight:'',
        bloodType:'', 
        maritalState:'',
        bp:'',
        nic:'',
    }

}

handleOccuNameChange(name){
    this.setState({
        occu:name
    })
}

handleWeightChange(name){
    this.setState({
        weight:name
    })
}

handlebtypeChange(nic){
    this.setState({
        bloodType:nic
    })
}

handleMSChange(dob){
    this.setState({
        maritalState:dob
    })
}

handleBPChange(address){
    this.setState({
        bp:address
    })
}

handleNICChange(email){
    this.setState({
        nic:email
    })
}

regButton(){
    console.log(" regButton "+this.state.bp);
}



    render() {
        const { input, parent, loginTxt, buttonStyle, signupTxt, nextButton } = style
        return (
            <View style={parent}>
                <Text style={loginTxt}>Enter Basic Health Information </Text>

                <TextInput
                    style={input}
                    placeholder='occupation'
                    // onChangeText={(text) => { this.occu = text }}
                    onChangeText={name=>this.handleOccuNameChange(name)}
                    value={this.name}
                /> 
                <TextInput
                    style={input}
                    placeholder='Weight'
                    // onChangeText={(text) => { this.weight = text }}
                    onChangeText={name=>this.handleWeightChange(name)}

                    value={this.name}
                />
                <TextInput
                    style={input}
                    placeholder='Blood type'
                    // onChangeText={(text) => { this.bloodType = text }}
                    onChangeText={name=>this.handlebtypeChange(name)}

                    value={this.name}
                />
                <TextInput
                    style={input}
                    placeholder='marital State'
                    // onChangeText={(text) => { this.maritalState = text }}
                    onChangeText={name=>this.handleMSChange(name)}

                    value={this.name}
                />
                <TextInput
                    style={input}
                    placeholder='Blood pressure level'
                    // onChangeText={(text) => { this.bp = text }}
                    onChangeText={name=>this.handleBPChange(name)}

                    value={this.name}
                />
                <TextInput
                    style={input}
                    placeholder='NIC'
                    // onChangeText={(text) => { this.nic = text }}
                    onChangeText={name=>this.handleNICChange(name)}

                    value={this.name}
                />

                {/* <TextInput
                    style={input}
                    placeholder='Social Diseases'
                    onChangeText={(text) => { this.social = text }}
                    value={this.cholesterol}
                />

                <TextInput
                    style={input}
                    placeholder='Allergies'
                    onChangeText={(text) => { this.allergies = text }}
                    value={this.cholesterol}
                /> */}

                <View>
                    <TouchableOpacity
                        style={buttonStyle} onPress={this.regButton}>
                        <Text> Save </Text>
                    </TouchableOpacity>
                </View>

            </View>
        )
    };
}
