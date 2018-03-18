import React from "react";
import {
    StyleSheet,
    View,
    Text
} from 'react-native';
import { Constants } from 'expo';
import { Card } from 'react-native-elements';
import { Grid, Col, Row} from 'react-native-easy-grid';

export default class History extends React.Component {
    render() {
        return (
            <View>
                <Text style={styles.header}>
                    Details on all your loans
                </Text>
                <Card>
                    <Grid style={{paddingTop: 5, paddingBottom:15}}>
                        <Col>
                            <Text style={styles.colText}>Date Offered</Text>
                        </Col>
                        <Col>
                            <Text style={styles.colText}>Amount</Text>
                        </Col>
                        <Col>
                            <Text style={styles.colText}>Status</Text>
                        </Col>
                    </Grid>
                </Card>
                <Card>
                    <Grid style={{paddingTop: 10, paddingBottom:15}}>
                        <Col>
                            <Text>12/03/2018</Text>
                        </Col>
                        <Col>
                            <Text>10000</Text>
                        </Col>
                        <Col>
                            <Text>PAID</Text>
                        </Col>
                    </Grid>
                </Card>
                <Card>
                    <Grid style={{paddingTop: 10, paddingBottom:15}}>
                        <Col>
                            <Text>16/03/2018</Text>
                        </Col>
                        <Col>
                            <Text>4000</Text>
                        </Col>
                        <Col>
                            <Text>PAID</Text>
                        </Col>
                    </Grid>
                </Card>
                <Card>
                    <Grid style={{paddingTop: 10, paddingBottom:15}}>
                        <Col>
                            <Text>16/03/2018</Text>
                        </Col>
                        <Col>
                            <Text>4000</Text>
                        </Col>
                        <Col>
                            <Text>PAID</Text>
                        </Col>
                    </Grid>
                </Card>

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
    header: {
        fontFamily:'proxima-nova-light',
        padding: 15,
        textAlign: 'center',
        color: '#76b3dc',
        fontSize: 21,
        fontWeight: '400'
    },
    cols: {
        height: 200
    },
    colText: {
        fontWeight: '600'
    }
});