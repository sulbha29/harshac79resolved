import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Loginscreen from './screens/loginscreen';
import {AppTabnavigator} from './components/apptabnavigator'
import {createAppContainer,createSwitchNavigator} from 'react-navigation'
import {createBottomTabNavigator} from 'react-navigation-tabs'


export default function App() {
  return (
    <Appcontainer/>
  );
}
const switchNavigator = createSwitchNavigator({
  Loginscreen:{screen:Loginscreen},
  BottomTab:{screen:AppTabnavigator}
})

const Appcontainer = createAppContainer(switchNavigator)

