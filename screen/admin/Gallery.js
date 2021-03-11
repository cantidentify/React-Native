import React ,{useState , useEffect} from 'react'
import { View, Text ,SafeAreaView,Button ,Image , Modal,TouchableOpacity,StyleSheet,Pressable} from 'react-native'
import DocumentPicker from 'react-native-document-picker';
import CameraScreen from './Camera';
var RNFS = require('react-native-fs')
export default function Admin() {

  const [modalVisible, setModalVisible] = useState(false);
  let [base64image,setbase64image] = useState()
  let [test,setTest] = useState()
    
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

            const split = res.uri.split('/');
            const name = split.pop();
            const inbox = split.pop();
            


            console.log(res.uri)
            RNFS.readFile(res.uri, 'base64')
            .then(res =>{
            setbase64image(`data:image/jpg;base64,${res}`)
            console.log(res);
          });

          } catch (err) {
            if (DocumentPicker.isCancel(err)) {

            } else {
              throw err;
            }
          }



    }

    function ImageCallback(props){
      setbase64image(props)
    }

    function setModal(params) {
      setModalVisible(params)
      
    }

    return (
        <View>
            <Button title="Click me to pick File " onPress={()=>lookfile()}/>
            <Text>{test}</Text>
            <Image style={{width:'50%',height:'50%'}} source={{uri:base64image}}/>



      <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View>
              <TouchableOpacity onPress={() => setModalVisible(!modalVisible)} style={{backgroundColor:'red' ,
               position:'absolute',top:-45 ,left:'95%',padding:5,borderRadius:50}}>
                <Text style={{color:'white',fontSize:18}}>
                  ปิด
                </Text>
                
              </TouchableOpacity>


            </View>
            <CameraScreen toAdmin={ImageCallback} showModal={setModal} />
          </View>
            
 
        </View>
      </Modal>
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.textStyle}>Take Picture</Text>
      </Pressable>
    </View>
    
        </View>
    )
}

const styles = StyleSheet.create({
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
    padding: 15,

    shadowColor: "#000",
    width:'80%',
    height:'70%',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    borderRadius: 20,
    padding: 15,
    elevation: 2
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  }
})