import React,{useState} from 'react';
import {View, Text, SafeAreaView, StyleSheet, Button, TouchableOpacity, Image,Linking,Modal,ScrollView} from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faPhone,facboo } from '@fortawesome/free-solid-svg-icons'
import {faFacebook} from '@fortawesome/free-brands-svg-icons'

import { useFonts, Kanit_100Thin,Kanit_500Medium } from '@expo-google-fonts/kanit';
import { Sarabun_100Thin,Sarabun_500Medium ,Sarabun_400Regular} from '@expo-google-fonts/sarabun';

const Seperator = () => <View style={styles.seperator} />;
 
const Info = ({navigation}) => {

  const [count,setcount] = useState(0)
  const [showcontact ,setshowcontact] = useState(false)

  let [fontsLoaded] = useFonts({
    Kanit_100Thin,Kanit_500Medium,Sarabun_100Thin,Sarabun_500Medium,Sarabun_400Regular
  });

  function openadmin(){
    setcount(count+1);
    if (count > 4){
      setcount(0)
      navigation.navigate('Login')

    }
    
  }

  function  havefacebookApp(){
    Linking.canOpenURL("fb://page/346864465383304").then(supported => {
    if (supported) {
      return Linking.openURL("fb://page/346864465383304");
    } else {
      return Linking.openURL("https://www.facebook.com/watthepleela");
    }
  })
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
      <View style={styles.detail}>
        <View style={styles.otherMenu}>

          <View style={styles.otherMenuIcon}>
            
          <TouchableOpacity
            style={styles.shadowButtonGallery}
            onPress={() => navigation.navigate('Gallerry')}>
            <View style={{alignItems: 'center',marginTop:10}}>
              <Image
                style={styles.icon}
                source={require('../../asset/icon/photo.png')}
              />
              <Text style={styles.iconTextGallery}>Gallery</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.shadowButtonInfo}
            onPress={() => navigation.navigate('Info')}>
            <View style={{alignItems: 'center',marginTop:10}}>
              <Image
                style={styles.icon}
                source={require('../../asset/icon/temple.png')}
              />
              <Text style={styles.iconTextInfo}>ประวัติ</Text>
            </View>
          </TouchableOpacity>
          </View>

          <Seperator/>

        </View>
        <TouchableOpacity
            onPress={() => openadmin()}>
            <View style={{width:'100%' , height:20}}>
            </View>
          </TouchableOpacity>

        <View style={styles.contact}>
          <Text style={styles.contactHeader}>ข้อมูลเพิ่มเติม</Text>

         
          <View style={{justifyContent:'center',alignItems:'center',marginVertical:20}}> 

         

          <View style={{flexDirection:'row',marginVertical:5}}>
          <Text style={{marginHorizontal:20,fontSize:20}}>โทร             : 02-3191725</Text>
          <TouchableOpacity onPress={()=>{Linking.openURL('tel:023191725');}}>
            <FontAwesomeIcon icon={faPhone} size={25} color='green'/>
          </TouchableOpacity>

          </View>

          <View style={{flexDirection:'row'}}>
          <Text style={{marginHorizontal:20,fontSize:20}}>Facebook   : watthepleela</Text>
          <TouchableOpacity onPress={()=>{havefacebookApp()}}>
            <FontAwesomeIcon icon={faFacebook} size={25} color='#3b5998'/>
          </TouchableOpacity>
         
          </View>
          <View>
            <Text style={{marginHorizontal:20,fontSize:18,textAlign:'center',marginTop:25}}>47 ซอย 39 รามคำแหง แขวงหัวหมาก{'\n'} เขตบางกะปิ กรุงเทพมหานคร 10240</Text>
          </View>

       
          </View>

          <Seperator/>
          <View style={{alignItems:'center',marginTop:20}}>
          <TouchableOpacity onPress={()=>{setshowcontact(true)}} style={{backgroundColor:'#fed049',padding:10,borderRadius:10}}>
            <Text style={{fontSize:18 , color:'#282846',fontFamily:'Sarabun_500Medium'}}>ข้อตกลงการใช้งาน</Text>
          </TouchableOpacity>
      
          </View>


          <Modal
        animationType="slide"
        transparent={true}
        visible={showcontact}
        onRequestClose={() => {
          setshowcontact(false);
        }}
      >
      <View style={styles.centeredView}>
          <View style={styles.modalView}>

          <TouchableOpacity 
            activeOpacity={1} 
            onPressOut={() => {setshowcontact(false)}}
          >
            <View style={{alignItems:'flex-start'}}>
            <Text style={{fontSize:18},styles.text}>
         * Application นี้เป็นส่วนหนึ่งของรายวิชา ITE-439 โดยมีอาจารย์ผู้สอนคือ อาจารย์ อมรพันธ์ ชมกลิ่น 

            </Text>
            <Text style={{fontSize:18},styles.text}>
        
         * กรรมสิทธิ์ของ Application ทุกอย่างตกเป็นของวัด เพียงแต่ Source Code สามารถนำไปดัดแปลงได้ แต่หากต้องการนำ Application นี้ไปใช้งานต่อ จำเป็นต้องของอนุญาตจากทางวัดก่อน (ไม่รวมฐานข้อมูล และ เบื้องหลัง) 
        
            </Text>
            <Text style={{fontSize:18},styles.text}>
            * Application นี้สามารถนำไปใช้ในการศึกษาได้ โดยไม่จำเป็นต้องขออนุญาต
            </Text>

 
            <View style={styles.liner}></View>
            <Text style={{marginTop:10}}> จัดทำโดย </Text>
            <Text> นายพงศ์พิสุทธิ์ มีมุข </Text>
            <Text> นายมาวิน หาญสกุลวัฒน์ </Text>
            <Text> นายอธิป หยงสตาร์ </Text>
            <Text> นายอภินันท์ ติงหงะ</Text>
            </View>
 
          </TouchableOpacity>  

          </View>
        </View>
      </Modal>

         
    
        </View>

        {/* <Button
          title="Slide"
          onPress={() => navigation.navigate('SlideShow')}
        /> */}
      </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Info;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f6f6f6',
  },
  detail: {
    backgroundColor: 'white',
    flex:1
  },
  otherMenu:{
    marginTop:20,
  },
  otherMenuIcon:{
    flexDirection:'row',
    justifyContent:'center'
  },
  icon: {
    justifyContent: 'center',
    height: 50,
    width: 50,
    marginTop:4
  },
  topBox: {
    backgroundColor: 'white',
    color: 'black',
    fontSize: 21,
    fontWeight: 'bold',
  },
  shadowButtonGallery: {
    shadowColor: 'rgba(0,0,0, .4)', // IOS
    shadowOffset: {height: 1, width: 1}, // IOS
    shadowOpacity: 1, // IOS
    shadowRadius: 1, //IOS
    backgroundColor: '#aec7ea',
    elevation: 4, // Android
    height: 80,
    width: 80,
    borderRadius: 50,

  },
  iconTextGallery: {
    textAlign: 'center',
    marginTop: 26,
    opacity:0.6,
    fontFamily:'Sarabun_500Medium',
    fontSize:14,
    color:'black'
  },
  shadowButtonInfo: {
    shadowColor: 'rgba(0,0,0, .4)', // IOS
    shadowOffset: {height: 1, width: 1}, // IOS
    shadowOpacity: 1, // IOS
    shadowRadius: 1, //IOS
    backgroundColor: '#fef3ee',
    elevation: 4, // Android
    height: 80,
    width: 80,
    borderRadius: 50,
    marginLeft:80
  },
  iconTextInfo: {
    textAlign: 'center',
    marginTop: 26,
    opacity:0.6,
    fontFamily:'Sarabun_500Medium',
    fontSize:14,
    color:'black'
  },
  seperator: {
    marginTop:60,
    marginHorizontal:20,
    borderBottomColor: 'grey',
    borderBottomWidth: StyleSheet.hairlineWidth,
    opacity:0.13,
    borderWidth:1.5
  },
  liner:{
    width:'100%',
    marginTop:10,
    marginHorizontal:0,
    borderBottomColor: 'grey',
    borderBottomWidth: 1,
    opacity:0.13,
    borderWidth:2
  },
  contact:{
    marginVertical:5
  },
  contactHeader:{
    fontSize:20,
    textAlign:'center',
    fontFamily:'Sarabun_500Medium',
    opacity:0.6,
    fontWeight:'bold',
    marginTop:35

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
    borderWidth:2,
    borderColor:'#dddddd',
    borderRadius: 20,
    width:'80%',
    padding: 30,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
  
},
text:{
  fontFamily:'Sarabun_400Regular'
}
});
