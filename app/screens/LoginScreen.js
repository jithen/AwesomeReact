import React, { Component } from 'react';
import { StatusBar, Platform, Button, TextInput, Image, StyleSheet, Text, View, Dimensions, TouchableOpacity } from 'react-native';
import { createStackNavigator, createAppContainer, NavigationActions } from 'react-navigation';
import { Icon } from 'react-native-elements';
import * as Keychain from 'react-native-keychain';
import Spinner from './spinner';

var width = Dimensions.get('window').width;
var height = Dimensions.get('window').height;

export default class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
    this.state = {
      isLoading: false
    }
  }

  static navigationOptions = {
      title: 'Business App',
  };

    onPressButton = () => {
      goBack(null);
    }

    // static navigationOptions = {
    //     title: 'Business App',
    //     headerLeft: (
    //     <TouchableOpacity
    //       onPress={this.onPressButton}
    //     >
    //       <Text>Click</Text>
    //     </TouchableOpacity>
    //   )
    // };

    static navigationOptions = ({navigation, screenProps}) => {
         return {
             title:'LOGIN',
             headerStyle:{ backgroundColor: '#ffffff'},
             headerTitleStyle:{fontSize:20},
             headerLeft:<TouchableOpacity onPress={()=>navigation.goBack()}>
                          <Image source={require('../assets/back.png')} style={{height: 20, width: 20,marginLeft:10,}}/>
                      </TouchableOpacity>
         }
      }

    // static navigationOptions = ({ navigation }) => {
    //   headerLeft: (
    //      title: 'Business App',
    //     <TouchableOpacity
    //       onPress={() => navigation.goBack(null)}
    //     >
    //       <Text>Back</Text>
    //     </TouchableOpacity>
    //   ),
    // };

  async loginService() {
    let url = 'https://jsonplaceholder.typicode.com/todos/1'

    try {
      let response = await fetch (url);
      if (response.status >= 200) {
        console.log("Success");
        return await response.json();
      }
    } catch(error) {
      console.log(error);
    }
  }

  async performLogin() {
    const credentials = await Keychain.getGenericPassword();
    console.log(credentials.username);

    await Keychain.setGenericPassword(this.state.username, this.state.password);
    let loginResponse = await this.loginService();
    console.log(loginResponse);
    this.setState ({
      isLoading: false
    });
    const { navigate } = this.props.navigation;
     navigate('Home');
  }

  _onPress = () => {
    this.setState ({
      isLoading: true
    });
    return this.performLogin();
  };

  render() {
    return (
          <View style={styles.container}>
            <Spinner
              isLoading={this.state.isLoading} />
            <Image source={require('../assets/logo.png')}
                           style={styles.thumbnail}
                           resizeMode="contain" />
            <TextInput style={styles.usernameTextInput} placeholder = "Username" onChangeText={(username) => this.setState({username: username})} value={this.state.text} />
            <TextInput style={styles.passwordTextInput} placeholder = "Password" secureTextEntry={true} onChangeText={(password) => this.setState({password: password})} value={this.state.text} />
            <View style={styles.buttonContainer}>
              <Button onPress={this._onPress} title="Login" color="#FFFFFF" accessibilityLabel="Tap on Me"/>
            </View>
          </View>
      );
  }
}

const styles = StyleSheet.create ({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    // backgroundColor: '#F5FCFF'
  },
  usernameTextInput: {
    height: 40,
    marginLeft: 50,
    marginRight:50,
    marginTop: 50,
    marginBottom: 10,
    textAlign: 'center',
    // borderColor: '#CBCBCD',
    // borderWidth: 1
    flexDirection: 'row',
    // textAlign: 'center',
    paddingHorizontal: 10,
    borderBottomWidth: 2,
    borderBottomColor: '#2E9298',
  },
  passwordTextInput: {
    height: 40,
    marginLeft: 50,
    marginRight:50,
    marginTop: 0,
    marginBottom: 20,
    textAlign: 'center',
    // borderColor: '#CBCBCD',
    // borderWidth: 1
    flexDirection: 'row',
    // textAlign: 'center',
    paddingHorizontal: 10,
    borderBottomWidth: 2,
    borderBottomColor: '#2E9298',
  },
  buttonContainer: {
    backgroundColor: '#2E9298',
    width: 200,
    height: 60,
    marginLeft: 90,
    marginRight: 50,
    marginTop: 0,
    marginBottom: 300,
    // marginLeft: 10,
    // marginRight: 10,
    // alignItems: 'center',
    // justifyContent: 'center',
    // // marginLeft: width - 180,
    borderRadius: 10,
    padding: 10,
    // shadowColor: '#000000',
    // shadowOffset: {
    //  width: 0,
    //  height: 3
    // },
    // shadowRadius: 10,
    // shadowOpacity: 0.25,
  },
  thumbnail: {
    flex: 1,
    height: 160,
    width: 160,
    marginLeft: 100,
    marginRight: 50,
    marginBottom: 10
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  }
});
