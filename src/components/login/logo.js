import React, { Component } from 'react';
import {View, 
        Image,
        Text
} from 'react-native';

import style from '../../styles/style';

export default class Logo extends Component {
    render (){
        const { imagepic, parent } = style
        return (
            <View style={parent}>
             <Image source={require('../../Images/1.png')} style={imagepic}/>
             </View>
        )
    }
}