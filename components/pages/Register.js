import React from 'react';
import { Font } from 'expo';
import t from 'tcomb-form-native';
import _ from 'lodash';
import {
    StyleSheet,
    Text,
    View,
    StatusBar
} from 'react-native';

const Form = t.form.Form;
// clone the default stylesheet
const stylesheet = _.cloneDeep(t.form.Form.stylesheet);

// overriding the form styling
stylesheet.textbox.normal.minWidth = '80%';
stylesheet.textbox.normal.color = '#fff';

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
    identication: t.Number,
    pin: t.Number,
    confirmPin: t.Number,
    terms: t.Boolean,
});

const options = {
    auto: 'none',
    fields: {
        gender: {
            label: 'You gender please',
        },
        terms: {
            label: 'Agree to terms and conditions',
        },
    },
};

export default class Register extends React.Component {

    render() {

        return (
            <View style={styles.container}>
                <StatusBar
                    barStyle="light-content"
                    backgroundColor="#4F6D7A"
                />
                <Form
                    ref={c => this._registerform = c}
                    type={User}
                    options={options}/>

                <TouchableHighlight style={styles.button} onPress={this.handleSubmit} underlayColor='#99d9f4'>
                    <Text style={styles.buttonText}>Create Account</Text>
                </TouchableHighlight>

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
    instructions: {
        textAlign: 'center',
        color: '#f7f7f7',
        marginBottom: 5,
    },
});
