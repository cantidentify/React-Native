import React , {useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  Button,
  Alert,
  Image,
  Modal,
  ActivityIndicator,
  ScrollView,
} from 'react-native';

import { SliderBox } from "react-native-image-slider-box";
import { useFocusEffect } from '@react-navigation/native';
import ImageResizer from 'react-native-image-resizer';
import _ from 'lodash';
import axios from 'axios';



export default function App( {navigation} ){
 
    let [gallery,setgallery] = useState([])
    let [album,setalbum] = useState({})
    let [loading,setloading] = useState(true)

    useFocusEffect(
      React.useCallback(() => {
        let isActive = true;
  
        async function api() {
          try{
            let res = await axios.get('https://watthepleela.herokuapp.com/gallery')
           
  
            if(isActive){
              setgallery(res.data.results)
              setalbum(await _.chain(gallery).groupBy('Album').mapValues((x,a)=>x.map((i)=>i.Img_uri)).value())

  
            }
  
          }
          catch(e){}
  
        }
        api()
        return ()=>{ isActive = false;}
      }, [gallery])
    );




    return(


  <SafeAreaView style={styles.container}>


{Object.keys(album).length>0?

<ScrollView>

<View>


  {album!=undefined||album!={}||album!=null?Object.entries(album).map(([key,value],i)=>{
                  
                 
                 return ( <View style={styles.box} key={`Image${i}`}>
                    <Text style={styles.topic}>{key}</Text>
                    <SliderBox
                      images={value}
                      circleLoop
                      sliderBoxHeight={200}
                      dotColor={'orange'}
                      ImageComponentStyle={{borderRadius: 15, width: '93%', marginTop: 5,}}
                    />
                    <View style={styles.SpaceBox}>
                      
                    </View>
                  </View>)
            
          })
          :null}

</View>
</ScrollView>

:
<Modal
        animationType="slide"
        transparent={true}
        visible={Object.keys(album).length>0?false:true}
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
      </Modal>}


      
  

 
  </SafeAreaView>)

}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center'
  },
  header: {
    height: 50,
    backgroundColor: '#00BF74',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 18,
    color: 'white',
    fontFamily: '',
    fontWeight: 'bold',
  },
  box: {
    paddingTop: 10,
    marginBottom: 0,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',

  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 15,
    marginLeft: 10,
    color: '#41280b',
  },
  topic: {
    fontSize: 15,
    fontFamily:'Kanit_500Medium',
    backgroundColor:'#f4d160',
    padding:7,
    borderRadius:15,
    color:'#4a3933',
    marginLeft: 8,
    marginTop: 10,
    marginBottom: 10
    
  },
  SpaceBox: {
    backgroundColor: '#F0F0F0',
    height: 20,
    borderRadius: 7,
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
});


