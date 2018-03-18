import React from "react";
import {
    StyleSheet,
    Text,
    View,
    StatusBar
} from 'react-native';

export default class Home extends React.Component {
    render() {
        return(
            <View style={styles.container}>
                <StatusBar
                    barStyle="light-content"
                    backgroundColor="#4F6D7A"
                />
                <Text style={styles.welcome}>
                    Welcome to Lending App!
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#30396c',
    },
    welcome: {
        fontFamily: 'proxima-nova-regular',
        textAlign: 'center',
        margin: 10,
        color: '#f7f7f7',
        fontSize: 30,
    },
});