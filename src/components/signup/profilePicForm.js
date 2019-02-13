import React, { Component } from 'react';
import {View, 
        Text,
        TextInput,
        TouchableOpacity,
        Alert,
        ScrollView
} from 'react-native';
import style from '../../styles/style';


export default class ProfileForm extends Component {
  

    render () {
        /*const data = this.state.apiData;*/
        
        const { input, parent,loginTxt,buttonStyle,signupTxt,nextButton } = style
        return (
            <View style={parent}>
                <Text style={loginTxt}>One step more! </Text>
                
                <TextInput 
                    style={input} 
                    placeholder='User Name'
                    onChangeText={(text) => {this.height =text}}
                    value= {this.height}
                />
                <TextInput 
                    style={input} 
                    placeholder='Password'
                    onChangeText={(text) => {this.weight =text}}
                    value= {this.weight} 
                />
                
                <View>
                    <TouchableOpacity
                        style={buttonStyle} onPress = {this.regButton}>
                        <Text> Save </Text>
                    </TouchableOpacity>
               </View>
                
            </View>
        )
    };
}
