import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Image
} from "react-native";
import { TextInput, RadioButton, Button, Provider as PaperProvider } from "react-native-paper";
import DocumentPicker from "react-native-document-picker";
var RNFS = require("react-native-fs");

import { Ionicons,AntDesign } from "@expo/vector-icons";

const Seperator = () => <View style={styles.seperator} />;

const App = () => {
  const [newsType, setNewType] = React.useState(0);
  let [base64image, setbase64image] = useState();
  let [test, setTest] = useState();
  const [header, setHeader] = React.useState("");
  const [detail, setDetail] = React.useState("");
  const [errorInput, setErrInput] = React.useState(false);

  async function lookfile() {
    try {
      const res = await DocumentPicker.pick({
        type: [DocumentPicker.types.images],
      });
      console.log(res.uri, res.type, res.name, res.size);

      const split = res.uri.split("/");
      const name = split.pop();
      const inbox = split.pop();

      //console.log(res.size)
      //console.log(res.uri)
      RNFS.readFile(res.uri, "base64").then((res) => {
        setbase64image(`data:image/jpg;base64,${res}`);
        console.log(res);
      });
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
      } else {
        throw err;
      }
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.box}>
          {/* ///////////////// START เลือกประเทภ /////////////////////// */}
          <Text style={styles.title}>เลือกประเภท</Text>
          <View style={{ justifyContent: "center", flexDirection: "row" }}>
            <View style={{ flexDirection: "row" }}>
              <View style={{ justifyContent: "center" }}>
                <TouchableOpacity onPress={() => setNewType(0)}>
                  <Text style={styles.radioText}>ข่าวสาร</Text>
                </TouchableOpacity>
              </View>
              <RadioButton
                value="0"
                status={newsType === 0 ? "checked" : "unchecked"}
                onPress={() => setNewType(0)}
              />
            </View>

            <View style={{ flexDirection: "row", marginLeft: 10 }}>
              <View style={{ justifyContent: "center" }}>
                <TouchableOpacity onPress={() => setNewType(1)}>
                  <Text style={styles.radioText}>กิจกรรม</Text>
                </TouchableOpacity>
              </View>
              <RadioButton
                value="1"
                status={newsType === 1 ? "checked" : "unchecked"}
                onPress={() => setNewType(1)}
              />
            </View>

            <View style={{ flexDirection: "row", marginLeft: 10 }}>
              <View style={{ justifyContent: "center" }}>
                <TouchableOpacity onPress={() => setNewType(2)}>
                  <Text style={styles.radioText}>ประกาศ</Text>
                </TouchableOpacity>
              </View>
              <RadioButton
                value="2"
                status={newsType === 2 ? "checked" : "unchecked"}
                onPress={() => setNewType(2)}
              />
            </View>
          </View>
          {/* ///////////////// END เลือกประเทภ /////////////////////// */}
          <Seperator />
          {/* ///////////////// START เลือกรูปประกอบ /////////////////////// */}
          <Text style={styles.title}>เลือกรูปประกอบ</Text>
          <View style={{ height: 250, alignItems: "center" }}>
            <Text>{test}</Text>
            <Image
              style={{ width: "50%", height: "50%" }}
              source={{ uri: base64image }}
            />
          </View>
          <View style={{ marginBottom: 15 }}>
            <Button
              labelStyle={{ color: "white", fontWeight: "bold" }}
              color="#5DADE2"
              mode="contained"
              onPress={() => lookfile()}
            >
              Click me to pick File
            </Button>
          </View>
          {/* ///////////////// END เลือกรูปประกอบ /////////////////////// */}
          <Seperator />
          {/* ///////////////// START เขียนคำบรรยาย /////////////////////// */}
          <Text style={styles.title}>เขียนหัวข้อ</Text>
          <View>
            <TextInput
              mode="outlined"
              label="หัวข้อ"
              value={header}
              onChangeText={(header) => setHeader(header)}
              error={errorInput}
            />
          </View>
          {/* ///////////////// END เขียนคำบรรยาย /////////////////////// */}
          <Seperator />
          {/* ///////////////// START เขียนคำบรรยาย /////////////////////// */}
          <Text style={styles.title}>เขียนคำบรรยาย</Text>
          <View>
            <TextInput
              mode="outlined"
              label="คำบรรยาย"
              value={detail}
              onChangeText={(detail) => setDetail(detail)}
              multiline={true}
              numberOfLines={4}
              error={errorInput}
            />
          </View>
          {/* ///////////////// END เขียนคำบรรยาย /////////////////////// */}
          {/* ///////////////// START ปุ่ม /////////////////////// */}
          <View style={{height:50, backgroundColor:'white'}}>
          <View style={{ marginTop:10,flexDirection: "row",justifyContent:'flex-end',marginRight:5 }}>
            <Button
              style={{marginLeft:20}}
              mode="contained"
              onPress={() => console.log("Pressed")}
              color='#2ecc71'
              labelStyle={{ color: "white", fontWeight: "bold" }}
            >
              Post
            </Button>
          </View>
          </View>
          {/* ///////////////// END ปุ่ม /////////////////////// */}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent: "center",
    marginTop:10,
    backgroundColor: "#FFFFFF",
  },
  header: {
    height: 50,
    backgroundColor: "#00BF74",
    justifyContent: "center",
    alignItems: "center",
  },
  headerText: {
    fontSize: 18,
    color: "white",
    fontFamily: "",
    fontWeight: "bold",
  },
  box: {
    paddingTop: 5,
    marginBottom: 0,
    backgroundColor: "#FFFFFF",
    justifyContent: "center",
    marginHorizontal:10
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  radioText:{
    fontWeight:'bold',fontSize:13
  },
  imageBox: {
    backgroundColor: "#F0F0F0",
    height: 100,
    borderRadius: 7,
  },
  imageText: {
    margin: "auto",
    color: "#7CC5A8",
    fontSize: 25,
  },
  imageMap: {
    width: "100%",
    height: 240,
    backgroundColor: "black",
  },
  seeMoreBox: {
    marginTop: 5,
    borderRadius: 7,
  },
  seeMoreText: {
    paddingTop: 10,
    fontSize: 15,
    color: "#41A77F",
    marginBottom: 10,
  },
  seperator: {
    marginVertical: 8,
    borderBottomColor: "#00BF74",
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});

export default App;
