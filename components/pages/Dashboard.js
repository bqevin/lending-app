import React from 'react';
import { DrawerNavigator } from 'react-navigation';

import Home from "./Home";
import LoanStatus from "./LoanStatus";
import SideMenu from "./SideMenu";

const RootNavigation = DrawerNavigator(
    {
        Home: {screen: Home},
        LoanStatus: {screen: LoanStatus},
    },
    {
        contentComponent: SideMenu,
        drawerWidth: 300
    });
export default class Dashboard extends React.Component {
    render() {
        return <RootNavigation/>
    }
}

