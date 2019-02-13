import React from 'react';
import { createMaterialTopTabNavigator, createStackNavigator } from 'react-navigation';
import Home from '../../screens/tabscreen/homeScreen';
import AppointmentScreen from '../../screens/tabscreen/appointmentScreen';
import PrescriptionScreen from '../../screens/tabscreen/prescriptionSreen';
import ChatScreen from '../../screens/tabscreen/chatScreen';
import CurrentStateScreen from '../../screens/tabscreen/currentStateScreen';
import NotificationScreen from '../../screens/tabscreen/notificationScreen';
import colors from '../../styles/colors';

const TabNavigation = createMaterialTopTabNavigator(
//     Screen1:{
//         screen:Home,
//         navigationOptions: {
            
//             tabBarIcon: ({ tintColor }) => (
//                 <IconIonic
//                     name="md-home"
//                     size={30}
//                     color={tintColor} />
//             )
//         }
//     },

//     Screen2:{
//         screen:AppointmentScreen,
//         navigationOptions: {
            
//             tabBarIcon: ({ tintColor }) => (
//                 <IconIonic
//                     name="md-calendar"
//                     size={30}
//                     color={tintColor} />
//             )
//         }
//     },

//     Screen3:{
//         screen:PrescriptionScreen,
//         navigationOptions: {
           
//             tabBarIcon: ({ tintColor }) => (
//                 <IconIonic
//                     name="ios-list-box"
//                     size={30}
//                     color={tintColor} />
//             )
//         }
//     },

//     Screen4:{
//         screen:CurrentStateScreen,
//         navigationOptions: {
            
//             tabBarIcon: ({ tintColor }) => (
//                 <IconIonic
//                     name="md-star-half"
//                     size={30}
//                     color={tintColor} />
//             )
//         }
//     },

//     Screen5:{
//         screen:ChatScreen,
//         navigationOptions: {
           
//             tabBarIcon: ({ tintColor }) => (
//                 <IconIonic
//                     name="ios-phone-portrait"
//                     size={30}
//                     color={tintColor} />
//             )
//         }
//     },

//     Screen6:{
//         screen:NotificationScreen,
//         navigationOptions: {
            
//             tabBarIcon: ({ tintColor }) => (
//                 <IconIonic
//                     name="ios-notifications"
//                     size={30}
//                     color={tintColor} />
//             )
//         }
//     },

// },{
//     tabBarPosition:'top',
//     // initialRouteName:'Notice',
//     animationEnabled:true,
//     tabBarOptions: {
//         showIcon:true,
//         style: {
//           backgroundColor: colors.greenPrimary,
//           height:60,

//         },
//       }

{
    //connecting pages
    Home: Home,
    Second: AppointmentScreen,
    Third: PrescriptionScreen,
    Fourth:CurrentStateScreen,
    Fifth: NotificationScreen,
    Sixth: ChatScreen,
    
},
{
    //tab styling
    tabBarOptions: {
        activeTintColor: 'white',
        inactiveTintColor: '#b3cce6',
        showIcon : true,
        showLabel: false,
        style: {
            backgroundColor : '#204060'
        }
    },
    


});

export default createStackNavigator({ TabNavigation }, {headerMode:"none"});