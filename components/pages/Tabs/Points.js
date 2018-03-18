import React from "react";

import {
    StyleSheet,
    Text,
    View
} from 'react-native';

export default class Points extends React.Component {
    render() {
        return (
            <View>
                <Text style={styles.welcome}>
                    Points Page
                </Text>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    welcome: {
        marginTop:50,
        fontFamily: 'proxima-nova-regular',
        textAlign: 'center',
        color: '#f7f7f7',
        fontSize: 30,
    },
});