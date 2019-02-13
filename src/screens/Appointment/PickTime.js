import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Alert } from 'react-native';
import { Table, TableWrapper, Row, Cell } from 'react-native-table-component';
import CustomHeader from '../../components/Header/Header';

export default class PickTime extends Component {

    constructor(props) {
        super(props);
        this.state = {
            tableHead: ['Start', ' End', 'Confirm'],
            tableData: [
                ['10.30am', '12.30pm', '4'],
                ['6.30pm', '7.30pm', 'd'],
                ['4.00pm', '5.00pm', '4'],
                ['6.00am', '8.00am', 'd']
            ]
        }
    }

    summaryHandler = () => {
        this.props.navigation.navigate('appSummary')
    }

    _alertIndex(index) {
        Alert.alert(`Time slot is ${index + 1}`);
    }

    render() {
        const state = this.state;
        const element = (data, index) => (
            <TouchableOpacity onPress={() => this._alertIndex(index)}>
                <View style={styles.btn}>
                    <Text style={styles.btnText}>select</Text>
                </View>
            </TouchableOpacity>
        );

        return (

            <View style={styles.tablecontainer}>
                <CustomHeader
                    title="Pick Date"
                    leftPress={() => this.props.navigation.goBack()}
                    iconNameRight="md-git-network"
                    iconName="arrow-round-back"
                    type="sub"
                />
                <Table borderStyle={{ borderColor: 'transparent' }}>
                    <Row data={state.tableHead} style={styles.head} textStyle={styles.text} />
                    {
                        state.tableData.map((rowData, index) => (
                            <TableWrapper key={index} style={styles.row}>
                                {
                                    rowData.map((cellData, cellIndex) => (
                                        <Cell key={cellIndex} data={cellIndex === 2 ? element(cellData, index) : cellData} textStyle={styles.text} />
                                    ))
                                }
                            </TableWrapper>
                        ))
                    }
                </Table>

                <TouchableOpacity onPress={this.summaryHandler} style={styles.button}>
                    <Text style={styles.buttonText}>Confirm</Text>
                </TouchableOpacity>

            </View>

        )
    }
}

const styles = StyleSheet.create({
    tablecontainer: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: 'white' },
    head: { height: 40, backgroundColor: '#808B97' },
    text: { margin: 6 },
    row: { flexDirection: 'row', backgroundColor: '#FFF1C1' },
    btn: { width: 58, height: 18, backgroundColor: '#78B7BB', borderRadius: 2 },
    btnText: { textAlign: 'center', color: '#fff' },


    test: {
        color: '#ffffff',
        fontSize: 20,
    },
    button: {
        backgroundColor: '#1c313a',
        width: 300,
        borderRadius: 25,
        marginVertical: 10,
        paddingVertical: 12,



    },


    buttonText: {
        fontSize: 16,
        fontWeight: '500',
        color: '#ffffff',
        textAlign: 'center'
    }

});