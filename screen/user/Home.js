import React ,{useEffect,useState}from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  Button,
  TouchableOpacity,
  ScrollView
} from 'react-native';

import slideShow from './SlideShow';
import { useFonts, Kanit_100Thin,Kanit_500Medium } from '@expo-google-fonts/kanit';
import { Sarabun_500Medium,Sarabun_400Regular } from '@expo-google-fonts/sarabun';
import { Card, Title, Paragraph ,Badge } from 'react-native-paper';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faSign } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios';

const Home = ({navigation}) => {

  let [news,setnews] = useState([]);

  useEffect( ()=>{

    async function api(){
      let res = await axios.get('https://watthepleela.herokuapp.com/news')
      setnews(res.data.results)

    }
    api()
    

  },[news])
  
  let [fontsLoaded] = useFonts({
    Kanit_100Thin,Kanit_500Medium,Sarabun_500Medium,Sarabun_400Regular
  });


  function dateMod(date){
    let x = date.split("T")
    return x[0]
  }



  return (
    <SafeAreaView style={styles.container}>
       <ScrollView style={{backgroundColor:'#f2a154'}}>
       
       <View style={{backgroundColor:'#e7e6e1'}}>
       {slideShow()}
       </View>
      

        <View style={styles.box2}>
          <TouchableOpacity
            style={styles.shadowButton}
            onPress={() => navigation.navigate('Location')}>
            <View style={{alignItems: 'center'}}>
              <Image
                style={styles.icon}
                source={require('../../asset/icon/map.png')}
              />
              <Text style={styles.iconText}>สถานที่ต่างๆ</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.shadowButton}
            onPress={() => navigation.push('Info')}>
            <View style={{alignItems: 'center'}}>
              <Image
                style={styles.icon}
                source={require('../../asset/icon/temple.png')}
              />
              <Text style={styles.iconText}>ประวัติความเป็นมา</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={{backgroundColor:'#314e52',width:'100%',height:80}}>
          <View style={{justifyContent:'center',alignItems:'center',alignSelf:'center',
          marginTop:10,backgroundColor:'#f7f6e7',width:'80%',padding:10,borderRadius:15,flexDirection:'row'}}>
            <FontAwesomeIcon icon={faSign} color="#f2a154" size={30} style={{marginHorizontal:10}}/>
          <Text style={{fontFamily:'Sarabun_400Regular',fontSize:20}}> ประกาศ </Text>


          </View>
        </View>

    

          <View style={{justifyContent:'center' , alignItems:'center'}}>
          {news.map((i,v)=>(

             <Card key={`Card-${v}`} style={{width:'80%',marginVertical:15}}>
             <Card.Content>
               <Title style={styles.NewsHeadaer}>{i.Text}</Title>
               <Paragraph  style={styles.NewsText} >{i.Detail}</Paragraph>
               <View style={{backgroundColor:'#5b5b5b',padding:5,borderRadius:10,marginTop:20,flexDirection:'row'}}>
                 <View></View>
               <Paragraph style={styles.NewsText,{fontSize:12,color:'white'}}>ประกาศวันที่ : {dateMod(i.Date)} โดย {i.Post_by}</Paragraph>
               <Badge style={{alignSelf:'flex-end',marginLeft:30}}>{i.id}</Badge>
               </View>
               
               
             </Card.Content>
           </Card>

            

          ))}
    </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
  header: {
    alignItems: 'center',
    flexDirection: 'row',
    padding: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 1,
    height: 50,
  },
  headerfont: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ff884b',
  },
  box1: {
    marginTop: 20,
    justifyContent: 'center',
    width: '100%',
    height: 170,
    backgroundColor: '#f0a500',
  },
  box2: {
    padding: 15,
    justifyContent: 'space-around',
    backgroundColor: '#e6d5b8',
    flexDirection: 'row',
  },
  box3: {
    justifyContent:'center',
    marginTop: 20,
    width: '100%',
    height: 200,
    backgroundColor: 'white',
    paddingBottom:20
  },
  textCover:{
    marginLeft:20,
    padding:10
  },
  coverTextStyle:{
    fontSize:15,
    opacity:0.6,
    fontWeight:'bold'
    
  },
  textBackground: {
    backgroundColor: 'white',
  },
  icon: {
    borderRadius: 10,
    justifyContent: 'center',
    height: 70,
    width: 70,
  },
  topBoxText: {
    color: 'black',
    fontSize: 21,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  iconText: {
    textAlign: 'center',
    marginTop: 15,
    opacity:0.6,
    fontFamily:'Sarabun_400Regular',
    fontSize:13
    ,color:'#e6d5b8'
  },
  buttom_navigator: {
    backgroundColor: 'white',
    marginTop: 20,

    height: 50,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 1,
    shadowRadius: 3.84,
    elevation: 9,
  },
  shadowButton: {
    shadowColor: 'rgba(0,0,0, .4)', // IOS
    shadowOffset: {height: 1, width: 1}, // IOS
    shadowOpacity: 1, // IOS
    shadowRadius: 1, //IOS
    backgroundColor: '#4a3933',
    elevation: 0.9, // Android
    height: 110,
    width: 130,
    borderRadius: 10,
  },
  NewsText:{
    fontFamily:'Sarabun_400Regular',
    fontSize:16,
  },
  NewsHeadaer:{
    fontFamily:'Sarabun_400Regular',
    fontSize:22,
  }


});
