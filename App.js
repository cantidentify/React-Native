import React, { useState, useEffect } from 'react';
import { View, Image, StyleSheet, TouchableOpacity, Animated, Text, Alert } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Camera } from 'expo-camera';
import * as Permissions from 'expo-permissions';


import  Home  from './screen/layout';
import Info from './screen/info';

let Stack = createStackNavigator()



function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home2!</Text>
    </View>
  );
}

function SettingsScreen() {

  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);

  
useEffect(() => {
  
  (async () => {
    const { status } = await Camera.requestPermissionsAsync();
    setHasPermission(status === 'granted');
  })();
}, [])


if (hasPermission === null) {
  return <View />;
}

if (hasPermission === false) {
  return <Text>No access to camera</Text>;
}


  return (

    
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <View>
      <Camera     style={{flex: 1,width:"100%"}}
    ref={(r) => {
    camera = r
    }}>
        <View>
          <TouchableOpacity
          style={{width:300,backgroundColor:"#ff55"}}
            onPress={() => {
              setType(
                type === Camera.Constants.Type.back
                  ? Camera.Constants.Type.front
                  : Camera.Constants.Type.back
              );
            }}>
            <Text> Flip </Text>
          </TouchableOpacity>
        </View>
      </Camera>
    </View>
    </View>
  );
}

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (


    <Tab.Navigator>
      <Tab.Screen name="หน้าหลัก" component={Home} />
      <Tab.Screen name="สถานที่" component={SettingsScreen} />
      <Tab.Screen name="ข่าวสาร" component={SettingsScreen} />
      <Tab.Screen name="ข้อมูลวัด" component={Info} />
    </Tab.Navigator>




  );
}

export default function App() {

 





  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>


  );
}
