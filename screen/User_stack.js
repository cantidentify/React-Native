import React from "react";

import { Button, Image, StyleSheet } from "react-native";

import Icon from "react-native-vector-icons/FontAwesome5";

import { NavigationContainer } from "@react-navigation/native";
import {
  createStackNavigator,
  CardStyleInterpolators,
} from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Home from "./user/Home";
import Location from "./user/Location";
import Activity from "./user/Activity";
import Info from "./user/Info";
import OtherMenu from "./user/OtherMenu";
import SlideShow from "./user/SlideShow";
import Gallerry from "./user/Gallery";

const Tab = createBottomTabNavigator();

const Stack = createStackNavigator();

const HomeStack = createStackNavigator();
const LocationStack = createStackNavigator();
const NewsStack = createStackNavigator();
const InformationStack = createStackNavigator();
const OtherMenuStack = createStackNavigator();

const BottonTab = () => (
  <Stack.Navigator
    screenOptions={{
      cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
    }}
  >
    <Stack.Screen
      name="main"
      component={mainTab}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="Info"
      component={InfoStackScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="SlideShow"
      component={SlideShow}
      options={{ title: "Slide" }}
    />
  </Stack.Navigator>
);

const mainTab = () => (
  <Tab.Navigator
    initialRouteName="Home"
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color }) => {
        let source;
        if (route.name === "Home") {
          source = focused
            ? require("../asset/icon/house.png")
            : require("../asset/icon/house_grey.png");
        } else if (route.name === "Location") {
          source = focused
            ? require("../asset/icon/map.png")
            : require("../asset/icon/map_grey.png");
        } else if (route.name === "Activity") {
          source = focused
            ? require("../asset/icon/newspaper.png")
            : require("../asset/icon/newspaper_grey.png");
        } else if (route.name === "OtherMenu") {
          source = focused
            ? require("../asset/icon/menu.png")
            : require("../asset/icon/menu_grey.png");
        }
        return <Image style={styles.icon} source={source} />;
      },
    })}
    tabBarOptions={{
      activeTintColor: "tomato",
      inactiveTintColor: "gray",
    }}
  >
    <Tab.Screen
      name="Home"
      component={HomeStackScreen}
      options={{ title: "หน้าหลัก" }}
    />

    <Tab.Screen
      name="Location"
      component={LocationStackScreen}
      options={{ title: "แผนที่" }}
    />

    <Tab.Screen
      name="Activity"
      component={ActivityStackScreen}
      options={{ title: "ข่าวสาร" }}
    />

    <Tab.Screen
      name="OtherMenu"
      component={OtherMenuScreen}
      options={{ title: "เมนูอื่นๆ" }}
    />
  </Tab.Navigator>
);

const HomeStackScreen = () => (
  <HomeStack.Navigator
    screenOptions={{
      cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
    }}
  >
    <HomeStack.Screen
      name="Home"
      component={Home}
      options={{
        headerTitle: "วัดเทพลีลาพระอารามหลวง",
        headerTitleStyle: { alignSelf: "center" },
      }}
    />

    <HomeStack.Screen
      name="Gallerry"
      component={Gallerry}
      options={{
        headerTitle: "Gallerry",
        headerTitleStyle: { alignSelf: "center" },
      }}
    />

    {/* {<HomeStack.Screen name="Info" component={InfoStackScreen} options={{headerShown: false}} /> } */}
  </HomeStack.Navigator>
);

const LocationStackScreen = ({ navigation }) => (
  <LocationStack.Navigator
    initialRouteName="Location"
    screenOptions={{
      cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
    }}
  >
    <LocationStack.Screen
      name="Location"
      component={Location}
      options={{
        title: "แผนที่ภายในวัด",
        headerTitleStyle: { alignSelf: "center" },
        headerLeft: () => (
          <Button onPress={() => navigation.navigate("Home")} title="Home" />
        ),
        headerTitleContainerStyle: {
          left: 0, // THIS RIGHT HERE
        },
      }}
    />
  </LocationStack.Navigator>
);

const ActivityStackScreen = ({ navigation }) => (
  <NewsStack.Navigator
    screenOptions={{
      cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
    }}
  >
    <NewsStack.Screen
      name="Activity"
      component={Activity}
      options={{
        title: "ข่าวสารและกิจกรรมของวัด",
        headerTitleStyle: { alignSelf: "center" },
        headerLeft: () => (
          <Button onPress={() => navigation.navigate("Home")} title="Home" />
        ),
        headerTitleContainerStyle: {
          left: 5, // THIS RIGHT HERE
        },
      }}
    />
  </NewsStack.Navigator>
);

const InfoStackScreen = ({ navigation, route }) => (
  <InformationStack.Navigator
    screenOptions={{
      cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
    }}
  >
    <InformationStack.Screen
      name="Info"
      component={Info}
      options={{
        title: "ประวัติความเป็นมา",
        headerTitleStyle: { alignSelf: "center" },

        headerTitleContainerStyle: {
          left: 0, // THIS RIGHT HERE
        },
      }}
    />
  </InformationStack.Navigator>
);

const OtherMenuScreen = () => (
  <OtherMenuStack.Navigator
    screenOptions={{
      cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
    }}
  >
    <OtherMenuStack.Screen
      name="OtherMenu"
      component={OtherMenu}
      options={{
        title: "เมนูอื่นๆ",
        headerTitleStyle: { alignSelf: "center" },

        headerTitleContainerStyle: {
          left: 0, // THIS RIGHT HERE
        },
      }}
    />
    <OtherMenuStack.Screen
      name="Gallerry"
      component={Gallerry}
      options={{
        headerTitle: "Gallerry",
        headerTitleStyle: { alignSelf: "center" },
      }}
    />
    <OtherMenuStack.Screen
      name="ประวัติความเป็นมา"
      component={Info}
      options={{
        headerTitle: "Gallerry",
        headerTitleStyle: { alignSelf: "center" },
      }}
    />

    {/* <OtherMenuStack.Screen name="SlideShow" component={SlideShow} options={{title:'Slide'}}/> */}
  </OtherMenuStack.Navigator>
);

export default function App() {
  return (
    <NavigationContainer>
      <BottonTab />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  icon: {
    justifyContent: "center",
    height: 25,
    width: 25,
  },
});
