import {
    StyleSheet,
    Dimensions
} from 'react-native';

var { width } = Dimensions.get('window');

var box_width = width / 1.3;

export default styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
    },
    box: {
        height: '100%',
        backgroundColor: '#7171718a'
    },
    content: {
        width: '100%',
        maxWidth: 428,
        backgroundColor: 'transparent',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
});