import React from "react";
import ParallaxScrollView from 'react-native-parallax-scroll-view';
import {
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native';
import {Avatar} from 'react-native-elements';
import { Container, Header, Content, Tab, Tabs } from 'native-base';
import Offer from "./Tabs/Offer";
import History from "./Tabs/History";
import Points from "./Tabs/Points";

export default class LoanStatus extends React.Component {
    render() {
        return(
            <View style={{flex:1}}>
                <ParallaxScrollView
                    backgroundColor="#30396c"
                    contentBackgroundColor="#30396c"
                    parallaxHeaderHeight={230}
                    // renderBackground={() => <Image source={{ uri: `https://placekitten.com/414/230`, width: window.width, height: 230 }}/>}
                    renderForeground={() => (
                        <View style={{ height: 230, flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                            <Avatar
                                large
                                rounded
                                title="LM"
                                activeOpacity={0.7}
                            />
                            <Text style={{fontSize:20,fontWeight:'600',fontFamily:'proxima-nova-regular',color: '#f7f7f7',margin: 10,}}>Lee Maina</Text>
                            <Text style={{fontSize:18,fontFamily:'proxima-nova-regular',color: '#f7f7f7',margin: 0,}}>Male, 29</Text>
                        </View>
                    )}>
                    <Container style={{marginBottom:100}}>
                        <Header hasTabs style={{backgroundColor:'#30396c', height:0}}/>
                        <Tabs initialPage={0}>
                            <Tab heading="Loan Offer" style={{backgroundColor:'#30396c'}}>
                                <Offer/>
                            </Tab>
                            <Tab heading="History" style={{backgroundColor:'#30396c'}}>
                                <History/>
                            </Tab>
                            <Tab heading="Points" style={{backgroundColor:'#30396c'}}>
                                <Points/>
                            </Tab>
                        </Tabs>
                    </Container>
                </ParallaxScrollView>
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
        height: 500
    },
});