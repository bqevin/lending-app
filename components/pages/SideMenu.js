import PropTypes from 'prop-types';
import React from 'react';
import {NavigationActions} from 'react-navigation';
import {
    ScrollView,
    Text,
    View,
    StyleSheet
} from 'react-native';
import {Avatar} from 'react-native-elements';
import LoanStatus from './LoanStatus';
import Home from './Home';

class SideMenu extends React.Component {
    navigateToScreen = (route) => () => {
        const navigateAction = NavigationActions.navigate({
            routeName: route
        });
        this.props.navigation.dispatch(navigateAction);
    };
    render () {
        return (
            <View style={styles.container}>
                <ScrollView>
                    <View style={{paddingTop: 20, paddingLeft: 20}}>
                        <Avatar
                            large
                            rounded
                            title="KB"
                            activeOpacity={0.7}
                        />
                        <Text style={styles.sectionHeadingStyle}>
                            DASHBOARD
                        </Text>
                        <View style={styles.navSectionStyle}>
                            <Text style={styles.navItemStyle} onPress={this.navigateToScreen('Home')}>
                                Home
                            </Text>
                            <Text style={styles.navItemStyle} onPress={this.navigateToScreen('LoanStatus')}>
                                My Loan Status
                            </Text>
                        </View>
                    </View>
                    <View style={{paddingLeft: 20}}>
                        <Text style={styles.sectionHeadingStyle}>
                            EXTRAS
                        </Text>
                        <View style={styles.navSectionStyle}>
                            <Text style={styles.navItemStyle}>
                                Invite Friends
                            </Text>
                        </View>
                    </View>
                </ScrollView>
                <View style={styles.footerContainer}>
                    <Text style={{color: '#fff'}}>Lending App &copy; 2018</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 20,
        flex: 1,
        backgroundColor: '#30396c',
    },
    navItemStyle: {
        padding: 10,
        color: '#d3d3d4',
        fontSize:16
    },
    navSectionStyle: {

    },
    sectionHeadingStyle: {
        color: '#76b3dc',
        paddingVertical: 10,
        paddingHorizontal: 5,
        fontWeight: 'bold',
        fontSize: 16
    },
    footerContainer: {
        padding: 20,
        backgroundColor: '#76b3dc',
        alignItems: 'center',
        justifyContent: 'center'
    }
});

SideMenu.propTypes = {
    navigation: PropTypes.object
};

export default SideMenu;