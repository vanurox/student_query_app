import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';


const { height, width } = Dimensions.get('window');

export default class Round extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.circle}>
                    <Text>TEsting</Text>
                </View>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    circle: {
        width: width + 200,
        height: width + 200,
        borderRadius: (width + 200) / 2,
        backgroundColor: '#580',
        position: 'absolute',
        left: -(100),
        top: -(200),
        justifyContent: 'center',
        alignItems: 'center'
    }
})