import React  from "react";
import { View, SafeAreaView, StyleSheet, Image, ScrollView ,ActivityIndicator,Modal} from "react-native";
import { TextInput, Text, Button } from "react-native-paper";
import axios from 'axios'

export default function Login({navigation}) {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [Loading , setLoading] = React.useState(false);


  async function checkuser(){

    setLoading(true)
    let res = await axios.post('https://watthepleela.herokuapp.com/get_token',{Username:username,Password:password})
    setLoading(false)

    if(res.data.Error == "Invalid Username or Password"){
      alert(res.data.Error)
      

    }
    else{
      navigation.navigate('Manage',{token : res.data.access_token})
      
      
      
    }

    
  }



  return (
    <View style={styles.container}>

<Modal
        animationType="slide"
        transparent={true}
        visible={Loading}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
          <ActivityIndicator size="large" color="#da723c"/>
          </View>
        </View>
      </Modal>

      
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
        onPress={() => checkuser()}
      >
        LOGIN
        
      </Button>
    </View>
  );
};


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
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
}
}
);
