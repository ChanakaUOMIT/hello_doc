import React, { Component } from 'react';

import { View, StyleSheet,TouchableOpacity,Text } from 'react-native';
import style from '../../styles/style';
import CustomHeader from '../../components/Header/Header';
import { Table, TableWrapper, Row, Rows, Col } from 'react-native-table-component';
import Icon from 'react-native-vector-icons/Ionicons';

export default class AppointmentSummary extends Component {

    constructor(props) {
        super(props);
        this.state = {
            //tableHead: ['', 'Head1', 'Head2', 'Head3'],
            tableTitle: ['Doctor:', 'Date:', 'Time:', 'No:', 'Fee'],
            tableData: [
                ['Kapila'],
                ['20-10-2019'],
                ['17:30'],
                ['10'],
                ['1500']
            ]
        }
    }

    appointmentHandler = () => {
        this.props.navigation.navigate('appback')
    }

    render() {
        const state = this.state;
        const { parent, iconimg,iconView } = style
        return (
            <View style={parent}>
                <CustomHeader
                    title="Appointment Summary"
                    leftPress={() => this.props.navigation.goBack()}
                    iconNameRight="md-git-network"
                    iconName="arrow-round-back"
                    type="sub"
                />

                <View style={styles.container}>
                    <Table>
                        <Row data={state.tableHead} flexArr={[1, 2, 1, 1]} style={styles.head} textStyle={styles.text} />
                        <TableWrapper style={styles.wrapper}>
                            <Col data={state.tableTitle} style={styles.title} heightArr={[28, 28]} widthArr={[40,60]} textStyle={styles.text} />
                            <Rows data={state.tableData} flexArr={[2, 1, 1]} style={styles.row} textStyle={styles.text} />
                        </TableWrapper>
                    </Table>
                </View>

                <View style={iconView}>
                        <TouchableOpacity onPress={this.appointmentHandler}>
                            <Icon name='md-arrow-dropleft-circle' size={40} style={iconimg} />
                        </TouchableOpacity>
                        </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: { flex: 1, padding: 16, paddingTop: 80, backgroundColor: '#fff' },
    head: {  height: 40,  backgroundColor: '#f1f8ff'  },
    wrapper: { flexDirection: 'row' },
    title: { flex: 1, width:40, backgroundColor: '#f6f8fa' },
    row: {  height: 28  },
    text: { textAlign: 'center' }
  });
