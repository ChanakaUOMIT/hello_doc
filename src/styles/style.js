import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    heading: {
        fontSize: 25,
        textAlign: 'center'
    },
    input: {
        marginLeft: 20,
        marginRight: 20,
        backgroundColor: '#3973ac',
        marginBottom: 3,
        justifyContent: 'center',
        borderRadius: 5
    },
    parent: {
        flexDirection:'column',
        flexGrow: 1,
        justifyContent: 'center',
        backgroundColor: 'white',
        justifyContent: 'center'
    },
    loginTxt: { //styling for Login text
        color: '#01A9DB',
        fontSize: 20,
        textAlign: 'center',
        marginBottom: 15,
        marginTop: 10,
    },
    buttonStyle: { //styling for TouchableOpacity
        padding: 15,
        backgroundColor: '#3973ac',
        borderRadius: 5,
        width: '50%',
        alignItems: 'center',
        marginLeft: 100,
        marginTop: 5,
        marginBottom: 5
    },

    nextButton: {
        padding: 15,
        backgroundColor: '#76B0C6',
        borderRadius: 100,
        width: '18%',
        alignItems: 'flex-start',
        marginLeft: 100,
        marginTop: 5,
        marginBottom: 5
    },
    signupTxt: {
        fontSize: 20,
        color: 'black'
    },
    signupButton: {
        fontSize: 16,
        fontWeight: '500'
    },
    signupTxtCont: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 5,
        flexDirection: 'row'
    },
    imagepic: {
        width: 140,
        height: 180,
        alignItems: 'center',
        flexDirection: 'column',
        marginLeft: 120

    },

    pbar: {
        color: '#6FB8F7',
    },

    commt: {
        justifyContent: 'center',
        flexDirection: 'column',
    },

    progBar: {
        flex: 2,
        marginTop: 10,
        flexGrow: 1,
    },

    form: {
        marginTop: 5
    },

    timeText: { //Styling for chosen date in Datetime picker
        color: 'red',
        fontSize: 20,
        textAlign: 'center',
    },

    textInp: {
        height: 100,
        margin: 20,
        padding: 10,
        borderColor: 'grey',
        borderWidth: 1,
    },

    headText: { //styling for headings
        color: 'black',
        fontSize: 28,
        textAlign: 'center',
        alignItems: 'flex-start',
        marginTop: 30
    },

    iconimg:{
        color: '#19334d',
    },
    
    iconimgclose: { //styling for close icon
        color: '#19334d',
        backgroundColor:'red',
        marginLeft:90,
        flexDirection:'column-reverse'
    },

    iconView: {
        flex: 1,
        alignItems:'baseline',
        marginLeft:300,
        marginTop:250
    },

    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },

    valueText: {
        fontSize: 18,
        marginBottom: 50,
    },

    drpView: { //styling for dropdown menu View
        flex: 1,
    },

    radView:{
        flex:1
    },

    drpDown: { //styling for Dropdown menu
        flex: 1,
        fontSize: 18,
        marginTop: 5,
        alignItems:'flex-start',
        width:250
    },

    radText: { //styling for Radio button
        fontSize: 22,
        textAlign: 'center',
        marginTop: 70

    },

    modalView:{ //styling for View of modal
        flex:1,
        alignItems:'center',
        marginTop:100
    },

    rateView:{
       flex:1,
       padding:4,
       borderWidth:1,
       borderColor:'black'
    },

    textInp:{
        borderWidth:1
    },

    homeName:{
        fontSize:35,
        fontWeight:'bold'
    },

    homeView:{
        padding:10,
        alignItems:'center'
    },
    homepic: {
        width: 500,
        height: 300,
        alignItems: 'center',
        flexDirection: 'column',

    },

    homedesc:{
        fontSize:25
    },

    
})