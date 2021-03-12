import React,{useState,useEffect} from 'react'
import { StyleSheet, Text, View ,TouchableOpacity ,Image,Button,SafeAreaView, Alert} from 'react-native'
var RNFS = require('react-native-fs')
import { RNCamera } from 'react-native-camera';


export default function CameraScreen({toAdmin,showModal}) {


  let camera = RNCamera
  const [TakePicture,setTakePicture] = useState("")


  async function CameraShot(){
    if (camera) {
      const options = { quality: 0.5, base64: true };
      const data = await camera.takePictureAsync(options);
      setTakePicture(data.uri)


    }
  }


  function sendpicture(){
    RNFS.readFile(TakePicture, 'base64')
    .then(res =>{
      toAdmin(`data:image/jpg;base64,${res}`)

  });
    clearPicture()
    showModal(false)

  }

  function clearPicture() {
    setTakePicture("")
    
  }

  function closemodal(){
    showModal(false)
    
  }


  


  
    return (

      <>
     
      {TakePicture!=""?(         
      <View style={{flex:1}}>
        
        <Image style={{flex:1}} source={{uri:TakePicture}}/>

          <View style={{position: 'absolute', top: '90%', left: 0, right: 0, bottom: 0, justifyContent: 'center',
           alignItems: 'center',flexDirection:'row' ,alignContent:'space-between'}}>

<View style={{width:'45%' ,alignItems:'flex-start',marginLeft:10}}>
            <TouchableOpacity onPress={sendpicture}>
            <Text style={{color:'white',fontSize:20}}> ส่ง</Text>
          </TouchableOpacity>
            </View>


            <View style={{width:'45%',alignItems:'flex-end',marginRight:10}}>
            <TouchableOpacity onPress={clearPicture}>
            <Text style={{color:'white',fontSize:20}}> ยกเลิก</Text>
          </TouchableOpacity>
            </View>



            

          </View>



      </View>
        

      ):(
        <View style={styles.container}>
        <RNCamera
        ref={ref => {
          camera = ref;
        }}
        style={styles.preview}
        type={RNCamera.Constants.Type.back}
        flashMode={RNCamera.Constants.FlashMode.off}
        androidCameraPermissionOptions={{
          title: 'ขอเข้าสิทธิ์ถึงการใช้งานกล้อง',
          message: 'ท่านจะให้เราเข้าถึงสิทธิ์ในการใช้งานกล้องหรือไม่',
          buttonPositive: 'ตกลง',
          buttonNegative: 'ยกเลิก',
        }}
      />
      <View style={{ flex: 0, flexDirection: 'row' ,backgroundColor:'black',justifyContent:'center'}}>
        <View style={{alignSelf:'center'}}>
        <TouchableOpacity onPress={CameraShot} style={styles.capture}>
        </TouchableOpacity>
        </View>

        
        <View>
        <TouchableOpacity onPress={closemodal} style={{alignSelf:'flex-end'}}>
          <Text style={styles.cancel}>ยกเลิก</Text>
        </TouchableOpacity>
        </View>



      </View>


      
    

      
      </View>

      )}

    
    </>
     
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'transparent',

  },
  preview: {
    flex: 1,
    alignItems: 'center',
    height:'70%',
    flexDirection: 'column',
    
  },
  capture: {
    flex: 0,
    backgroundColor: 'white',
    borderRadius: 50,
    padding: 30,
    paddingHorizontal: 30,
    margin:20,

  },
  button: {
    flex: 0,
    backgroundColor: '#00af91',
    padding: 15,
    alignSelf: 'center',
    margin: 20,
  }
  ,cancel:{
    flex: 0,
    color:'white',
    alignSelf: 'center',
    marginTop:30,
    fontSize:20
  }
});