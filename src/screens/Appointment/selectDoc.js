import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    FlatList,
    Dimensions,
    Modal,
    ScrollView,
    ActivityIndicator,
    AsyncStorage
} from 'react-native';
import style from '../../styles/style';
import Icon from 'react-native-vector-icons/Ionicons';
import CustomHeader from '../../components/Header/Header';
import { Container, Header, Content, Card, CardItem, Body } from 'native-base'

export default class SelectDoctor extends Component {

    constructor(props) {
        super(props);
        this.state = {
            modalVisible: false,
            userSelected: [],
            isLoading:true,
            data: [

                { id: "1", firstName: "Sudesh ",lastName:"Agravat", doctorField: "Psychiatrist", doctorRegNo: "MBBS202",workAddress:"General Hospital, Colombo" ,contactNo:"0715678765" ,image: "https://bootdey.com/img/Content/avatar/avatar1.png", about1: "Colombo General Hospital", about2:"Experience - 5 years", about3:"Contact - 0715645234" },
                { id: "2", firstName: "Dr.Mahesh ",lastName:"Silva", doctorField: "Physician", doctorRegNo: "MBBS205",workAddress:"General Hospital, Colombo" ,contactNo:"0715098765" ,image: "https://bootdey.com/img/Content/avatar/avatar6.png", about: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo." },
                { id: "3", firstName: "Dr.Anoma ",lastName:"Perera", doctorField: "Physician", doctorRegNo: "MBBS567",workAddress:"Kalubowila Base Hospital" ,contactNo:"0775228765" , image: "https://bootdey.com/img/Content/avatar/avatar5.png", about: `Lorem </br> ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.` },
                { id: "4", firstName: "Dr.Rukhshana ",lastName:"De Silva", doctorField: "VOG",doctorRegNo: "MBBS800",workAddress:"Kalubowila Base Hospital" ,contactNo:"0775000765" , image: "https://bootdey.com/img/Content/avatar/avatar3.png", about: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo." },
                { id: "5", firstName: "Dr.Dilan ",lastName:"Manathunga", doctorField: "Cardiologist",doctorRegNo: "MBBS802",workAddress:"District Hospital,Moratuwa" ,contactNo:"0786750765" , image: "https://bootdey.com/img/Content/avatar/avatar2.png", about: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo." },
                { id: "6", firstName: "Dr.Kasun ",lastName:"Jayaweera", doctorField: "Dermatologist", doctorRegNo: "MBBS1200",workAddress:"Kalubowila Base Hospital" ,contactNo:"0765000765" , image: "https://bootdey.com/img/Content/avatar/avatar1.png", about: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo." },
                { id: "6", firstName: "Dr.Sanath ",lastName:"De Silva", doctorField: "Eye Specialist", doctorRegNo: "MBBS100",workAddress:"General Hospital, Colombo" ,contactNo:"0785110765" , image: "https://bootdey.com/img/Content/avatar/avatar4.png", about: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo." },
                { id: "7", firstName: "Dr.Janaka ",lastName:"Kuruwita", doctorField: "Dentist", doctorRegNo: "MBBS3200",workAddress:"Kalubowila Base Hospital" ,contactNo:"0712435678" , image: "https://bootdey.com/img/Content/avatar/avatar7.png", about: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo." },
            ]
        };

    
    }

    

    componentDidMount(){
        this.getDoctorField()
        // this.getDoctorDetails() 
             
    }

    async getDoctorField(){
        console.log("getDoctorField");
        try{
            let field=await AsyncStorage.getItem("field");
            console.log('field get asyn '+field);
            this.set_field(field);
            // this.getToken();
          }catch(error){
            alert("token store error");
          }
    }

    set_field(field){
        this.setState({
            field:field
        })

        console.log("This state setFiels in select doc "+this.state.field);
        this.getDoctorDetails()
    }

    async setToken(mytoken){
        console.log(" setToken ****** "+mytoken)
        try{
          await AsyncStorage.setItem("token",mytoken);
          alert('Token saves asyn');
          // this.getToken();
        }catch(error){
          alert("token store error");
        }
      }

    getDoctorDetails(){
        console.log("[selectDoc.js]")
        console.log("I am in getDoctor Details in select doctor "+this.state.field);
        if(this.state.field === null){
            var search=''
        }else{
            var search=this.state.field;
        }

        // fetch('https://hello-doc-app.herokuapp.com/doctor/viewdoctor/Surgeon',{
        fetch(`https://hello-doc-app.herokuapp.com/doctor/viewdoctor/${search}`,{
            method:'GET',
            headers:{
                'Content-Type':'application/json'
                
                // 'X-Requested-With':'XMLHttpRequest'
            },
        })
        .then((response)=> response.json())
        // .then((response)=> console.log(response))

        .then((resJson)=>{
            // console.log(resJson);
            this.dataHandler(resJson);
        })

        

        // this.props.navigation.navigate('DrewerNav');
    }

    dataHandler(data){
        console.log(" %%%%%%% dataHandler %%%%%%%%%%");
        console.log("In data Handler in select doctor ", data);

        console.log("data.success "+data.success);

        // if(data.message === 'Unauthorized'){
        //     console.log('Check ur username n email bcoz Unauthorized')
        //     alert("Check ur username n email bcoz Unauthorized")
        //     return
        // }

        // const token=data.token;
        // console.log("in dataHandler token "+ token);
    
        this.set_doctor_details(data.msg);
    }

    set_doctor_details(data){
        console.log("set_doctor_details ",data);
        this.setState({
            doctor_details:data,
            isLoading:false
        })

        console.log("set_doctor_details in state ", this.state.doctor_details);
        console.log("set_doctor_details in state ", this.state.isLoading);

    }

    clickEventListener = (item) => {
        this.setState({ userSelected: item }, () => {
            this.setModalVisible(true);
        });
    }

    setModalVisible(visible) {
        this.setState({ modalVisible: visible });
    }

    pickdateHandler = () => {
        this.props.navigation.navigate('PickDateApp')
    }

    async docHandler(data){
        console.log(data,"in docHandler");

        try{
            await AsyncStorage.setItem("doctor_reg",data);
            console.log('doctor_reg saves asyn');
            // this.getToken();
          }catch(error){
            alert("doctor_reg store error");
          }

        // console.log(this.props);
        // console.log("[selectDoc.js] ",this.state.doctor_details," **** ")

        this.props.navigation.navigate('PickDateApp') 

    }

    // render() {
        // const { parent, headText, drpView, drpDown, buttonStyle, signupTxt, iconView, iconimg } = style
        // return (


        //     <View style={styles.container}>

        //         <CustomHeader
        //             title="Select Doctor"
        //             leftPress={() => this.props.navigation.goBack()}
        //             iconNameRight="md-git-network"
        //             iconName="arrow-round-back"
        //             type="sub"
        //         />

        //         <FlatList
        //             style={styles.userList}
        //             columnWrapperStyle={styles.listContainer}
        //             data={this.state.data}
        //             keyExtractor={(item) => {
        //                 return item.id;
        //             }}
        //             renderItem={({ item }) => {
        //                 return (
        //                     <TouchableOpacity style={styles.card} onPress={() => { this.clickEventListener(item) }}>
        //                         <Image style={styles.image} source={{ uri: item.image }} />
        //                         <View style={styles.cardContent}>
        //                             <Text style={styles.name}>{item.name}</Text>
        //                             <Text style={styles.position}>{item.position}</Text>

        //                             {/* <TouchableOpacity style={styles.followButton} onPress={()=> this.clickEventListener(item)}>*/}
        //                             <TouchableOpacity style={styles.followButton} >
        //                                 <Text style={styles.followButtonText}>select</Text>
        //                             </TouchableOpacity>
        //                         </View>
        //                     </TouchableOpacity>
        //                 )
        //             }} />

        //         <Modal
        //             animationType={'fade'}
        //             transparent={true}
        //             onRequestClose={() => this.setModalVisible(false)}
        //             visible={this.state.modalVisible}>

        //             <View style={styles.popupOverlay}>
        //                 <View style={styles.popup}>
        //                     <View style={styles.popupContent}>
        //                         <ScrollView contentContainerStyle={styles.modalInfo}>
        //                             <Image style={styles.image} source={{ uri: this.state.userSelected.image }} />
        //                             <Text style={styles.name}>{this.state.userSelected.name}</Text>
        //                             <Text style={styles.position}>{this.state.userSelected.position}</Text>
        //                             <Text style={styles.about}>{this.state.userSelected.about1}</Text>
        //                             <Text style={styles.about}>{this.state.userSelected.about2}</Text>

        //                             <Text style={styles.about}>{this.state.userSelected.about3}</Text>
        //                         </ScrollView>
        //                     </View>
        //                     <View style={styles.popupButtons}>
        //                         <TouchableOpacity onPress={() => { this.setModalVisible(false) }} style={styles.btnClose}>
        //                             <Text style={styles.txtClose}>Close</Text>
        //                         </TouchableOpacity>
        //                     </View>
        //                 </View>
        //             </View>
        //         </Modal>

        //         {/* <View style={iconView}> */}
        //         <TouchableOpacity onPress={this.pickdateHandler}>
        //             <Icon name='md-arrow-dropright-circle' size={40} style={iconimg} />
        //         </TouchableOpacity>
        //         {/* </View> */}
        //     </View>

        // );
        render(){
            if(this.state.isLoading){
                return(
                    <View>
                        <ActivityIndicator size="large" color="red" />
                    </View>
                )
            }


            else{

                // let doctor_list=this.state.data.map((val, key) =>{
                let doctor_list=this.state.doctor_details.map((val, key) =>{
                    

                    return(
                        // <View>
                            

                            <TouchableOpacity key={key}
                                    onPress={()=>this.docHandler(val.doctorRegNo)}
                                >
                                 <Card>
                                 <CardItem style={{backgroundColor:"#b3cce6"}}>
                                <Body>

                                <Text>DR : {val.firstName} {val.lastName}</Text>
                                <Text>{val.NIC}</Text>
                                <Text>{val.doctorDesignation}</Text>
                                <Text>{val.doctorField}</Text>
                                <Text>{val.doctorRegNo}</Text>
                                <Text>{val.workAddress}</Text>
                                <Text>{val.addCity}</Text>
                                <Text>{val.contactNo}</Text>
                                <Text>{val.email}</Text>
                                </Body>
            </CardItem>
          </Card>
                              

                            </TouchableOpacity>


                        // </View>
                        
                    )
                });

                return(
                    <View>
                        <ScrollView>
                        <CustomHeader
                            title="Select Doctor"
                            leftPress={() => this.props.navigation.goBack()}
                            iconNameRight="md-git-network"
                            iconName="arrow-round-back"
                            type="sub"
                        />

                            {doctor_list}
                        </ScrollView>
                    </View>
                )
            }
        }
    // }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        //marginTop: 20,
        backgroundColor: "#eeeeee"
    },
    header: {
        backgroundColor: "#00CED1",
        height: 200
    },
    headerContent: {
        padding: 30,
        alignItems: 'center',
        flex: 1,
    },
    detailContent: {
        top: 80,
        height: 500,
        width: Dimensions.get('screen').width - 90,
        marginHorizontal: 30,
        flexDirection: 'row',
        position: 'absolute',
        backgroundColor: "#ffffff"
    },
    userList: {
        flex: 1,
    },
    cardContent: {
        marginLeft: 20,
        marginTop: 10
    },
    image: {
        width: 90,
        height: 90,
        borderRadius: 45,
    },



    card: {
        shadowColor: '#00000021',
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.37,
        shadowRadius: 7.49,
        elevation: 12,

        marginVertical: 10,
        marginHorizontal: 20,
        backgroundColor: "white",
        flexBasis: '46%',
        padding: 10,
        flexDirection: 'row'
    },

    name: {
        fontSize: 18,
        flex: 1,
        alignSelf: 'center',
        color: "#008080",
        fontWeight: 'bold'
    },
    position: {
        fontSize: 14,
        flex: 1,
        alignSelf: 'center',
        color: "#696969"
    },
    about: {
        marginHorizontal: 10
    },

    followButton: {
        marginTop: 10,
        height: 35,
        width: 100,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30,
        backgroundColor: "#00BFFF",
    },
    followButtonText: {
        color: "#FFFFFF",
        fontSize: 20,
    },
    /************ modals ************/
    popup: {
        backgroundColor: 'white',
        marginTop: 80,
        marginHorizontal: 20,
        borderRadius: 7,
    },
    popupOverlay: {
        backgroundColor: "#00000057",
        flex: 1,
        marginTop: 30
    },
    popupContent: {
        //alignItems: 'center',
        margin: 5,
        height: 250,
    },
    popupHeader: {
        marginBottom: 45
    },
    popupButtons: {
        marginTop: 15,
        flexDirection: 'row',
        borderTopWidth: 1,
        borderColor: "#eee",
        justifyContent: 'center'
    },
    popupButton: {
        flex: 1,
        marginVertical: 16
    },
    btnClose: {
        height: 20,
        backgroundColor: '#20b2aa',
        padding: 20
    },
    modalInfo: {
        alignItems: 'center',
        justifyContent: 'center',
    }
}); 



// import React, { Component } from 'react';
// import {View,
//     Text,
//     StyleSheet,
//     TouchableOpacity,
//     FlatList,
//     Dimensions,
//     ScrollView,
//     AsyncStorage,
//     ActivityIndicator
// } from 'react-native';
// import { Card, ListItem, Button, Header } from 'react-native-elements'
// import colors from '../../styles/colors';
// import { withNavigation } from 'react-navigation';


// // const data = [
// //     {
// //         subject: "Combine Maths"
// //     },

// //     {
// //         subject: "Chemistry"
// //     },

// //     {
// //         subject: "Physics"
// //     },

// //     {
// //         subject: "General English"
// //     },

// //     {
// //         subject: "ICT"
// //     },

// //     {
// //         subject: "GIT"
// //     },

// //     {
// //         subject: "English"
// //     },
// // ];

// const formatData = (data, numColumns)=>{
//     const numberOfFullRows = Math.floor(data.length / numColumns);

//     let numberOfElementsLastRow = data.length - (numberOfFullRows * numColumns);
//     while(numberOfElementsLastRow !== numColumns && numberOfElementsLastRow !== 0){
//         data.push({ key: `blank-${numberOfElementsLastRow}`, empty:true});
//         numberOfElementsLastRow=numberOfElementsLastRow+1;
//     }

//     return data;
// }

// const numColumns = 3;
 
// class SubjectList extends Component{
//     constructor(props){
//         super(props);

//         this.state={
//             token:'',
//             role:'',
//             student_id:'',
//             subject:null,
//             isLoading:true
//         }
//     this.subjectHandler=this.subjectHandler.bind(this);
 

//     }

//     componentDidMount(){
//         this.getStudent_id();
//         this.getToken();
//         // this.getUserSubject();

//         // this.getUserSubject();
//         // console.log("Hello I'm in component did mount in subject module")
//     }
    
//     getUserSubject(){

//         console.log("In User Subject in Subject list *********************************************************");
//         // console.log('getUserSubject');


//         var token=this.state.token;
//         var student_id = this.state.student_id;
//         console.log("In User Subject in Subject list "+student_id+" ((((((((((((((((((())))))))))))))))"+token);
    
//         // url = 'https://ems.aladinlabs.com/api/subjects?year=2019&student_id=2';
//         // url = 'https://ems.aladinlabs.com/api/subjects?year=2019&student_id=';

//         // console.log(url);
//         console.log("ZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZ");

//         fetch('https://ems.aladinlabs.com/api/subjects?year=2019&student_id='+student_id,{
//             method:'GET',
//             headers:{
//                 "Authorization": "Bearer "+ token,
//                 "X-Requested-With":"XMLHttpRequest"
//             }
//         })
//         .then((response) => response.json())
//         .then((resJson)=>{
//             console.log("Call subject in subject list ",resJson);
//             this.dataHandler(resJson);
//         })
//     }

//     dataHandler(data){
//         console.log("Call subject in subject list in dataHandler ", data);
//         this.setState({
//             subject:data,
//             isLoading:false,
//         })
//         console.log("Call subject in subject list in dataHandler state done ", this.state.subject);
//         console.log("Call subject in subject list in dataHandler state done for subject array ", this.state.subject[0].subject);



//     }
    

//     async getStudent_id(){
//         console.log("^^^^^^^^^^^^^^^^^^^^^^^^^ getStudent_id ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^");
//         try{
//             let student_id=await AsyncStorage.getItem("student_id");
//             // let token =await AsyncStorage.getItem('token');
//             console.log("in subject list in getStudent_id : "+student_id);

//             // console.log("in subject list in getStudent_id : "+student_id+" "+token);
//             console.log("%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%");

//             this.set_student_id(student_id);
//             // this.set_token(token);

//             // this.getUserSubject();

//           }catch(error){
//             console.log("^^^^^^^^^^^^^^^^^^^^^^^^^ catch ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^");

//             alert(error+" in subject list");    
//             // console.log("%%%%%%%%%%%%%%%%%% "+error+" in subject list");      

//           }

//         //   if(student_id==''){
//         //     this.getStudent_id()
//         //   }else{
//         //     console.log("Fetch student id");
//         //   }

//           return;
//     }

//     async getToken(){
//         console.log("^^^^^^^^^^^^^^^^^^^^^^^^^ getToken ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^");
//         try{
//             let token=await AsyncStorage.getItem("token");
//             let role=await AsyncStorage.getItem("role");
//             // console.log("in subject list in token : "+token);

//             // console.log("in subject list in getStudent_id : "+student_id+" "+token);
//             console.log("%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%% "+role);
//             this.set_token(token,role);

//           }catch(error){
//             alert(error+" in subject list");    
//             // console.log("%%%%%%%%%%%%%%%%%% "+error+" in subject list");      

//           }

//         //   if(student_id==''){
//         //     this.getStudent_id()
//         //   }else{
//         //     console.log("Fetch student id");
//         //   }

//         this.getUserSubject();


//           return;
//     }

//     set_token(token,role){
//         // console.log("in set_token "+token);
//         this.setState({
//             token:token,
//             role:role
//         })
//         // console.log("in set_student_id "+this.state.token+" done");


//         return
//     }

//     set_student_id(id){
//         console.log("in set_student_id "+id);
//         this.setState({
//             student_id:id
//         })
//         console.log("in set_student_id "+this.state.student_id+" done");


//         return
//     }

//     handleRole=(role)=>{
//         this.setState({role:role});
//         // console.log("pass handleToken Function in subject list : ");
//         return


//         // console.log("In handleToken Function in notice : "+this.state.token);
//     }
    

//     renderItem = ({item, index})=>{
//         //Close in the position
//         if(item.empty ===  true){
//             return(
//                 <View style={[styles.item, styles.itemInvisible]}>

//                 </View>
//             )
//         }
//         return(
//             <TouchableOpacity key={index} style={styles.item} 
//             onPress={this.subjectHandler} >
//                     <Text style={styles.itemText}>{item.subject}</Text>
                
//             </TouchableOpacity>
//         )
//     }

//     render(){
//         if(this.state.isLoading){
//            return(
//                <View style={styles.containerWait}>
//                  <ActivityIndicator size="large" color="#fb8c00" />
                 
//                </View>
//              )
//         }
//         else{
//             console.log("**************** subject list is ready ***********");
//            let Subject_list = this.state.subject[0].subject.map((val, key) =>{
//                return (
//                    <TouchableOpacity key={key} style={styles.item} 
//                    onPress={()=>this.subjectHandler(val.id)}

//                    >
//                        <TouchableOpacity
//                         // onPress={()=>this.subjectHandler()}

//                        >
//                            <Text>{val.name}</Text>
//                            {/* <Text>{val.id + 1}</Text> */}
//                        </TouchableOpacity>
   
//                    </TouchableOpacity>
//                )
//              });
           
//        return(
//            <View style={styles.container}> 
//            <ScrollView>
            
//                <TouchableOpacity
//                    // style={[{opacity:opacityStyle},styles.button]}
//                    onPress={()=>this.press()}
//                    // disabled={disabled}
//                 >
//                  </TouchableOpacity>

//                 {Subject_list}
//                {/* <Icon 
//                    name="angle-right"
//                    color='#008388'
//                    size={32}
//                    style={styles.icon}
//                /> */}
//                {/* <Text>gfgf</Text> */}
//                {/* </TouchableOpacity> */}
//            </ScrollView>
               
//             </View>
//         )
//     }
//    }

//    async setSubject_id(subject_id){
//        var id=subject_id.toString();
//     console.log("in setSubject_id "+id+" /////////////|||||||||||||||");

//     try{
//         await AsyncStorage.setItem("subject_id",id);
//         console.log('subject_id saves asyn');
//       }catch(error){
//         alert("subject_id store error "+error);
//       }

// }

//     subjectHandler=(subject_id)=>{
//         // alert('presss..!')
//         var role=this.state.role;
        

//         console.log('Press Subject as a '+role+" ++++++++++++ "+subject_id);

//         this.setSubject_id(subject_id);
//         if(role == 'student'){
//             this.props.navigation.navigate('SubjectDetails');
//         }else{
//             this.props.navigation.navigate('SubjectDetailsParent');

//         }
//     }

//     // render() {

//     //     // if(this.state.isLoading){
//     //     //   return(
//     //     //     <View style={styles.containerWait}>
//     //     //       <ActivityIndicator size="large" color="#0000ff" />
              
//     //     //     </View>
//     //     //   )
//     //     // }
//     //     // else{
//     //       let sub = data.map((val, key) =>{
//     //         return (
//     //             <TouchableOpacity key={key} style={styles.item} onPress={this.subjectHandler} >
//     //                 <Text style={styles.itemText}>{val.subject}</Text>
//     //             </TouchableOpacity>
//     //         )
//     //       });
    
//     //       return (
//     //         <ScrollView style={styles.container}>    
    
//     //           <View >
//     //             {sub}

//     //           </View>
//     //         </ScrollView>
//     //       );
//     //     // }
//     //   }
// }
 
// export default withNavigation(SubjectList);


// const styles = StyleSheet.create({
//     container:{
//         flex:1,
//         // marginVertical :20,
//     },
    
//     item:{
//         backgroundColor:colors.subject_list,
//         alignItems:'center',
//         justifyContent:'center',
//         height:70,
//         flex:1,
//         //margin:1,
//         padding:5,
//         marginLeft:20,
//         marginRight:20,
//         marginBottom:10,
//         marginTop:10,
//         borderRadius:10,
//         //color:'#000000',
//         //color:'red',
//         //fontSize:50,
//         //height: Dimensions.get('window').width/numColumns, //approximate a square
//     },

//     itemInvisible:{
//         backgroundColor:'transparent'
//     },

//     itemText:{
//         color:'#fff'
//     },

//     // ai:{
//     //     alignItems: 'center',
//     //    justifyContent: 'center'
//     // },

//     containerWait: {
//         //flex: 1,
//         //backgroundColor: '#fff',
//         alignItems: 'center',
//         justifyContent: 'center',
//       },

//     //   item:{
//     //     flex: 1,
//     //     padding: 20,
    
//     //   },
//     //   titleContainer:{
//     //     alignItems: 'center',
//     //     justifyContent: 'center',
//     //   },
    
//     //   title:{
//     //     fontSize: 20,
//     //     fontWeight: "500",
//     //     justifyContent:'center'
//     //   },
    
//     //   notice:{
//     //     paddingBottom:20
//     //   },
    
//     //   dateContainer:{
//     //     backgroundColor: '#1c50a5',
//     //     padding: 15,
//     //     borderRadius: 25,
//     //     alignItems: 'center',
    
//     //   },
    
//     //   date:{
//     //     fontWeight: '300',
//     //     color: '#ffffff'
//     //   }
// });



// import React, { Component } from 'react';

// import { View, StyleSheet,TouchableOpacity,Text } from 'react-native';
// import style from '../../styles/style';
// import CustomHeader from '../../components/Header/Header';
// import { Table, TableWrapper, Row, Rows, Col } from 'react-native-table-component';
// import Icon from 'react-native-vector-icons/Ionicons';
// import DocList from '../../components/docList/DocList';

// export default class AppointmentSummary extends Component {

//     constructor(props) {
//         super(props);
//         this.state = {
//         }
//     }

//     render() {
//         const state = this.state;
//         const { parent, iconimg,iconView } = style
//         return (
//             <View >
//                 <CustomHeader
//                     title="Appointment Summary"
//                     leftPress={() => this.props.navigation.goBack()}
//                     iconNameRight="md-git-network"
//                     iconName="arrow-round-back"
//                     type="sub"
//                 />

//                 <DocList />

                
//             </View>
//         )
//     }
// }

// const styles = StyleSheet.create({
//     container: { flex: 1, padding: 16, paddingTop: 80, backgroundColor: '#fff' },
//     head: {  height: 40,  backgroundColor: '#f1f8ff'  },
//     wrapper: { flexDirection: 'row' },
//     title: { flex: 1, width:40, backgroundColor: '#f6f8fa' },
//     row: {  height: 28  },
//     text: { textAlign: 'center' }
//   });
