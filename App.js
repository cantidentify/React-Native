import React from 'react';

import {Button, Image, StyleSheet} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';

import user_interface from './screen/User_stack';
import admin_interface from './screen/Admin_stack';

export default function App() {
  return (
    user_interface()
  );
}


