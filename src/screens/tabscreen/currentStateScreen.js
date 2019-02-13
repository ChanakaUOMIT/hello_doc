import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Platform,
  TextInput
} from 'react-native'

import Icon from 'react-native-vector-icons/Ionicons'


export default class CurrentStateScreen extends Component {
  constructor() {
    super();
    this.state = {
      Default_Rating: 2,
      //To set the default Star Selected
      Max_Rating: 10,
      //To set the max number of Stars
    };
    //Filled Star. You can also give the path from local
    this.Star = 'http://aboutreact.com/wp-content/uploads/2018/08/star_filled.png';
    //Empty Star. You can also give the path from local
    this.Star_With_Border = 'http://aboutreact.com/wp-content/uploads/2018/08/star_corner.png';
  }
  UpdateRating(key) {
    this.setState({ Default_Rating: key });
    //Keeping the Rating Selected in state
  }
  render() {
    let React_Native_Rating_Bar = [];
    //Array to hold the filled or empty Stars
    for (var i = 1; i <= this.state.Max_Rating; i++) {
      React_Native_Rating_Bar.push(
        <TouchableOpacity
          activeOpacity={0.7}
          key={i}
          onPress={this.UpdateRating.bind(this, i)}>
          <Image
            style={styles.StarImage}
            source={
              i <= this.state.Default_Rating
                ? { uri: this.Star }
                : { uri: this.Star_With_Border }
            }
          />
        </TouchableOpacity>
      );
    }
    return (
      <View style={styles.MainContainer}>
        <Text style={styles.textStyle}>How is your illness state?</Text>
        <Text style={styles.textStyleSmall}>Please Rate</Text>
        {/*View to hold our Stars*/}
        <View style={styles.childView}>{React_Native_Rating_Bar}</View>
        <Text style={styles.textStyle}>
          {/*To show the rating selected*/}
          {this.state.Default_Rating} / {this.state.Max_Rating}
        </Text>
        <TouchableOpacity
          activeOpacity={0.7}
          style={styles.button}
          onPress={() => alert(this.state.Default_Rating)}>
          {/*Clicking on button will show the rating as an alert*/}
          <Text>Get Selected Value</Text>
        </TouchableOpacity>
        <View style={{padding:20}}>
          <Text style={styles.textStyle}> Comments or any Symptoms?</Text>
          <TextInput
            style={styles.rateView}
            placeholder='Enter any comment or symptoms here'
            multiline={true}>
          </TextInput>
        </View>
      </View>
    );
  }
}


CurrentStateScreen.navigationOptions = {
  tabBarIcon: ({ tintColor, focused }) => (
    <Icon
      name={focused ? 'md-star-half' : 'md-star'}
      size={28}
      color={tintColor}
    />

  )
}

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: Platform.OS === 'ios' ? 20 : 0,
  },
  childView: {
    justifyContent: 'center',
    flexDirection: 'row',
    marginTop: 30,
  },
  button: {
    justifyContent: 'center',
    flexDirection: 'row',
    marginTop: 30,
    padding: 15,
    backgroundColor: '#8ad24e',
  },
  StarImage: {
    width: 40,
    height: 40,
    resizeMode: 'cover',
  },
  textStyle: {
    textAlign: 'center',
    fontSize: 23,
    color: '#000',
    marginTop: 15,
  },
  textStyleSmall: {
    textAlign: 'center',
    fontSize: 16,
    color: '#000',
    marginTop: 15,
  },
  rateView: {
    height: 60,
    padding: 4,
    borderWidth: 1,
    borderColor: 'black'
  }
});