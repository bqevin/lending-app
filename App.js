import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    StatusBar
} from 'react-native';

export default class App extends React.Component {
  render() {
    return (
        <View style={styles.container}>
            <StatusBar
                barStyle="light-content"
                backgroundColor="#4F6D7A"
            />
            <Text style={styles.welcome}>
                Welcome to Lending App!
            </Text>
            <Text style={styles.instructions}>
                If you already have an account, login to continue
            </Text>
            <Text style={styles.instructions}>
                Create an account here
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
        backgroundColor: '#4F6D7A',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
        color: '#F5FCFF',
    },
    instructions: {
        textAlign: 'center',
        color: '#F5FCFF',
        marginBottom: 5,
    },
});
