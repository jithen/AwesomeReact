import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  PixelRatio,
  Image,
  Dimensions
} from "react-native";
import { Container, Header, Content } from "native-base";
import GridView from "react-native-super-grid";

var width = Dimensions.get('window').width;

const buttons = [
  {
name: "Access Management",
image: require("../assets/accessManagement.png"),
key: 1
  },
  {
name: "Inventory",
image: require("../assets/inventory.png"),
key: 2
  },
  {
name: "Customer Info",
image: require("../assets/customerInfo.png"),
key: 3
  },
  {
name: "Product Info",
image: require("../assets/productInfo.png"),
key: 4
  },
  {
name: "Customer Quotes",
image: require("../assets/customerQuotes.png"),
key: 4
  }
];

export default class Home extends Component {

  constructor(props) {
    super(props);
  }

  static navigationOptions = ({navigation, screenProps}) => {
       return {
           title:'Dashboard',
           headerStyle:{ backgroundColor: '#ffffff'},
           headerTitleStyle:{fontSize:20},
           headerLeft:<TouchableOpacity onPress={()=>navigation.goBack()}>
                        <Image source={require('../assets/back.png')} style={{height: 20, width: 20,marginLeft:10,}}/>
                    </TouchableOpacity>
       }
    }

  onPress(){

  }
  render() {
    return (
      <Container style={styles.container}>
        <Content contentContainerStyle={styles.contentContainerStyle}>
          <GridView
            itemDimension={width/3}
            itemsPerRow={2}
            items={buttons}
            renderItem={item => (
              <View style={styles.gridCompenentContainer}>
                <TouchableOpacity
                  onPress={this.onPress.bind(this)}
                  activeOpacity={0.8}
                  style={styles.touchView}
                >
                  <Image
                    style={{ width: 100, height: 100 }}
                    source={item.image}
                  />
                </TouchableOpacity>
                <View style={styles.textView}>
                  <Text style={styles.text}>{item.name} </Text>
                </View>
              </View>
            )}
          />
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    //backgroundColor: "#fff"
  },
  contentContainerStyle: {
    //backgroundColor: "#fff",
    justifyContent: "center"
  },
  gridCompenentContainer: {
    width: 160,
    height: 140,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },
  touchView: {
    width: 80,
    justifyContent: "center",
    alignItems: "center",
    height: 80,
    borderRadius: 40,
    //backgroundColor: "#0099cc"
  },
  textView: {
    width: 140,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    width: 140,
    fontSize: 12,
    textAlign: "center",
    color: "#0099cc",
    fontWeight: 'bold',
    fontSize: 16,
  }
});
