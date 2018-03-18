import React from 'react';
import t from 'tcomb-form-native';
import _ from 'lodash';
import {
    StyleSheet,
    Text,
    ScrollView,
    StatusBar,
    Image,
    TouchableHighlight
} from 'react-native';

const Form = t.form.Form;

// clone the default stylesheet
const stylesheet = _.cloneDeep(t.form.Form.stylesheet);

// overriding the form styling
stylesheet.textbox.normal.minWidth = '80%';
stylesheet.textbox.normal.color = '#fff';
stylesheet.select.normal.color = '#fff';
stylesheet.controlLabel.normal.color = '#fff';
stylesheet.controlLabel.normal.fontFamily = 'proxima-nova-light';
stylesheet.controlLabel.normal.fontWeight = '400';
stylesheet.textbox.normal.borderWidth = 0;
stylesheet.textbox.error.borderWidth = 0;
stylesheet.textbox.normal.marginBottom = 0;
stylesheet.textbox.error.marginBottom = 0;


stylesheet.textboxView.normal.borderWidth = 0;
stylesheet.textboxView.normal.borderColor = '#d3d3d4';
stylesheet.textboxView.error.borderWidth = 0;
stylesheet.textboxView.normal.borderRadius = 0;
stylesheet.textboxView.error.borderRadius = 0;
stylesheet.textboxView.normal.borderBottomWidth = 1;
stylesheet.textboxView.error.borderBottomWidth = 1;
stylesheet.textbox.normal.marginBottom = 5;
stylesheet.textbox.error.marginBottom = 5;

const Gender = t.enums({
    M: 'Male',
    F: 'Female'
});


const User = t.struct({
    firstName: t.String,
    lastName: t.String,
    phone: t.Number,
    email: t.String,
    gender: Gender,
    identification: t.Number,
    pin: t.Number,
    confirmPin: t.Number,
    terms: t.Boolean,
});

const options = {
    stylesheet: stylesheet,
    order: ['firstName', 'lastName', 'gender', 'phone', 'email', 'identification','pin','confirmPin','terms'],
    fields: {
        firstName: {
            label: 'First name'
        },
        lastName: {
            label: 'Last name'
        },
        gender: {
            nullOption: {value: '', text: 'I am'}
        },
        phone: {
            label: 'Your phone number'
        },
        email: {
            label: 'Your email address',
            error: 'Insert a valid email'
        },
        identification: {
            label: 'National ID Number'
        },
        pin: {
            label: 'Enter PIN number'
        },
        confirmPin: {
            label: 'Confirm PIN number'
        },
        terms: {
            label: 'Agree to T & C',
        },
    },
};

export default class Register extends React.Component {
    render() {
        return (
            <ScrollView contentContainerStyle={styles.container}>
                <StatusBar
                    barStyle="light-content"
                    backgroundColor="#4F6D7A"
                />
                <Image source={require('../../assets/wp.png')} style={{paddingTop:10, width: 100, height: 100}} />

                <Text style={styles.welcome}>
                    Create your account
                </Text>
                <Form
                    ref={c => this._registerform = c}
                    type={User}
                    options={options}/>

                <TouchableHighlight style={styles.button} onPress={this.handleSubmit} underlayColor='#99d9f4'>
                    <Text style={styles.buttonText}
                          onPress={() => this.props.navigation.goBack()}>
                        Create Account
                    </Text>
                </TouchableHighlight>
            </ScrollView>
        );

    }
}

const styles = StyleSheet.create({
    container: {
        paddingVertical:20,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#30396c',
    },
    welcome: {
        fontFamily: 'proxima-nova-regular',
        textAlign: 'center',
        margin: 10,
        color: '#d3d3d4',
        fontSize: 30,
        marginBottom:15
    },
    buttonText: {
        fontSize: 18,
        color: 'white',
        alignSelf: 'center'
    },
    button: {
        marginTop:10,
        height: 50,
        backgroundColor: '#76b3dc',
        borderColor: '#76b3dc',
        borderWidth: 1,
        borderRadius: 8,
        marginBottom: 10,
        justifyContent: 'center',
        minWidth: '80%'
    }
});
