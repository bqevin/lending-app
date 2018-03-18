import React from 'react';
import t from 'tcomb-form-native';
import _ from 'lodash';
import {
    StyleSheet,
    Text,
    View,
    StatusBar,
    TouchableHighlight,
    Image
} from 'react-native';

import Register from "./Register";


const Form = t.form.Form;

// clone the default stylesheet
const stylesheet = _.cloneDeep(t.form.Form.stylesheet);

// overriding the form styling
stylesheet.textbox.normal.minWidth = '80%';
stylesheet.textbox.normal.color = '#fff';
stylesheet.controlLabel.normal.fontFamily = 'proxima-nova-light';
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


const User = t.struct({
    email: t.String,
    pin: t.Number,
});

const options = {
    auto: 'none',
    stylesheet: stylesheet,
    fields: {
        email: {
            placeholder: 'Your email address',
            error: 'Insert a valid email'
        },
        pin: {
            placeholder: 'Enter PIN',
        },
    },
};

export default class Login extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            value: {
                email: '',
                pin: ''
            }
        }
    }

    handleSubmit () {
        const value = this._loginform.getValue();
        console.log('value: ', value);
    }

    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.container}>
                <StatusBar
                    barStyle="light-content"
                    backgroundColor="#4F6D7A"
                />

                <Image source={require('../../assets/wp.png')} style={{width: 100, height: 100}} />

                <Text style={styles.welcome}>
                    Login to Lending App!
                </Text>

                <Form
                    ref={c => this._loginform = c}
                    type={User}
                    options={options}/>

                <TouchableHighlight style={styles.button} onPress={() => {this.handleSubmit; navigate('Dashboard'); }}  underlayColor='#76b3dc'>
                    <Text style={styles.buttonText}>SIGN IN</Text>
                </TouchableHighlight>

                <Text style={styles.instructions}
                      onPress={() => navigate('Register')}>
                    Create an account
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
        marginBottom:15
    },
    instructions:{
        color:'#d3d3d4',
        marginTop: 5,
        fontSize: 16
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
