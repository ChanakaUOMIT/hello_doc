import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image
} from 'react-native';
import CustomHeader from '../../components/Header/Header';
import Icon from 'react-native-vector-icons/Ionicons';
import style from '../../styles/style';

export default class Home extends Component {
    constructor(props) {
        super(props);

    }
    render() {
        const { homeName, homeView, homepic } = style
        return (
            <View style={{backgroundColor:'#A8D1E5', flexGrow: 1}}>
                <CustomHeader
                    title="Home"
                    openDrawer={() => this.props.navigation.openDrawer()}
                    iconName="ios-list"
                />

                <View style={homeView}>
                    <Text style={homeName}> helloDoc</Text>
                </View>


                <View>
                    <Image
                        style={homepic}
                        source={require('../../Images/NPW-cartoon.jpg')}
                    />
                </View>

                <View style={homeView}>
                    <Text> welcome!</Text>
                    <Text> Get the best service from our most qualified staff</Text>
                </View>
            </View>
        )
    }
}

Home.navigationOptions = {
    tabBarIcon: ({ tintColor, focused }) => (
        <Icon
            name={focused ? 'md-home' : 'ios-home'}
            size={28}
            color={tintColor}
        />

    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});