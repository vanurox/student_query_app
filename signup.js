import React, { Component } from 'react';
import { View, Text, TextInput, KeyboardAvoidingView, TouchableOpacity, Image } from 'react-native';
import { styles } from './app-style';
import { LinearGradient } from 'expo-linear-gradient';
import { DatePicker, Content, Picker } from 'native-base';
import Dialog from "react-native-dialog";
import SelectMultiple from 'react-native-select-multiple';


const specifications = ['Java', 'C', 'C++', 'C#', 'PHP', 'XML', 'SQL', 'JavaScript', 'iOS/Swift',
    'React', 'Ionic', 'Json', 'Ruby', '.Net', 'Node', 'Photoshop', 'Corel', 'Android',
    'Html', 'Css', 'Jquery', 'Python', 'Scala', 'AngularJS', 'Bootstrap']


export default class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
             chosenDate: new Date(),
             selectedSpecifications: [],
             dialogVisible: false,
            };
        this.setDate = this.setDate.bind(this);
    }
    setDate(newDate) {
        this.setState({ chosenDate: newDate });
    }


    // getStringSpecs = () => {
    //     let specs = [];
    //     this.state.selectedSpecifications.forEach((v,i)=>{
    //         specs.push(v.value);
    //     });
    //     return specs.join(",");
    // }

    onSelectionsChange = (selectedSpecifications) => {
        this.setState({ selectedSpecifications })
    }
    

    showDialog = () => {
        this.setState({ dialogVisible: true });
    };

    Done = () => {
        this.setState({ dialogVisible: false });
    };

    render() {

        return (

            <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
                <View>
                    <View style={{ flexDirection: 'column', height: 80, justifyContent: 'center', alignItems: 'center', }}>


                        <View style={{ top: 30 }}>
                            <Text style={{
                                fontSize: 25,
                                fontWeight: '600',
                                borderBottomColor: 'black',
                                borderBottomWidth: 1,
                            }}>
                                SIGN UP
                            </Text>
                        </View>


                    </View>


                    <View style={styles.input_container}>

                        <View style={styles.input} >
                            <TextInput
                                placeholder="Name"
                                keyboardType="email-address"
                                underlineColorAndroid="transparent"
                                returnKeyType="next"
                                style={{fontSize:16, top: 12, left: 10 }}
                            />
                        </View>

                        <View style={styles.input} >
                            <TextInput
                                placeholder="Email"
                                keyboardType="email-address"
                                underlineColorAndroid="transparent"
                                returnKeyType="next"
                                style={{ fontSize:16,top: 12, left: 10 }}

                            />
                        </View>

                        <View style={styles.input} >
                            <Content>
                                <DatePicker
                                    defaultDate={new Date(2018, 7, 29)}
                                    minimumDate={new Date(1994, 1, 1)}
                                    maximumDate={new Date(2018, 12, 31)}
                                    locale={"en"}
                                    timeZoneOffsetInMinutes={undefined}
                                    modalTransparent={false}
                                    animationType={"fade"}
                                    androidMode={"default"}
                                    placeHolderText="Date of Birth"
                                    textStyle={{ color: "green" }}
                                    placeHolderTextStyle={{ color: "#d3d3d3", fontSize: 14, top: 8, }}
                                    onDateChange={this.setDate}
                                    disabled={false}
                                />
                                <Text>
                                    Date: {this.state.chosenDate.toString().substr(4, 12)}
                                </Text>
                            </Content>
                        </View>

                        <View style={styles.input} >
                            <TextInput
                                placeholder="Class (Optional)"
                                keyboardType="default"
                                secureTextEntry={true}
                                returnKeyType="go"
                                style={{ fontSize:16,top: 12, left: 10 }}

                            />
                        </View>


                        <View style={styles.input} >
                            <TextInput
                                placeholder="Password"
                                keyboardType="default"
                                secureTextEntry={true}
                                returnKeyType="go"
                                style={{ fontSize:16,top: 12, left: 10 }}

                            />
                        </View>

                        <View style={styles.input} >
                            <TextInput
                                placeholder="Confirm Password"
                                keyboardType="default"
                                secureTextEntry={true}
                                returnKeyType="go"
                                style={{ fontSize:16, top: 12, left: 10 }}

                            />
                        </View>

                        <View style={styles.input}>
                            <Picker
                                selectedValue={this.state.college}
                                onValueChange={(itemValue, itemIndex) =>
                                    this.setState({
                                        college: itemValue
                                    })
                                }>
                                <Picker.Item label="CT College" value="CT College" />
                                <Picker.Item label="Khalsa college" value="Khalsa college" />
                                <Picker.Item label="Lovely university" value="Lovely university" />
                            </Picker>

                        </View>

                        <View style={styles.input}  >
                            <TouchableOpacity onPress={this.showDialog}>
                                <Text style={{fontSize: 17,left:5,top: 10,}}>Select Specification</Text>
                            </TouchableOpacity>
                            <Dialog.Container visible={this.state.dialogVisible}>
                                <SelectMultiple
                                    items={specifications}
                                    selectedItems={this.state.selectedSpecifications}
                                    onSelectionsChange={this.onSelectionsChange} />
                                <Dialog.Button label="Submit" style={{ fontSize: 18, }} onPress={this.Done} />
                            </Dialog.Container>
                        </View>



                        <TouchableOpacity>
                            <LinearGradient
                                colors={['#4c669f', '#3b5998', '#192f6a']}
                                style={styles.button}>
                                <Text
                                    style={styles.button_text}>
                                    Done
                            </Text>
                            </LinearGradient>
                        </TouchableOpacity>



                    </View>
                </View>
            </KeyboardAvoidingView>

        );
    }
} 