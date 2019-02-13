import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity
} from 'react-native';
import CustomHeader from '../../../components/Header/Header';
import { Table, TableWrapper, Row, Rows, Col } from 'react-native-table-component';

export default class ViewBasicHealthInfo extends Component {

    constructor(props) {
        super(props);
        this.state = {
          //tableHead: ['', 'Head1', 'Head2', 'Head3'],
          tableTitle: ['Patient ID', 'Cholesterol Level', 'Blood sugar', 'Blood Pressure', 'Allergies', 'Social Diseases'],
          tableData: [
            ['1'],
            ['a'],
            ['1'],
            ['a'],
            ['a'],
            ['a'],
            ['a'],
            ['a']
          ]
        }
      }
  render() {
    
      const state = this.state;
    return (
      <View style={styles.container}>
      <CustomHeader
                    title="Basic Health Information"
                    leftPress={() => this.props.navigation.goBack()}
                    iconNameRight="md-git-network"
                    iconName="arrow-round-back"
                    type="sub"
                />
          <View style={styles.header}></View>
          <Image style={styles.avatar} source={require('../../../Images/patient1.png')} />
          <Text style={styles.name}>John Doe</Text>
          
            
              
            <View style={styles.tablecontainer}>
        <Table>
          <Row data={state.tableHead} flexArr={[1, 2, 1, 1]} style={styles.head} textStyle={styles.text}/>
          <TableWrapper style={styles.wrapper}>
            <Col data={state.tableTitle} style={styles.title} heightArr={[28,28]} widthArr={[50,50]} textStyle={styles.text}/>
            <Rows data={state.tableData} flexArr={[2, 1, 1]} style={styles.row} textStyle={styles.text}/>
          </TableWrapper>
        </Table>
      </View>
              
            
          
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#00BFFF",
    height: 100,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "white",
    marginBottom: 10,
    alignSelf:'flex-start',
    position: 'absolute',
    marginTop: 80
  },
  name: {
    fontSize: 22,
    color: "#FFFFFF",
    fontWeight: '600',
    marginTop: 100
  },
  body: {
    marginTop: 40,
  },
  bodyContent: {
    flex: 1,
    alignItems: 'center',
  },
  name: {
    fontSize: 28,
    color: "#696969",
    fontWeight: "600"
  },
  info: {
    fontSize: 16,
    color: "#00BFFF",
    marginTop: 10
  },
  description: {
    fontSize: 16,
    color: "#696969",
    marginTop: 10,
    textAlign: 'center'
  },
  buttonContainer: {
    marginTop: 10,
    height: 45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    width: 250,
    borderRadius: 30,
    backgroundColor: "#00BFFF",
  },
  tablecontainer: { padding: 16, paddingTop: 30, backgroundColor: '#fff' },
  head: {  height: 40,  backgroundColor: '#f1f8ff'  },
  wrapper: { flexDirection: 'row' },
  title: { flex: 1, width:70, backgroundColor: '#f6f8fa' },
  row: {  height: 28  },
  text: { textAlign: 'center' }

});