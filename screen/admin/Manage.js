import React, { useState } from 'react'
import {Text, View ,StyleSheet,Modal,Button,TouchableOpacity,Image,ActivityIndicator} from 'react-native'
import axios from 'axios'
import { RadioButton } from 'react-native-paper';
import CameraScreen from './Camera'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faFileImage ,faCameraRetro } from '@fortawesome/free-solid-svg-icons'
import {TextInput as PaperInput } from 'react-native-paper';
import DocumentPicker from 'react-native-document-picker';
var RNFS = require('react-native-fs')

import {App as Activity} from '../user/Activity'

export default function Manage({route,navigation}) {

    const [token , setToken] = useState(route.params.token)
    const [Check , setCheck] = useState("1")
    const [showModal,setShowModal] = useState(false)
    const [singleImg , setsingleImg] = useState()
    const [title,settitle] = useState()
    const [detail,setdetail] = useState()
    const [loading , setloading] = useState(false)

    const setModal = (props)=>{
        setShowModal(props)
    }

    const Imageres = (props) =>{
        setsingleImg(props)
    }


    async function lookfile(){
        try {
        
          const res = await DocumentPicker.pick({
            type: [DocumentPicker.types.images],
          });
    
      
            console.log(
              res.uri,
              res.type, 
              res.name,
              res.size
            );
    
            RNFS.readFile(res.uri, "base64").then((res) => {
                setsingleImg(`data:image/jpg;base64,${res}`);
              
            });
  
            
      
    
        } catch (err) {
          if (DocumentPicker.isCancel(err)) {
          } else {
            throw err;
          }
        }
      }

      async function uploadActivity(){

        setloading(true)
        console.log(token)

       
        try {

            let body = {
                "Text": title,
                "Img_uri": singleImg,
                "Detail": detail,
          }

            let res = await axios.post("https://watthepleela.herokuapp.com/event",body,{
            headers: {
              "Authorization" : `Bearer ${token}`
            },
          })
        setloading(false)
        alert("ส่งข้อมูลเรียบร้อยแล้ว")
        setsingleImg(null)
        settitle("")
        setdetail("")
        

        

        }

        catch(e){
            alert("กรุณาใส่ข้อความ / ตรวจสอบข้อมูล")

        }


      }

    return (

        
        <View style={styles.containner}>




<Modal
        animationType="slide"
        transparent={true}
        visible={showModal}
      >
          <CameraScreen toAdmin={Imageres} showModal={setModal}/>

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
          <ActivityIndicator size="large" color="#da723c"/>
          </View>
        </View>
      </Modal>




            <View style={{flexDirection:'row' ,alignItems:'center'}}>
                <RadioButton
        value="1"
        status={ Check === '1' ? 'checked' : 'unchecked' }
        onPress={() => setCheck('1')}
      /> 
      <Text>กิจกรรม</Text>

                <RadioButton
        value="2"
        status={ Check === '2' ? 'checked' : 'unchecked' }
        onPress={() => setCheck('2')}
      /> 
      <Text>คลังภาพ</Text>

        </View>
    
            {Check==1? 
            <>

            <View style={{backgroundColor:'#85603f',flexDirection:'row',justifyContent:'center',padding:20}}>
                {singleImg?<Image style={{width:'100%',height:150}} source={{uri:singleImg}}/>
                
                :  
                 <>     
                  <View>
                    <TouchableOpacity onPress={()=>setShowModal(true)}>
                        <FontAwesomeIcon icon={faCameraRetro} size={100} color='white'/> 
                    </TouchableOpacity>
                </View>

             
                <View>
                    <Text style={{fontSize:30,marginTop:20,color:'white'}}> Or </Text>
                </View>
            
                <View>
                    <TouchableOpacity onPress={()=>lookfile()}>
                        <FontAwesomeIcon icon={faFileImage} size={100} color='white' /> 
                    </TouchableOpacity>
                </View>
                </>
                
                }
     

            </View>
            {singleImg?<View >
            <Button title={"เปลี่ยนรูป"} color='#28527a' onPress={()=>setsingleImg(null)}/>
            </View>:null}
          

            
             <PaperInput
                label="หัวข้อ"
                value={title}
                style={{marginTop:10}}
               
                onChangeText={text => settitle(text)}
              />
              <PaperInput
              label="ลายละเอียด"
              editable
              multiline
              style={{marginTop:10}}
              value={detail}
              onChangeText={text => setdetail(text)}
            />
            
            <View style={{marginTop:10}}>
            <Button color='#f0a500' title={"อัปโหลด"} onPress={()=>uploadActivity()}/>
            </View>
            


            </>
            :   
            <View style={{backgroundColor:'#dddddd',flexDirection:'row',justifyContent:'center',padding:20}}>
            <View>
                <TouchableOpacity onPress={()=>setShowModal(true)}>
                    <FontAwesomeIcon icon={faCameraRetro} size={100} /> 
                </TouchableOpacity>
            </View>

         
            <View>
                <Text style={{fontSize:30,marginTop:20}}> Or </Text>
            </View>
        
            <View>
                <TouchableOpacity onPress={()=>lookfile()}>
                    <FontAwesomeIcon icon={faFileImage} size={100} /> 
                </TouchableOpacity>
            </View>

        </View>
        
        }

            
         



      


            
        </View>
    )
}

const styles = StyleSheet.create({
    containner : {
        flex:1,
        marginVertical:20,
        justifyContent:'center',
        marginHorizontal:10
    },  centeredView: {
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
    

)



