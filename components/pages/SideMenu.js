import PropTypes from 'prop-types';
import React from 'react';
import {NavigationActions} from 'react-navigation';
import {
    ScrollView,
    Text,
    View,
    StyleSheet
} from 'react-native';
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
                    <View>
                        <Text style={styles.sectionHeadingStyle}>
                            Section 1
                        </Text>
                        <View style={styles.navSectionStyle}>
                            <Text style={styles.navItemStyle} onPress={this.navigateToScreen('Home')}>
                                Home
                            </Text>
                            <Text style={styles.navItemStyle} onPress={this.navigateToScreen('LoanStatus')}>
                                Loan Status
                            </Text>
                        </View>
                    </View>
                    <View>
                        <Text style={styles.sectionHeadingStyle}>
                            Section 2
                        </Text>
                        <View style={styles.navSectionStyle}>
                            <Text style={styles.navItemStyle}>
                                Page 3
                            </Text>
                        </View>
                    </View>
                </ScrollView>
                <View style={styles.footerContainer}>
                    <Text>Lending App &copy 2018</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 20,
        flex: 1
    },
    navItemStyle: {
        padding: 10
    },
    navSectionStyle: {
        backgroundColor: 'lightgrey'
    },
    sectionHeadingStyle: {
        paddingVertical: 10,
        paddingHorizontal: 5
    },
    footerContainer: {
        padding: 20,
        backgroundColor: 'lightgrey'
    }
});

SideMenu.propTypes = {
    navigation: PropTypes.object
};

export default SideMenu;