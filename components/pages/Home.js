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
  constructor(props) {
    super(props);
    this.state = {
      tips : [
        "The best things in life aren't things!", 
        "Most of the things your worry about in life never happens",
        "The future belongs to the few of us willing to get our hands dirty",
        "Work hard and be nice to people",
        "Those we meet change us forever",
        "Be happy for this moment. This moment is your life.",
        "Shutdown computer. Go outside meet someone",
        "I want to spend all my life getting out of debt with you"
      ],
      tipText: undefined
    };
  }
  componentWillMount(){
     let tipText;
     tipText = this.state.tips[Math.floor(Math.random()*this.state.tips.length)];
    this.setState({ tipText });
  
  }
    render() {
        return <View>
            <Header 
              statusBarProps={{ barStyle: "light-content", backgroundColor: "#4F6D7A" }}
              outerContainerStyles={{ backgroundColor: "#30396c" }}
              leftComponent={{ icon: "menu", color: "#fff" }} 
              centerComponent={{ text: "LENDING ASSISTANT", style: { color: "#76b3dc", fontWeight: "600", fontSize: 15, fontFamily: "proxima-nova-regular" } }} 
            />
            <Tile style={{ paddingTop: "0", paddingBottom: "0", height: "180" }} 
              imageSrc={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRinc8uAMmTqS4J4aVvifVMtNlIXxest8WB0o-Wwe2q-s7bxwC04Q" }} 
              title="Hi Kevin, Good morning" featured 
              caption={this.state.tipText} 
              imageContainerStyle={{ height: 180 }} 
            />
            <Card>
              <TouchableOpacity onPress={() => this.props.navigation.navigate("LoanStatus")}>
                <Text style={styles.card}>Check my Status</Text>
                <Text>Check how much you qualify for</Text>
              </TouchableOpacity>
            </Card>

            <Card>
              <TouchableOpacity onPress={() => console.log("Apply for a loan")}>
                <Text style={styles.card}>Apply for loan</Text>
                <Text>Get your loan now</Text>
              </TouchableOpacity>
            </Card>
            <Card>
              <TouchableOpacity onPress={() => console.log("Increase my Rating")}>
                <Text style={styles.card}>Increase my Ratings</Text>
                <Text>Improve your credit score &amp; earn points</Text>
              </TouchableOpacity> 
            </Card>
          </View>;
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#30396c"
  },
  card: {
    color: "#76b3dc",
    fontWeight: "400",
    justifyContent: "center",
    marginBottom: 5,
    fontFamily: "proxima-nova-regular",
    alignItems: "center",
    fontSize: 20
  }
});
