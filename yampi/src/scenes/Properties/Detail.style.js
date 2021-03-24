import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export default style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        width: '100%',
        justifyContent: 'center',
    },
    cardDetail: {
        backgroundColor: '#ffff',
        borderRadius: 25,
        marginTop: height * 0.37,
        paddingHorizontal: 30,
        paddingTop: 25,
        paddingBottom: 70,
        width: '100%',
    },
    cardDetailTitle: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    image: {
        height: height * 0.4,
        backgroundColor: 'white'
    },
    buttonBack: {
        position: "absolute",
        backgroundColor: '#ffff',
        top: 50,
        left: 25,
        width: 40,
        height: 40,
        zIndex: 99,
        borderRadius: 100,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.4,
        elevation: 8,
        shadowRadius: 3.84,
        justifyContent: "center",
        alignItems: "center",
    },
    buttonFav: {
        backgroundColor: '#F2F2F2',
        width: 40,
        height: 40,
        zIndex: 99,
        borderRadius: 100,
        shadowRadius: 3.84,
        justifyContent: "center",
        alignItems: "center",
    },
    fav: {
        fontSize: 19,
        color: '#C4C4C4'
    },
    back: {
        fontSize: 16,
    },
    dotStyle: {
        width: 8,
        height: 8,
        borderRadius: 5,
        marginHorizontal: 0,
        padding: 0,
        margin: 0,
        marginBottom: 15,
        backgroundColor: "rgba(128, 128, 128, 0.92)",
        shadowOffset: { width: 10, height: 10 },
        shadowRadius: 9.84,
        elevation: 4
    },
    title: {
        fontSize: 28,
        fontFamily: 'Montserrat_bold',
        marginBottom: 14
    },
    price: {
        fontSize: 18,
        fontFamily: 'Montserrat_bold',
        marginBottom: 10,
        color: '#0B0B0B'
    },
    directionContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 10
    },
    localizationPin: {
        color: '#D82067',
        fontSize: 20
    },
    separator: {
        backgroundColor: '#C4C4C4',
        height: 1,
        width: '100%',
        marginBottom: 20
    },
    section: {
        marginBottom: 20
    },
    sectionTitle: {
        fontSize: 18,
        fontFamily: 'Montserrat_medium',
        marginBottom: 25
    },
    address: {
        fontSize: 12.5,
        color: '#b8b8b8',
        fontFamily: 'Montserrat_medium'
    },
    features: {
        flexDirection: 'row',
        padding: 10
    },
    featureQuantity: {
        color: '#D82067',
        fontFamily: 'Montserrat',
        fontSize: 18
    },
    sectionItem: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
    featureName: {
        color: '#D82067',
        fontFamily: 'Montserrat',
        fontSize: 14
    },
    featureItem: {
        width: 80,
        height: 70,
        borderRadius: 10,
        backgroundColor: '#FAE2EB',
        marginRight: 15,
        justifyContent: "center",
        alignItems: "center"
    },
    sectionItemName: {
        marginBottom: 20,
        fontFamily: 'Montserrat',
        fontSize: 15
    },
    more: {
        backgroundColor: '#ffff',
        borderColor: '#C7C7C7',
        borderWidth: 1,
        borderRadius: 5,
        padding: 20,
        justifyContent: "center",
        alignItems: "center"
    },
    footerPay: {
        position: "absolute",
        bottom: 0,
        height: 75,
        width: '100%',
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#ffff",
        justifyContent: "space-between",
        paddingHorizontal: 30,
        shadowColor: 'black',
        shadowOffset: { width: 10, height: 10 },
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.2,
        shadowRadius: 4.65,
        elevation: 8,
        zIndex: 99,
        shadowColor: 'black',
    },
    signupButton: {
        elevation: 10,
        width: 100
    },
    signupButtonText: {
        fontFamily: 'Montserrat_bold',
        fontSize: 14,
        letterSpacing: 1,
        color: "white"
    }
});
