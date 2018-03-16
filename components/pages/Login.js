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

const Form = t.form.Form;

// clone the default stylesheet
const stylesheet = _.cloneDeep(t.form.Form.stylesheet);

// overriding the form styling
stylesheet.textbox.normal.minWidth = '80%';
stylesheet.textbox.normal.color = '#fff';


const User = t.struct({
    email: t.String,
    pin: t.Number,
});

const options = {
    auto: 'none',
    stylesheet: stylesheet,
    fields: {
        email: {
            placeholder: 'Your email address'
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
        return (
            <View style={styles.container}>
                <StatusBar
                    barStyle="light-content"
                    backgroundColor="#4F6D7A"
                />

                <Image source={require('../../assets/wp.png')} style={{width: 100, height: 100}} />

                {
                    this.props.readiness ? (
                        <Text style={styles.welcome}>
                            Welcome to Lending App!
                        </Text>
                    ):null
                }

                <Form
                    ref={c => this._loginform = c}
                    type={User}
                    options={options}/>

                <TouchableHighlight style={styles.button} onPress={this.handleSubmit} underlayColor='#76b3dc'>
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableHighlight>

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
        marginBottom:15
    },
    instructions:{
        color:'#d3d3d4'
    },
    buttonText: {
        fontSize: 18,
        color: 'white',
        alignSelf: 'center'
    },
    button: {
        height: 36,
        backgroundColor: '#76b3dc',
        borderColor: '#76b3dc',
        borderWidth: 1,
        borderRadius: 8,
        marginBottom: 10,
        justifyContent: 'center',
        minWidth: '80%'
    }
});
