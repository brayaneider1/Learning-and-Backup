import { StyleSheet, Dimensions } from "react-native";

const { height } = Dimensions.get("window");

export default style = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        flexDirection: 'column',
        paddingTop:30,
        flex: 1,
        display: 'flex',
    },
    card: {
        display: 'flex',
        flexDirection: 'column',
        width: '80%',
        height: 'auto',
        borderRadius: 18,
        backgroundColor: 'white',
        alignSelf: 'center',
        shadowColor: 'grey',
        justifyContent: 'center',
        elevation: 2,
        padding: 15,
        marginBottom:15
    },
    row: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    col: {
        display: 'flex',
        flex: 0.8,
        flexDirection: 'column'
    },
    email: {
        fontSize: 10,
        color: '#acacac',
        fontFamily: 'Montserrat_medium',
    },
    type: {
        fontSize: 14,
        color: '#000',
        fontFamily: 'Montserrat_bold',
    },
    stateOpen: {
        fontSize: 10,
        color: '#A522E1',
        fontFamily: 'Montserrat_medium',
    },
    stateClose: {
        fontSize: 10,
        color: '#D82067',
        fontFamily: 'Montserrat_medium',
    },
    rectangleLessor: {
        display: 'flex',
        width: 40,
        height: 40,
        borderRadius: 5,
        backgroundColor: '#4183cf',
        alignItems: 'center',
        justifyContent: 'center'
    },
    rectangleDebtor: {
        display: 'flex',
        width: 40,
        height: 40,
        borderRadius: 5,
        backgroundColor: '#63b9a5',
        alignItems: 'center',
        justifyContent: 'center'
    },
});
