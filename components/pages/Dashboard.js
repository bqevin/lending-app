import React from 'react';
import { Font } from 'expo';
import {
    StyleSheet,
    Text,
    View,
    StatusBar
} from 'react-native';

export default class Dashboard extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isReady: false
        };
    }

    async componentWillMount() {
        await Font.loadAsync({
            'proxima-nova-regular': require('./assets/fonts/ProximaNova-Reg-webfont.ttf'),
            'proxima-nova-light': require('./assets/fonts/ProximaNova-Light-webfont.ttf')
        });
        this.setState({ isReady: true });
    }

    render() {

        return (
            <View style={styles.container}>
                <StatusBar
                    barStyle="light-content"
                    backgroundColor="#4F6D7A"
                />
                {
                    this.state.isReady ? (
                        <Text style={styles.welcome}>
                            Welcome to Lending App!
                        </Text>
                    ):null
                }

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
        backgroundColor: '#30396c',
    },
    welcome: {
        fontFamily: 'proxima-nova-regular',
        textAlign: 'center',
        margin: 10,
        color: '#f7f7f7',
        fontSize: 30,
    },
    instructions: {
        textAlign: 'center',
        color: '#f7f7f7',
        marginBottom: 5,
    },
});
