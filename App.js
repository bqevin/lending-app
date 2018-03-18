import React from 'react';
import { Font } from 'expo';
import { StackNavigator } from 'react-navigation';

import Login from "./components/pages/Login";
import Register from "./components/pages/Register";
import Dashboard from "./components/pages/Dashboard";

const RootStack = StackNavigator(
    {
        Login: {
            screen: Login,
        },
        Register: {
            screen: Register,
        },
        Dashboard: {
            screen: Dashboard,
        },
    },
    {
        initialRouteName: 'Login',
        headerMode: 'none',
    }
);

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
      return this.state.isReady ? <RootStack/> : null
  }
}