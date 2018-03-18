import React from "react";
import {
    StyleSheet,
    Text,
    View,
    StatusBar
} from 'react-native';
export default class LoanStatus extends React.Component {

    static navigationOptions = ({ navigation}) => ({
        drawerLabel: "Dashboard",
        title: "Dashboard",
        headerLeft: <Text onPress={() =>
            navigation.navigate('DrawerToggle')}>Menu</Text>
    });
    render() {
        return(
            <View style={styles.container}>
                <StatusBar
                    barStyle="light-content"
                    backgroundColor="#4F6D7A"
                />
                <Text style={styles.welcome}>
                    Loan status page
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