import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    TextInput,
    Button,
    TouchableHighlight,
    Alert,
    Image,
    ListView,
} from 'react-native';
import CustomHeader from '../../components/Header/Header';
import Icon from 'react-native-vector-icons/Ionicons';
import {YellowBox} from 'react-native';

YellowBox.ignoreWarnings(['ListView is deprecated and will be removed in a future release.']);
export default class NotificationScreen extends Component {
    constructor(props) {
        super(props);
        const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
        this.state = {
            dataSource: ds.cloneWithRows([
                { day: 1, month: 'Sep' },
                { day: 2, month: 'Jan' },
                { day: 3, month: 'Aug' },
                { day: 4, month: 'Dec' },
                { day: 5, month: 'Jul' },
                { day: 6, month: 'Oct' },
                { day: 7, month: 'Sep' },
                { day: 8, month: 'Jan' },
                { day: 9, month: 'May' },
            ]),
        };

        console.ignoredYellowBox
    }

    eventClickListener = (viewId) => {
        Alert.alert("alert", "event clicked");
    }

    render() {
        return (
                <View style={styles.container}>

                 <CustomHeader
                    title="NotificationScreen"
                    openDrawer={() => this.props.navigation.openDrawer()}
                    iconName="ios-notifications"
                />
                

                    <ListView enableEmptySections={true}
                        style={styles.eventList}
                        dataSource={this.state.dataSource}
                        renderRow={(event) => {
                            return (
                                <TouchableOpacity onPress={() => this.eventClickListener("row")}>
                                    <View style={styles.eventBox}>
                                        <View style={styles.eventDate}>
                                            <Text style={styles.eventDay}>{event.day}</Text>
                                            <Text style={styles.eventMonth}>{event.month}</Text>
                                        </View>
                                        <View style={styles.eventContent}>
                                            <Text style={styles.eventTime}>10:00 am - 10:45 am</Text>
                                            <Text style={styles.userName}>Next Appointment</Text>
                                            <Text style={styles.description}>Date 2019/02/01</Text>
                                            <Text style={styles.description}>Dr.Anura Perera</Text>
                                        </View>
                                    </View>
                                </TouchableOpacity>
                            )
                        }} />
                </View>
        
        )
    }
}

NotificationScreen.navigationOptions = {
    tabBarIcon: ({ tintColor, focused }) => (
        <Icon
            name={focused ? 'ios-notifications' : 'ios-notifications'}
            size={28}
            color={tintColor}
        />

    )
}


const styles = StyleSheet.create({
    container:{
      backgroundColor: "#DCDCDC",
    },
    eventList:{
      marginTop:20,
    },
    eventBox: {
      padding:10,
      marginTop:5,
      marginBottom:5,
      flexDirection: 'row',
    },
    eventDate:{
      flexDirection: 'column',
    },
    eventDay:{
      fontSize:50,
      color: "#0099FF",
      fontWeight: "600",
    },
    eventMonth:{
      fontSize:16,
      color: "#0099FF",
      fontWeight: "600",
    },
    eventContent: {
      flex:1,
      flexDirection: 'column',
      alignItems: 'flex-start',
      marginLeft:10,
      backgroundColor: '#FFFFFF',
      padding:10,
      borderRadius:10
    },
    description:{
      fontSize:15,
      color: "#646464",
    },
    eventTime:{
      fontSize:18,
      color:"#151515",
    },
    userName:{
      fontSize:16,
      color:"#151515",
    },
  });