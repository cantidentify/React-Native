import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  Modal,
  Button,
  TouchableOpacity,
  Image,
  ActivityIndicator,
  Alert,
} from "react-native";
import axios from "axios";
import { RadioButton } from "react-native-paper";
import CameraScreen from "./Camera";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faFileImage, faCameraRetro } from "@fortawesome/free-solid-svg-icons";
import { TextInput as PaperInput } from "react-native-paper";
import DocumentPicker from "react-native-document-picker";
import ImageResizer from "react-native-image-resizer";
import { SliderBox } from "react-native-image-slider-box";

var RNFS = require("react-native-fs");

export default function Manage({ route, navigation }) {
  const [token, setToken] = useState(route.params.token);
  const [Check, setCheck] = useState("1");
  const [showModal, setShowModal] = useState(false);
  const [showModal2, setShowModal2] = useState(false);
  const [singleImg, setsingleImg] = useState();
  const [title, settitle] = useState();
  const [detail, setdetail] = useState();
  const [loading, setloading] = useState(false);
  const [gallery, setgallery] = useState([]);
  const [cat, setcat] = useState();
  const [picname, setpicname] = useState();
  const [text,settext] = useState();
  const [header,setheader] = useState();
  const [newsid,setnewsid] = useState();

  const [removeid,setremoveid] = useState();

  const [removepic,setremovepic] = useState();
  const [albumname,setalbumname] = useState();




  const setModal = (props) => {
    setShowModal(props);
  };

  const setModal2 = (props) => {
    setShowModal2(props);
  };

  const Imageres = (props) => {
    setsingleImg(props);
  };

  const ImageGallery = (props) => {
    setgallery(gallery.concat([props]));
  };

  async function lookfile() {
    try {
      const res = await DocumentPicker.pick({
        type: [DocumentPicker.types.images],
      });

      ImageResizer.createResizedImage(res.uri, 400, 400, "JPEG", 50, 0)
        .then((resizedImageUri) => {
          RNFS.readFile(resizedImageUri.uri, "base64").then((res) => {
            setsingleImg(`data:image/jpg;base64,${res}`);
          });
        })
        .catch((err) => {});
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
      } else {
        throw err;
      }
    }
  }

  async function look_multiple_file() {
    try {
      const results = await DocumentPicker.pickMultiple({
        type: [DocumentPicker.types.images],
      });

      for (let res of results) {
        ImageResizer.createResizedImage(res.uri, 400, 400, "JPEG", 50, 0)
          .then((resizedImageUri) => {
            RNFS.readFile(resizedImageUri.uri, "base64").then((res) => {
              setgallery((gallery) => [
                ...gallery,
                `data:image/jpg;base64,${res}`,
              ]);
            });
          })
          .catch((err) => {
            console.log(err);
          });
      }
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
      } else {
        throw err;
      }
    }
  }

  async function uploadActivity() {
    setloading(true);

    try {
      let body = {
        Text: title,
        Img_uri: singleImg,
        Detail: detail,
      };

      let res = await axios.post(
        "https://watthepleela.herokuapp.com/event",
        body,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setloading(false);
      alert("ส่งข้อมูลเรียบร้อยแล้ว");
      setsingleImg(null);
      settitle("");
      setdetail("");
    } catch (e) {
      let status = e.message.split(" ")
      if(status[5]==401){
        alert("Token หมดอายุ")
        navigation.goBack()
        

      }
      else{
        alert("กรุณาตรวจสอบข้อมูล");
        
      }
      setloading(false);
    }
  }

  async function uploadGallery() {
    setloading(true);

    try {
      if (gallery.length > 1) {
        for (let i of gallery) {
          let body = {
            title: "ไม่ระบุ",
            Album: cat,
            Img_uri: i,
          };

          let res = await axios.post(
            "https://watthepleela.herokuapp.com/gallery",
            body,
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );
        }
      } else {
        let body = {
          title: picname,
          Album: cat,
          Img_uri: gallery[0],
        };

        let res = await axios.post(
          "https://watthepleela.herokuapp.com/gallery",
          body,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
      }

      setloading(false);
      alert("ส่งข้อมูลเรียบร้อยแล้ว");
      setgallery([]);
      setcat("");
      setpicname("");
    } catch (e) {
      let status = e.message.split(" ")
      if(status[5]==401){
        alert("Token หมดอายุ")
        navigation.goBack()
        

      }
      else{
        alert("กรุณาตรวจสอบข้อมูล");
        
      }
      setloading(false);
    }
  }

  function renderslider() {
    if (gallery.length > 0) {
      if (gallery.length > 1) {
        return (
          <SliderBox
            images={gallery}
            circleLoop
            sliderBoxHeight={200}
            dotColor={"#28527a"}
            ImageComponentStyle={{
              borderRadius: 15,
              width: "93%",
              marginTop: 5,
            }}
          />
        );
      } else {
        return (
          <Image
            style={{ width: "100%", height: 150 }}
            source={{ uri: gallery[0] }}
          />
        );
      }
    } else {
      return (
        <>
          <View>
            <TouchableOpacity onPress={() => setShowModal2(true)}>
              <FontAwesomeIcon icon={faCameraRetro} size={100} color="white" />
            </TouchableOpacity>
          </View>

          <View>
            <Text style={{ fontSize: 30, marginTop: 20, color: "white" }}>
              {" "}
              Or{" "}
            </Text>
          </View>

          <View>
            <TouchableOpacity onPress={() => look_multiple_file()}>
              <FontAwesomeIcon icon={faFileImage} size={100} color="white" />
            </TouchableOpacity>
          </View>
        </>
      );
    }
  }

  async function uploadNews(){

    setloading(true);

    try {
      let body = {
        Text: header,
        Detail: text,
        id:newsid
      };

      let res = await axios.post(
        "https://watthepleela.herokuapp.com/news",
        body,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (res.data.Status=="ID Already Exist"){
        setloading(false);
        alert("ID นี้มีอยู่แล้ว")
        
      }
      else{
        setloading(false);
        alert("ส่งข้อมูลเรียบร้อยแล้ว");
        settext("");
        setheader("");
        setnewsid("");

      }

    } catch (e) {
      
      let status = e.message.split(" ")
      if(status[5]==401){
        alert("Token หมดอายุ")
        navigation.goBack()
        

      }
      else{
        alert("กรุณาตรวจสอบข้อมูล");
        
      }
      setloading(false);
    }

  }

  async function DeleteNews(){

    Alert.alert(
      "คำเตือน",
      `ต้องการจะลบประกาศหมายเลข ${removeid} หรือไม่`,
      [
         {
        text:"Accept",
        onPress:async ()=>{
          setloading(true);

          try {
            let body = {
              id:removeid
            };
      
            let res = await axios({
              url:"https://watthepleela.herokuapp.com/news",
              method:'DELETE',
              data:body,
              headers:  { Authorization: `Bearer ${token}`}
            }
           
            )
      
              setloading(false);
              alert("ลบข้อมูลเรียบร้อยแล้ว");
              setremoveid("");
      
      
            
      
          } catch (e) {
            
            let status = e.message.split(" ")
            if(status[5]==401){
              alert("Token หมดอายุ")
              navigation.goBack()
              
      
            }
            else{
              alert("กรุณาตรวจสอบข้อมูล");
              console.log(e)
              
            }
            setloading(false);
          }
      
        }
          
          

        

        },
        {
          text: "Cancel",
          style: "cancel",
        },
     
      ],
      {
        cancelable: true,
      }
    );






  }

  async function DeletePic(){

    Alert.alert(
      "คำเตือน",
      `ต้องการจะลบรูปภาพชื่อ ${removepic} หรือไม่`,
      [
         {
        text:"Accept",
        onPress:async ()=>{
          setloading(true);

          try {
            let body = {
              title:removepic
            };
      
            let res = await axios({
              url:"https://watthepleela.herokuapp.com/gallery",
              method:'DELETE',
              data:body,
              headers:  { Authorization: `Bearer ${token}`}
            }
           
            )
      
              setloading(false);
              alert("ลบข้อมูลเรียบร้อยแล้ว");
              setremovepic("");
      
      
            
      
          } catch (e) {
            
            let status = e.message.split(" ")
            if(status[5]==401){
              alert("Token หมดอายุ")
              navigation.goBack()
              
      
            }
            else{
              alert("กรุณาตรวจสอบข้อมูล");
              console.log(e)
              
            }
            setloading(false);
          }
      
        }
          
          

        

        },
        {
          text: "Cancel",
          style: "cancel",
        },
     
      ],
      {
        cancelable: true,
      }
    );



  

  }


  async function DeleteAlbum(){

    

    Alert.alert(
      "คำเตือน",
      `ต้องการจะลบอัลบั้มชื่อ ${albumname} หรือไม่`,
      [
         {
        text:"Accept",
        onPress:async ()=>{
          setloading(true);

          try {
            let body = {
              Album:albumname
            };
      
            let res = await axios({
              url:"https://watthepleela.herokuapp.com/album",
              method:'DELETE',
              data:body,
              headers:  { Authorization: `Bearer ${token}`}
            }
           
            )
      
              setloading(false);
              alert("ลบข้อมูลเรียบร้อยแล้ว");
              setalbumname("");
      
      
            
      
          } catch (e) {
            
            let status = e.message.split(" ")
            if(status[5]==401){
              alert("Token หมดอายุ")
              navigation.goBack()
              
      
            }
            else{
              alert("กรุณาตรวจสอบข้อมูล");
              console.log(e)
              
            }
            setloading(false);
          }
      
        }
          
          

        

        },
        {
          text: "Cancel",
          style: "cancel",
        },
     
      ],
      {
        cancelable: true,
      }
    );



  

  }

  function randerchoice() {
    if (Check == 1) {
      return (
        <>
          <View
            style={{
              backgroundColor: "#85603f",
              flexDirection: "row",
              justifyContent: "center",
              padding: 20,
            }}
          >
            {singleImg ? (
              <Image
                style={{ width: "100%", height: 150 }}
                source={{ uri: singleImg }}
              />
            ) : (
              <>
                <View>
                  <TouchableOpacity onPress={() => setShowModal(true)}>
                    <FontAwesomeIcon
                      icon={faCameraRetro}
                      size={100}
                      color="white"
                    />
                  </TouchableOpacity>
                </View>

                <View>
                  <Text style={{ fontSize: 30, marginTop: 20, color: "white" }}>
                    {" "}
                    Or{" "}
                  </Text>
                </View>

                <View>
                  <TouchableOpacity onPress={() => lookfile()}>
                    <FontAwesomeIcon
                      icon={faFileImage}
                      size={100}
                      color="white"
                    />
                  </TouchableOpacity>
                </View>
              </>
            )}
          </View>
          {singleImg ? (
            <View>
              <Button
                title={"เปลี่ยนรูป"}
                color="#28527a"
                onPress={() => setsingleImg(null)}
              />
            </View>
          ) : null}

          <PaperInput
            label="หัวข้อ"
            value={title}
            style={{ marginTop: 10 }}
            onChangeText={(text) => settitle(text)}
          />
          <PaperInput
            label="ลายละเอียด"
            editable
            multiline
            style={{ marginTop: 10 }}
            value={detail}
            onChangeText={(text) => setdetail(text)}
          />

          <View style={{ marginTop: 10 }}>
            <Button
              color="#f0a500"
              title={"อัปโหลด"}
              onPress={() => uploadActivity()}
            />
          </View>
        </>
      );
    } else if (Check == 2) {
      return (
        <>
          <View
            style={{
              backgroundColor: "#85603f",
              flexDirection: "row",
              justifyContent: "center",
              padding: 20,
            }}
          >
            {renderslider()}
          </View>
          {gallery.length > 0 ? (
            <View>
              <Button
                title={"เปลี่ยนรูป"}
                color="#28527a"
                onPress={() => setgallery([])}
              />
            </View>
          ) : null}

          {gallery.length > 1 ? (
            <PaperInput
              label="หมวดหมู่"
              editable
              multiline
              style={{ marginTop: 10 }}
              value={cat}
              onChangeText={(text) => setcat(text)}
            />
          ) : (
            <>
              <PaperInput
                label="ชื่อรูปภาพ"
                value={picname}
                style={{ marginTop: 10 }}
                onChangeText={(text) => setpicname(text)}
              />
              <PaperInput
                label="หมวดหมู่"
                editable
                multiline
                style={{ marginTop: 10 }}
                value={cat}
                onChangeText={(text) => setcat(text)}
              />
            </>
          )}

          <View style={{ marginTop: 10 }}>
            <Button
              color="#f0a500"
              title={"อัปโหลด"}
              onPress={() => uploadGallery()}
            />
          </View>

          <PaperInput
          label="ชื่อรูป"
          editable
          multiline
          style={{ marginTop: 20 }}
          value={removepic}
          onChangeText={(text) => setremovepic(text)}
        />
          <View style={{ marginTop: 10 }}>
            <Button
              color="#aa2b1d"
              title={"ลบรูป"}
              onPress={() => DeletePic()}
            />
          </View>

          <PaperInput
          label="ชื่ออัลบั้ม"
          editable
          multiline
          style={{ marginTop: 20 }}
          value={albumname}
          onChangeText={(text) => setalbumname(text)}
        />
          <View style={{ marginTop: 10 }}>
            <Button
              color="#aa2b1d"
              title={"ลบอัลบั้ม"}
              onPress={() => DeleteAlbum()}
            />
          </View>
        </>
      );
    } else {
      return(
        <>
        <PaperInput
          label="ไอดี"
          value={newsid}
          style={{ marginTop: 10 }}
          onChangeText={(text) => setnewsid(text)}
        />
        <PaperInput
          label="หัวข้อ"
          editable
          style={{ marginTop: 10 }}
          value={header}
          onChangeText={(text) => setheader(text)}
        />

        <PaperInput
          label="เนื้อหา"
          editable
          multiline
          style={{ marginTop: 10 }}
          value={text}
          onChangeText={(text) => settext(text)}
        />
          <View style={{ marginTop: 10 }}>
            <Button
              color="#f0a500"
              title={"อัปโหลด"}
              onPress={() => uploadNews()}
            />
          </View>

          <PaperInput
          label="ไอดี"
          editable
          multiline
          style={{ marginTop: 20 }}
          value={removeid}
          onChangeText={(text) => setremoveid(text)}
        />
          <View style={{ marginTop: 10 }}>
            <Button
              color="#aa2b1d"
              title={"ลบประกาศ"}
              onPress={() => DeleteNews()}
            />
          </View>

      </>
      )


    }
  }

  return (
    <View style={styles.containner}>
      <Modal animationType="slide" transparent={true} visible={showModal}>
        <CameraScreen toAdmin={Imageres} showModal={setModal} />
      </Modal>

      <Modal animationType="slide" transparent={true} visible={showModal2}>
        <CameraScreen toAdmin={ImageGallery} showModal={setModal2} />
      </Modal>

      <Modal
        animationType="slide"
        transparent={true}
        visible={loading}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <ActivityIndicator size="large" color="#da723c" />
          </View>
        </View>
      </Modal>

      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <RadioButton
          value="1"
          status={Check === "1" ? "checked" : "unchecked"}
          onPress={() => setCheck("1")}
        />
        <Text>กิจกรรม</Text>

        <RadioButton
          value="2"
          status={Check === "2" ? "checked" : "unchecked"}
          onPress={() => setCheck("2")}
        />
        <Text>คลังภาพ</Text>

        <RadioButton
          value="3"
          status={Check === "3" ? "checked" : "unchecked"}
          onPress={() => setCheck("3")}
        />
        <Text>ประกาศ</Text>
      </View>

      {randerchoice()}
    </View>
  );
}

const styles = StyleSheet.create({
  containner: {
    flex: 1,
    marginVertical: 20,
    justifyContent: "center",
    marginHorizontal: 10,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
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
      height: 2,
    },
  },
});
