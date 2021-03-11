import React , {useEffect} from "react";
import { View, SafeAreaView, StyleSheet, Image, ScrollView } from "react-native";
import { TextInput, Text, Button } from "react-native-paper";
import axios from 'axios'

const Login = () => {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  
  useEffect(
    () => {


    },
    [],
  )

  async function login(){

    let res = await axios.post('https://watthepleela.herokuapp.com/get_token',{Username:username,Password:password})

    if(res.data.Error == "Invalid Username or Password"){
      alert(res.data.Error)

    }
    else{
      alert(res.data.access_token)
      
    }
    
  
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          style={styles.logoImage}
          source={require("../../asset/icon/admin2.png")}
        />
        <Text style={styles.headerText}>Admin System</Text>
      </View>
      <TextInput
        mode="outlined"
        style={{ width: "80%" }}
        label="Username"
        autoCapitalize="none"
        value={username}
        onChangeText={(username) => setUsername(username)}
      />
      <TextInput
        mode="outlined"
        style={{ width: "80%",marginTop:15 }}
        label="Password"
        value={password}
        autoCapitalize="none"
        onChangeText={(password) => setPassword(password)}
        secureTextEntry={true}
      />
      <Button
        labelStyle={{ padding:5 , fontWeight:'bold' ,color:'white'}}
        style={{ marginTop: 50, width: "80%", height: 50}}
        color='#64b5f6'
        mode="contained"
        onPress={() => login()}
      >
        LOGIN
      </Button>
    </View>
  );
};

const t = () => {
  const [text, setText] = React.useState("");

  return (
    <SafeAreaView styles={styles.container}>
      <View>
        <View>
          <View style={styles.header}>
            <Image
              style={styles.logoImage}
              source={require("../../asset/icon/admin2.png")}
            />
            <Text style={styles.headerText}>Admin System</Text>
          </View>
        </View>
        <View>
          <View styles={styles.input}>
            <TextInput
              mode="outlined"
              style={{ width: "80%" }}
              label="หัวข้อ"
              value={text}
              onChangeText={(text) => setHeader(text)}
            />
            <TextInput
              mode="outlined"
              style={{ width: "80%" }}
              label="หัวข้อ"
              value={text}
              onChangeText={(text) => setHeader(text)}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  content: {},
  header: {
    alignItems: "center",
  },
  headerText: {
    color: "#1e88e5",
    fontSize: 35,
    fontWeight: "bold",
    paddingVertical: 12,
  },
  logoImage: {
    height: 100,
    width: 100,
  },
  input: {
    marginTop: 50,
  },
});
