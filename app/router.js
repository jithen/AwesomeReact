import React, { Component } from 'react';
import {StatusBar, Platform, StyleSheet, Text, View} from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import { Dimensions } from 'react-native';
import {FlatList} from 'react-native';
import LoginScreen from './screens/LoginScreen';
import LaunchScreen from './screens/LaunchScreen';
import Register from './screens/Register';
import Home from './screens/Home';

const RootStack = createStackNavigator(
  { LaunchScreen , LoginScreen, Register, Home },
  { initialRouteName: 'LaunchScreen' }
);

const AppContainer = createAppContainer(RootStack);

export default AppContainer;

export const createRootNavigator = () => {
  return AppContainer;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
});
