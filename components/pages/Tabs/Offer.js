import React from "react";
import {
    StyleSheet,
    View,
    Text
} from 'react-native';
import { Constants } from 'expo';
import { Card, ButtonGroup, Button, Slider } from 'react-native-elements';
import { Grid, Col} from 'react-native-easy-grid';

const component1 = () => <Text>One Day</Text>;
const component2 = () => <Text>One Week</Text>;
const component3 = () => <Text>One Month</Text>;

export default class Offer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value : 1000,
            minValue:1000,
            maxValue:50000,
            selectedAmt: 0,
            selectedTerm:0
        };
        this.updateIndex = this.updateIndex.bind(this);
        this.updateAmt = this.updateAmt.bind(this);
        this.updateTerm = this.updateTerm.bind(this);
    }
    updateAmt (selectedAmt) {
        this.setState({selectedAmt})
    }
    updateTerm (selectedTerm) {
        this.setState({selectedTerm})
    }
    updateIndex (selectedIndex) {
        this.setState({selectedIndex})
    }

    render() {
        const buttons = [{ element: component1 }, { element: component2 }, { element: component3 }];
        const loans = ['1000', '2000', '3000'];
        const {  selectedAmt, selectedTerm } = this.state;
        return (
            <View>
                <View style={{flex: 1, alignItems: 'stretch', justifyContent: 'center', marginTop:80}}>
                    <Slider
                        style={{marginLeft: 20, paddingRight: 20}}
                        minimumValue={this.state.minValue}
                        maximumValue={this.state.maxValue}
                        step={this.state.minValue}
                        value={this.state.value}
                        minimumTrackTintColor = '#80cb84'
                        maximumTrackTinkColor = '#80cb84'
                        thumbTintColor = '#80cb84'
                        onValueChange={(value) => this.setState({value})} />
                    <Text style={{fontFamily:'proxima-nova-light',color:'#80cb84',textAlign: 'center', marginBottom: 70, fontSize: 25, fontWeight: '400'}}>
                        Current Amount: {this.state.value}
                        </Text>
                </View>
                <Card>
                    <Text style={styles.header}>
                        AMOUNT
                    </Text>
                    <ButtonGroup
                        onPress={this.updateAmt}
                        selectedIndex={selectedAmt}
                        buttons={loans}
                        containerStyle={{height: 50}}/>
                </Card>
                <Card>
                    <Text style={styles.header}>
                        PAYMENT TERMS
                    </Text>
                    <ButtonGroup
                        onPress={this.updateTerm}
                        selectedIndex={selectedTerm}
                        buttons={buttons}
                        containerStyle={{height: 40}} />
                    <Text style={styles.welcome}>
                        The quicker you pay, less interest you pay
                    </Text>
                </Card>

                <Card>
                    <View>
                        <Grid style={{paddingTop: 10, paddingBottom:10}}>
                            <Col style={{ height: 200, borderEndWidth:1,alignItems: 'center' }}>
                                <Text>Amount</Text>
                                <Text>1000</Text>
                            </Col>
                            <Col style={{ height: 200, borderEndWidth:1,alignItems: 'center' }}>
                                <Text>Amount</Text>
                                <Text>50</Text>
                            </Col>
                            <Col style={{ height: 200, alignItems: 'center' }}>
                                <Text>Balance</Text>
                                <Text>1050</Text>
                            </Col>
                        </Grid>
                    </View>
                    <Text style={{textAlign: 'center', margin: 10, color: '#333333', fontSize: 18}}>
                    </Text>
                </Card>
                <Card>
                    <Text style={{textAlign: 'center',  color: '#333333', fontSize: 18, fontWeight:'bold'}}>
                        Due Date: 01/03/2018
                    </Text>
                </Card>
                <Button
                    icon={{name: 'send'}}
                    backgroundColor='#80cb84'
                    fontFamily='proxima-nova-regular'
                    buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                    title='SEND LOAN' />
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f7f7f7',
        paddingTop: Constants.statusBarHeight,
    },
    welcome: {
        fontFamily: 'proxima-nova-regular',
        textAlign: 'center',
        margin: 10,
        color: '#333333',
        fontSize: 18,
        marginBottom:35
    },
    header: {
        fontFamily:'proxima-nova-light',
        textAlign: 'left',
        color: '#76b3dc',
        fontSize: 18,
        fontWeight: '400'
    }
});