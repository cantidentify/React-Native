import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";


import Home from "./screen/Home";
import Info from "./screen/Info";
import OtherMenu from "./screen/OtherMenu";


const Tab = createBottomTabNavigator();

const HomeStack = createStackNavigator();
const LocationStack = createStackNavigator();
const NewsStack = createStackNavigator();
const InformationStack = createStackNavigator();
const OtherMenuStack = createStackNavigator();


const BottonTab = () => (
  <Tab.Navigator>
    <Tab.Screen name="Home" component={HomeStackScreen} options={{title:'หน้าหลัก'}} />
    <Tab.Screen name="Location" component={LocationStackScreen} options={{title:'แผนที่'}} />
    <Tab.Screen name="News" component={NewsStackScreen} options={{title:'ข่าวสาร'}} />
    <Tab.Screen name="Info" component={InfoStackScreen} options={{title:'ข้อมูลวัด'}} />
    <Tab.Screen name="OtherMenu" component={OtherMenuScreen} options={{title:'เมนูอื่นๆ'}} />
  </Tab.Navigator>
)

const HomeStackScreen = () =>(
  <HomeStack.Navigator>
    <HomeStack.Screen name="Home" component={Home} options={{title:'วัดเทพลีลาพระอารามหลวง'}} />
    <HomeStack.Screen name="Info" component={Info} />
  </HomeStack.Navigator>
)

const LocationStackScreen = () =>(
  <LocationStack.Navigator>
    <LocationStack.Screen name="Location" component={Info} options={{title:'แผนที่'}}/>
  </LocationStack.Navigator>
)

const NewsStackScreen = () =>(
  <NewsStack.Navigator>
    <NewsStack.Screen name="News" component={Info} options={{title:'ข่าวสาร'}}/>
  </NewsStack.Navigator>
)

const InfoStackScreen = () =>(
  <InformationStack.Navigator>
    <InformationStack.Screen name="Info" component={Info} options={{title:'ข้อมูลวัด'}}/>
  </InformationStack.Navigator>
)

const OtherMenuScreen = () =>(
  <OtherMenuStack.Navigator>
    <OtherMenuStack.Screen name="OtherMenu" component={OtherMenu} options={{title:'เมนูอื่นๆ'}}/>
  </OtherMenuStack.Navigator>
)


export default function App() {
  return (
    <NavigationContainer>
      <BottonTab/>
    </NavigationContainer>
  );
}
