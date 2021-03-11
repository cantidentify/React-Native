import React from 'react'
import { View, Text, Button } from 'react-native'
import axios from 'axios'
import { Ionicons } from '@expo/vector-icons';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';

import { DrawerContent } from './admin/DrawerContent';

import Activity from './admin/Activity';
import Gallery from './admin/Gallery';
import UpdateActivity from './admin/UpdateActivity';
import Login from './admin/Login';

const Drawer = createDrawerNavigator();
const ActivityStack = createStackNavigator();
const GalleryStack = createStackNavigator();

const LoginStack = createStackNavigator();
const RootStack = createStackNavigator();

const LoginStackScreen = ( {navigation} ) => {
  return(
  <LoginStack.Navigator
    screenOptions={{
      cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      headerStyle: {
        backgroundColor: '#009387',
      },
        headerTintColor: '#fff',
        headerTitleStyle: {
        fontWeight: 'bold'
        }
    }}>
    <LoginStack.Screen
      name="Login"
      component={Login}
      options={{
        headerTitle: 'Login',
        headerTitleStyle: {alignSelf: 'center'},
        headerShown: false
      }}
    />

    {/* {<HomeStack.Screen name="Info" component={InfoStackScreen} options={{headerShown: false}} /> } */}
  </LoginStack.Navigator>
  )
}

const ActivityStackScreen = ( {navigation} ) => (
  <ActivityStack.Navigator
    screenOptions={{
      cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      headerStyle: {
        backgroundColor: '#009387',
      },
        headerTintColor: '#fff',
        headerTitleStyle: {
        fontWeight: 'bold'
        }
    }}>
    <ActivityStack.Screen
      name="Activity"
      component={Activity}
      options={{
        headerTitle: 'รายการข่าวสารกิจกรรม',
        headerTitleStyle: {alignSelf: 'center'},
        headerLeft: () => (
          <Ionicons.Button name="ios-menu" size={25} backgroundColor="#009387" onPress={() => navigation.openDrawer()}></Ionicons.Button>
        ),
        headerRight: () => (
          <View style={{justifyContent:'center'}}>
          <Ionicons.Button name="add-circle-outline" size={35} color="#ecf0f1" backgroundColor="#009387" onPress={() => navigation.navigate('UpdateActivity')}></Ionicons.Button>
          </View>
          )
      }}
    />

<ActivityStack.Screen
      name="UpdateActivity"
      component={UpdateActivity}
      options={{
        headerTitle: 'เพิ่มข่าวสารกิจกรรม',
        headerTitleStyle: {alignSelf: 'center'},
      }}
    />

    {/* {<HomeStack.Screen name="Info" component={InfoStackScreen} options={{headerShown: false}} /> } */}
  </ActivityStack.Navigator>
);

const GalleryStackScreen = ( {navigation} ) => (
  <GalleryStack.Navigator
    screenOptions={{
      cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      headerStyle: {
        backgroundColor: '#009387',
      },
        headerTintColor: '#fff',
        headerTitleStyle: {
        fontWeight: 'bold'
        }
    }}>
    <GalleryStack.Screen
      name="Gallery"
      component={Gallery}
      options={{
        headerTitle: 'อัปเดตคลังรูปภาพ',
        headerTitleStyle: {alignSelf: 'center'},
        headerLeft: () => (
          <Ionicons.Button name="ios-menu" size={25} backgroundColor="#009387" onPress={() => navigation.openDrawer()}></Ionicons.Button>
        )
      }}
    />

    {/* {<HomeStack.Screen name="Info" component={InfoStackScreen} options={{headerShown: false}} /> } */}
  </GalleryStack.Navigator>
);


export default function App() {

  const [userToken, setUserToken] = React.useState(null); 
  

  return (
      <>
      {userToken !== null? 
      <Drawer.Navigator initialRouteName="ActivityUpdate" drawerContent={props => <DrawerContent {...props} />}>
        <Drawer.Screen name="ActivityUpdate" component={ActivityStackScreen} />
        <Drawer.Screen name="GalleryUpdate" component={GalleryStackScreen} />
      </Drawer.Navigator>
      :
      <RootStack.Navigator headerMode='none'>
        <RootStack.Screen name="LoginStack" component={LoginStackScreen}/>
      </RootStack.Navigator>
      }
      </>
  );
}

