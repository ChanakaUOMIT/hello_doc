import React, { Component } from 'react';

import { View, StyleSheet,TouchableOpacity,Text } from 'react-native';
import style from '../../styles/style';
import CustomHeader from '../../components/Header/Header';
import { Table, TableWrapper, Row, Rows, Col } from 'react-native-table-component';

export default class ViewLabReport extends Component {

    constructor(props) {
        super(props);
        this.state = {
            //tableHead: ['', 'Head1', 'Head2', 'Head3'],
            tableTitle: ['Report1', 'Report2', 'Report3'],
            tableData: [
                ['1'],
                ['a'],
                ['1']
            ]
        }
    }

   
    render() {
        const state = this.state;
        const { parent, signupTxtCont, signupTxt, buttonStyle, nextButton } = style
        return (
            <View style={parent}>
                <CustomHeader
                    title="Lab Reports"
                    leftPress={() => this.props.navigation.goBack()}
                    iconNameRight="md-git-network"
                    iconName="arrow-round-back"
                    type="sub"
                />

                <View style={styles.container}>
                    <Table>
                        <Row data={state.tableHead} flexArr={[1, 2, 1, 1]} style={styles.head} textStyle={styles.text} />
                        <TableWrapper style={styles.wrapper}>
                            <Col data={state.tableTitle} style={styles.title} heightArr={[28, 28]} textStyle={styles.text} />
                            <Rows data={state.tableData} flexArr={[2, 1, 1]} style={styles.row} textStyle={styles.text} />
                        </TableWrapper>
                    </Table>
                </View>

                

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: { flex: 1, padding: 16, paddingTop: 80, backgroundColor: '#fff' },
    head: {  height: 40,  backgroundColor: '#f1f8ff'  },
    wrapper: { flexDirection: 'row' },
    title: { flex: 1, backgroundColor: '#f6f8fa' },
    row: {  height: 28  },
    text: { textAlign: 'center' }
  });
