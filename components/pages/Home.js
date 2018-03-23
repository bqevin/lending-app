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
        "Money is the opposite of the weather. Nobody talks about it, but everybody does something about it. – Rebecca Johnson", 
        "The safest way to double your money is to fold it over and put it in your pocket. – Kin Hubbard",
        "Money is not the most important thing in the world. Love is. Fortunately, I love money. – Jackie Mason",
        "Money is better than poverty, if only for financial reasons. – Woody Allen",
        "Money is not the most important thing in the world. Love is. Fortunately, I love money. – Jackie Mason",
        "Money is better than poverty, if only for financial reasons. – Woody Allen",
        "Money is like a sixth sense – and you can't make use of the other five without it. – William Somerset Maugha"
      ],
      backgroundImages: {
        morning: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbsIo24trDWRJnvGxevNPTuXlVu4HDIRaViBBGneeQtOENVqXc",
        day: "http://cakta.com/data/out/124/403555365-sunny-day.jpg",
        evening: "https://4.bp.blogspot.com/-F7g8AIcFnxo/WLfhEXjKB5I/AAAAAAAACRI/pMZaKjXvJ4YpKcmWwke1hhXGO9SWsihUACLcB/s1600/Good%2Bevening%2Bsms1.JPG",
        night : "http://iliketowastemytime.com/sites/default/files/night-wallpaper.jpg"
      },
      tipText: undefined,
      greeting: '',
      displayImage:''
    };
  }

  captionText(){
    let tipText = this.state.tips[Math.floor(Math.random()*this.state.tips.length)];
    return this.setState({ tipText});
  }
  systemGreetings(){
     let greeting, today;
     today = new Date().getHours();
     if (today < 12) {
       greeting = 'Good Morning';
       this.setState({displayImage: this.state.backgroundImages.morning})
      }
      if (today >= 12 && today < 16) {
        greeting = 'Good Afternoon';
        this.setState({displayImage: this.state.backgroundImages.day})
      } else  if (today >= 16 && today < 19) {
        greeting = 'Good Evening';
        this.setState({displayImage: this.state.backgroundImages.evening})
      }  else if (today >= 19) {
        greeting = 'Good Night';
        this.setState({displayImage: this.state.backgroundImages.night})
      }
    return this.setState({greeting });
  }
  componentWillMount(){
    this.captionText();
    this.systemGreetings();
    
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
              height="auto"
              imageSrc={{ uri: this.state.displayImage }} 
              title={"Hi Kevin, "+this.state.greeting} featured 
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
