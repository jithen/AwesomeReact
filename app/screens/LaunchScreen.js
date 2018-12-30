import React, { Component } from 'react';
import { StatusBar, Platform, Button, TextInput, Image, StyleSheet, Text, View, Dimensions } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import { Icon } from 'react-native-elements';
import Spinner from './spinner';
import LoginScreen from './LoginScreen';
import Register from './Register';

var width = Dimensions.get('window').width;
var height = Dimensions.get('window').height;

export default class LaunchScreen extends Component {
  constructor(props) {
    super(props);
  }

  static navigationOptions = {
      title: 'Business Apps',
      header: null
  };

  _onSignUpPress = () => {
    const { navigate } = this.props.navigation;
     navigate('Register');
  };

  _onLoginPress = () => {
    return this.props.navigation.navigate('LoginScreen');
    // return RootStack;//createAppContainer(RootStack);
  };

  render() {
    const {navigate} = this.props.navigation;
    return (
          <View style={styles.container}>
            <Image source={require('../assets/logo.png')}
                           style={styles.thumbnail}
                           resizeMode="contain" />
            <View style={styles.signupButton}>
              <Button onPress={this._onSignUpPress} title="Sign Up" color="#FFFFFF"/>
            </View>
            <View style={styles.loginButton}>
              <Button onPress={() => this.props.navigation.navigate('LoginScreen')} title="Login" color="#FFFFFF"/>
            </View>
          </View>
      );
  }
}

const styles = StyleSheet.create ({
  container: {
    flex: 1,
  },
  signupButton: {
    backgroundColor: '#2E9298',
    width: 200,
    height: 60,
    marginLeft: 90,
    marginRight: 50,
    marginTop: 0,
    marginBottom: 10,
    borderRadius: 10,
    padding: 10,
  },
  loginButton: {
    backgroundColor: '#2E9298',
    width: 200,
    height: 60,
    marginLeft: 90,
    marginRight: 50,
    marginTop: 10,
    marginBottom: 100,
    borderRadius: 10,
    padding: 10,
  },
  thumbnail: {
    flex: 1,
    height: 160,
    width: 160,
    marginLeft: 105,
    marginRight: 50,
    marginBottom: 10
  }
});
