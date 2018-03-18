import React from "react";
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity
} from 'react-native';
import {
    Header,
    Tile,
    Card
} from 'react-native-elements';

export default class Home extends React.Component {
    render() {
        return(
            <View>
                <Header
                    statusBarProps={{ barStyle: 'light-content',backgroundColor: "#4F6D7A" }}
                    outerContainerStyles={{ backgroundColor: '#30396c' }}
                    leftComponent={{ icon: 'menu', color: '#fff'}}
                    centerComponent={{ text: 'LENDING ASSISTANT', style: { color: '#76b3dc',fontWeight:'600',fontSize: 15,fontFamily: 'proxima-nova-regular' } }}
                />
                <Tile
                    style={{paddingTop: '0', paddingBottom: '0'}}
                    imageSrc={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRinc8uAMmTqS4J4aVvifVMtNlIXxest8WB0o-Wwe2q-s7bxwC04Q'}}
                    title="Hi Kevin, Good morning"
                    featured
                    caption="Some Caption Text"
                />
                <Card>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('LoanStatus')}>
                        <Text style={styles.card}>
                            Check my Status
                        </Text>
                    </TouchableOpacity>
                </Card>

                <Card>
                    <TouchableOpacity  onPress={() => console.log('Apply for a loan')}>
                        <Text style={styles.card}>
                            Apply for loan
                        </Text>
                    </TouchableOpacity>
                </Card>
                <Card>
                    <TouchableOpacity onPress={() => console.log('Increase my Rating')}>
                        <Text style={styles.card}>
                            Increase my Ratings
                        </Text>
                    </TouchableOpacity>
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
        backgroundColor: '#30396c',
    },
    card: {
        color:'#8b91a3',
        fontWeight: '400',
        justifyContent: 'center',
        marginBottom: 5,
        fontFamily:'proxima-nova-regular',
        alignItems:'center',
        fontSize: 20

    }
});
