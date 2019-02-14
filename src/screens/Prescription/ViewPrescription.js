import React, { Component } from 'react';

import { View, StyleSheet,TouchableOpacity,Text,AsyncStorage, ScrollView } from 'react-native';
import style from '../../styles/style';
import CustomHeader from '../../components/Header/Header';
import { Table, TableWrapper, Row, Rows, Col } from 'react-native-table-component';

export default class ViewPrescription extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoading:true,
            //tableHead: ['', 'Head1', 'Head2', 'Head3'],
            tableTitle: ['Address', 'Contact No:', 'DOB', 'Height', 'Weight', 'Blood Group', 'Marital State', 'Occupation'],
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

    componentWillMount(){
        this.getEmail();
    }

    async getEmail(){
        try{
            let email=await AsyncStorage.getItem("email");
            let s_p_date=await AsyncStorage.getItem("select_prescription_date");
            console.log("[Viewprescription.js] email : "+email+ "  "+s_p_date);
            this.setState({
                email:email,
                date:s_p_date
            })
            // this.getToken();
          }catch(error){
            alert("token store error", error);
          }

          this.request_details();

    }

    request_details(){

        // var url="https://hello-doc-app.herokuapp.com/prescription/viewprescription/patient@gmail.com"
        var url=`https://hello-doc-app.herokuapp.com/prescription/viewprescription/${this.state.email}`;
        console.log("&&&&&&&&&& "+url+" ******* "+this.state.email)

        fetch(url,{
            method:'GET',
        })
        .then((response)=> response.json())
        // console.log("hello")
        // .then((response)=> console.log(" %%%%%%%%%%%%%%% ",response))

        .then((resJson)=>{
            // console.log(resJson);
            this.dataHandler(resJson.data);
        })
    };

    dataHandler(data){
        console.log("in data Handler ",data);
        console.log("in data Handler length "+data.length);

        this.setState({
            // appDate:data.appDate,
            // doctorRegNo:data.doctorRegNo,
            // expireDate:data.expireDate,
            // medicineDosage:data.medicineDosage,
            // medicineNo:data.medicineNo,
            // medicineQty:data.medicineQty,
            // recommandedTest:data.recommandedTest
            data:data,
            isLoading:false,
            length:data.length
        })

        console.log(" ///////||||||||||||");
        console.log(this.state.data)
        console.log(" ************** ");
    }

    DescHandler = () => {
        this.props.navigation.navigate('ViewDisease')
    }
    render() {
        if(this.state.isLoading){
            return(
                <View>
                    <Text>Wait</Text>
                </View>
            )
        }else{
            const state = this.state;
            const { parent, signupTxtCont, signupTxt, buttonStyle, nextButton } = style;
            let count=0;
            let render_content = this.state.data.map((val, key) =>{
                if(val.appDate === this.state.date){
                    count++;
                    console.log("Here is count "+count)
                    // this.setState({
                    //     count:count
                    // })
                    return (
                        <View key={key} style={styles.item}>
                            <TouchableOpacity
                                // onPress={()=>{this.setdata(val.id, val.user_id)}}
                            >
                                <Text>appDate : {val.appDate}</Text>
                                <Text>doctorRegNo : {val.doctorRegNo}</Text>
                                <Text>expireDate : {val.expireDate}</Text>
                                <Text>medicineDosage : {val.medicineDosage}</Text>
                                <Text>medicineNo : {val.medicineNo}</Text>
                                <Text>medicineQty : {val.medicineQty}</Text>
                                <Text>recommandedTest : {val.recommandedTest}</Text>


                            </TouchableOpacity>
                        </View>
                )
                }
                else if(count===0){
                    return(
                        <View key={key}>
                            <Text>No more Prescription when you selected Date</Text>
                        </View>
                    )
                }
                // return (
                //     <View key={key} style={styles.item}>
                //         <TouchableOpacity
                //             // onPress={()=>{this.setdata(val.id, val.user_id)}}
                //         >
                //             <Text>appDate : {val.appDate}</Text>
                //             <Text>doctorRegNo : {val.doctorRegNo}</Text>
                //             <Text>expireDate : {val.expireDate}</Text>
                //             <Text>medicineDosage : {val.medicineDosage}</Text>
                //             <Text>medicineNo : {val.medicineNo}</Text>
                //             <Text>medicineQty : {val.medicineQty}</Text>
                //             <Text>recommandedTest : {val.recommandedTest}</Text>


                //         </TouchableOpacity>
                //     </View>
                // )
              });

            //   this.setState({
            //       count:count
            //   })


            return (
                // <View style={parent}>
                <View>
                    <CustomHeader
                        title="Prescription"
                        leftPress={() => this.props.navigation.goBack()}
                        iconNameRight="md-git-network"
                        iconName="arrow-round-back"
                        type="sub"
                    />
    
                    {/* <View style={styles.container}>
                        <Table>
                            <Row data={state.tableHead} flexArr={[1, 2, 1, 1]} style={styles.head} textStyle={styles.text} />
                            <TableWrapper style={styles.wrapper}>
                                <Col data={state.tableTitle} style={styles.title} heightArr={[28, 28]} textStyle={styles.text} />
                                <Rows data={state.tableData} flexArr={[2, 1, 1]} style={styles.row} textStyle={styles.text} />
                            </TableWrapper>
                        </Table>
                    </View> */}

                    <ScrollView>
                        {render_content}
                    </ScrollView>

                    {/* <View>
                        {!this.state.isLoading && this.state.count !==0 ? <View><Text>No more data</Text></View>:null}
                    </View> */}
    
                    <TouchableOpacity style={buttonStyle} onPress={this.DescHandler}>
                            <Text style={signupTxt}>View Disease Details</Text>
                        </TouchableOpacity>
    
                </View>
            )
        }
        
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
