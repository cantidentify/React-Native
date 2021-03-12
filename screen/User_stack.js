import React from "react";

import { Button, Image, StyleSheet } from "react-native";
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
import Gallerry from "./user/Gallery";
import Login from "./admin/Login"
import Manage from "./admin/Manage"

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();


const ButtomTab = () => (
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
    tabBarOptions={({route})=>({
      visible: false,
      activeTintColor: "tomato",
      inactiveTintColor: "gray",
      style:{opacity: ()=>{if(route.name==="Admin"){return 0}}}
    })}
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
  <Stack.Navigator
    screenOptions={{
      cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
    }}
  >
    <Stack.Screen
      name="Home"
      component={Home}
      options={{
        headerTitle: "วัดเทพลีลาพระอารามหลวง",
        headerTitleStyle: { alignSelf: "center" }
      }}
    />

    <Stack.Screen
      name="Gallerry"
      component={Gallerry}
      options={{
        headerTitle: "Gallerry",
        headerTitleStyle: { alignSelf: "center" },
      }}
    />

<Stack.Screen
      name="Info"
      component={Info}
      options={{
        headerTitle: "Information",
        headerTitleStyle: { alignSelf: "center" },
      }}
    />


    {/* {<HomeStack.Screen name="Info" component={InfoStackScreen} options={{headerShown: false}} /> } */}
  </Stack.Navigator>
);

const LocationStackScreen = ({ navigation }) => (
  <Stack.Navigator
    initialRouteName="Location"
    screenOptions={{
      cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
    }}
  >
    <Stack.Screen
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
  </Stack.Navigator>
);

const ActivityStackScreen = ({ navigation }) => (
  <Stack.Navigator
    screenOptions={{
      cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
    }}
  >
    <Stack.Screen
      name="Activity"
      component={Activity}
      initialParams={{id:0}}
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
  </Stack.Navigator>
);


function OtherMenuScreen() {
  
  return( <Stack.Navigator
    screenOptions={{
      cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      
    }}
  >
    <Stack.Screen
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
    <Stack.Screen
      name="Gallerry"
      component={Gallerry}
      options={{
        headerTitle: "Gallerry",
        headerTitleStyle: { alignSelf: "center" },
      }}
    />
    <Stack.Screen
      name="ประวัติความเป็นมา"
      component={Info}
      options={{
        headerTitle: "Gallerry",
        headerTitleStyle: { alignSelf: "center" },
      }}
    />

  </Stack.Navigator>)
 
}



export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="Home" component={ButtomTab} options={{headerShown: false}} />
      <Stack.Screen name="Login" component={Login} options={{headerShown: false}}/>
      <Stack.Screen name="Manage" component={Manage} options={{headerShown: true}}/>
      
      {/* === Add Login Page === 
           Login then Navigate to Admin  And Send token */}

      </Stack.Navigator>
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
