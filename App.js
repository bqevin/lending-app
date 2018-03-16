import React from 'react';
import { Font } from 'expo';

import Login from "./components/pages/Login";

export default class App extends React.Component {

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
        <Login readiness={this.state.isReady}/>
    );

  }
}