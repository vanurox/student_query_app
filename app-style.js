import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    logo_row: {
        flexDirection:'row',
        height:300,
        justifyContent:'center',
        alignItems:'center',
    },
    logo_container: {
        height:200,
    },
    logo_image: {
        height:150,
        width:150,
        top:30,
    },
    input: {
        borderRadius: 5,
        borderBottomWidth: 2,
        height: 45,
        marginBottom: 5,
        color: '#424242',
        margin: 20,
        marginTop: 20
    },
    button: {
        backgroundColor: '#000',
        height: 50,
        margin: 20,
        textAlign: 'center',
        justifyContent: 'center',
        borderRadius: 5
    },
    button_text:{
        textAlign: 'center',
        color: '#fff',
        fontWeight: '700',
        fontSize: 20,
        // fontFamily: 'Cochin',
    },
    other_buttons: {
        flexDirection:'row',
        justifyContent:'space-between'
    },
    other_buttons_text: {
        fontWeight:'700',
        textDecorationLine: 'underline',
    }
    
});