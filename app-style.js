import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    logo_row: {
        flexDirection: 'row',
        height: 300,
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo_container: {
        height: 200,
    },
    logo_image: {
        height: 150,
        width: 150,
        top: 30,
    },
    input: {
        borderRadius: 5,
        borderBottomWidth: 2,
        height: 45,
        marginBottom: 5,
        color: '#424242',
        margin: 20,
        marginTop: 20,
    },
    button: {
        backgroundColor: '#000',
        height: 50,
        margin: 20,
        textAlign: 'center',
        justifyContent: 'center',
        borderRadius: 5
    },
    button_text: {
        textAlign: 'center',
        color: '#fff',
        fontWeight: '700',
        fontSize: 20,
        // fontFamily: 'Cochin',
    },
    other_buttons: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    other_buttons_text: {
        fontWeight: '700',
        textDecorationLine: 'underline',
    },
    semiCricle_Container: {
        flex: 1,
        height: 300,

    },
    semiCricle_Wrapper: {
        width: 250, // half of the image width
        height: 500,
        position: 'relative',
        backgroundColor: 'transparent'
    },
    semiCricle_Shape: {
        width: 650,
        height: 650,
        position: 'absolute',
        left: 150-2,
        borderRadius: 650/2, // half of the image width
        backgroundColor: '#80deea',
        justifyContent:'center',
        alignItems:'center'
    },
    profile_container: {
        height: 300,
        right:130,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        // transform: [{ rotate: '90deg' }]

    },
    pimage: {
        height: 150,
        width: 150,
        borderRadius: 80,
    },
    pro_name: {
        color: '#fff',
        fontSize: 22,
        fontWeight: '500',
        margin: 10
    },
    number_bar: {
        backgroundColor: 'transparent',
        height: 50,
        right:250,
        top:0,
        flexDirection: 'row',
        transform: [{ rotate: '90deg' }]
    },
    num_calculation: {
        color: '#fff',
        fontSize: 20,
        fontWeight: '500',
        textAlign: 'center',
    },
    lcs_buttons: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        margin: 10

    },
   
});