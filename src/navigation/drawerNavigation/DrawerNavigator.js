import React from 'react'
import { StyleSheet, Text, View, SafeAreaView, ScrollView, Dimensions, Image} from 'react-native';
import { createDrawerNavigator, DrawerItems } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome5';
import TabNavigator from '../tabNavigation/TabNavigator'
import PatientProfile from '../../screens/drawerScreen/Profile/PatientProfile'
import ViewBasicHealthInfo from '../../screens/drawerScreen/Profile/viewBasicHealthInfo'
import Logout from '../../authScreen/Logout/Logout'
// import { Right } from 'native-base';

const CustomDrawerComponent = (props)=>(
  <SafeAreaView>
      <View style={{height:150, backgroundColor:'white', alignItems:'center', justifyContent:'center'}}>
          <Image source={require('../../Images/user.png')} style={{height:120, width:120, borderRadius:60}} />
      </View>
      <ScrollView>
          <DrawerItems {...props} />
      </ScrollView>
  </SafeAreaView> 
)


export default createDrawerNavigator({
  Home: {
    screen: TabNavigator, 
    navigationOptions: {
      drawerLabel: 'Home',
      drawerIcon: ({ tintColor }) => <Icon name="cog" color='red' size={17} />,
    }
  },

  PatientProfile: {
    screen: PatientProfile,
    navigationOptions: {
      drawerLabel: 'PatientProfile',
      drawerIcon: ({ tintColor }) => <Icon name="user-circle" size={17} />,
    }
  },

  ViewBasicHealthInfo:{
    screen: ViewBasicHealthInfo,
    navigationOptions: {
      drawerLabel: 'ViewBasicHealthInfo',
      drawerIcon: ({ tintColor }) => <Icon name="user-circle" size={17} />,
    }
  },

  Logout:{
    screen: Logout,
    navigationOptions: {
      drawerLabel: 'Logout',
      drawerIcon: ({ tintColor }) => <Icon name="user-circle" size={17} />,
    }
  },

},
{
  drawerPosition :"right",
  contentComponent:CustomDrawerComponent

});  

