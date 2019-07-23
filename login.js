import React, { Component } from 'react';
import { View, Text, TextInput, KeyboardAvoidingView, TouchableOpacity, Image } from 'react-native';
import { styles } from './app-style';
import { Font } from 'expo';

export default class LogIn extends Component {

    constructor() {
        super();
        this.state = {
            TextInputEmail: '',
            TextInputPassword: '',
            // fontLoaded: false,
        }
    }

    // async componentDidMount() {
    //     await Font.loadAsync({
    //         'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
    //     });
    //     this.setState({ fontLoaded: true });
    // }

    render() {

        return (

                <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
                    <View>
                        <View style={styles.logo_row}>
                            <View style={styles.logo_conatiner}>
                                <Image style={styles.logo_image} source={require('./images/logoo.png')} />
                            </View>
                        </View>

                        <View style={styles.input_container}>
                            <TextInput
                                placeholder="Email / Username"
                                keyboardType="email-address"
                                underlineColorAndroid="transparent"
                                returnKeyType="next"
                                style={styles.input}
                                onChangeText={TextInputEmail => this.setState({ TextInputEmail })}
                            />

                            <TextInput
                                placeholder="Password"
                                keyboardType="default"
                                secureTextEntry={true}
                                returnKeyType="go"
                                style={styles.input}
                                onChangeText={TextInputPassword => this.setState({ TextInputPassword })}
                            />

                            <TouchableOpacity style={styles.button}>
                                <Text style={styles.button_text}>Log In</Text>
                            </TouchableOpacity>

                            <View style={styles.other_buttons}>
                                <View style={{ left: 25 }}>
                                    <TouchableOpacity >
                                        <Text style={styles.other_buttons_text} >Sign Up</Text>
                                    </TouchableOpacity>
                                </View>

                                <View style={{ right: 25 }}>
                                    <TouchableOpacity >
                                        <Text style={styles.other_buttons_text} >Forgot Password?</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>

                        </View>
                    </View>
                </KeyboardAvoidingView>

        );
    }
} 