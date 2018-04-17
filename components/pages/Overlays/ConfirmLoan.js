import React from "react";
import { Text } from 'react-native';
import { Overlay } from 'react-native-elements';

export default class ConfirmLoan extends  React.Component {
    constructor(props){
        super(props)
        this.state = {
            isVisible: true
        }
    }
    render(){
        return(
        <Overlay
        isVisible={this.state.isVisible}
        windowBackgroundColor="rgba(255, 255, 255, .5)"
        overlayBackgroundColor="red"
        width="auto"
        height="auto"
        >
            <Text>This is a loans confirmation page!</Text>
        </Overlay>
        )
    }
}

