import React , {useEffect,useState} from 'react';
import { useFocusEffect } from '@react-navigation/native';
import axios from 'axios'
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  Alert,
  Image,
  ScrollView
} from 'react-native';

import { Avatar, Button, Card, Title, Paragraph , ActivityIndicator } from 'react-native-paper';
import { useFonts, Kanit_100Thin,Kanit_500Medium } from '@expo-google-fonts/kanit';
import { Sarabun_100Thin,Sarabun_400Regular } from '@expo-google-fonts/sarabun';

export default function App({ route }){

  let [loading,setloading] = useState(true)
  let [event,setevent] = useState([])
  let [fontsLoaded] = useFonts({
    Kanit_100Thin,Kanit_500Medium,Sarabun_400Regular
  });
 



  useFocusEffect(
    React.useCallback(() => {
      let isActive = true;

      async function api() {
        try{
          let res = await axios.get('https://watthepleela.herokuapp.com/event')
       

          if(isActive){
            setevent(res.data.results)
            setloading(false)
          }

        }
        catch(e){}

        
      }
      api()
      return ()=>{ isActive = false;}
    }, [event])
  );
  



return(
  <SafeAreaView style={styles.container}>
    <ScrollView>
    {loading?<ActivityIndicator size="large" color="#da723c" style={{flex:1 , marginTop:'65%' }}/>:event.map((e,index)=>{
       return (
       <Card style={styles.cardBox} key={index+"Card"}>
       <Card.Content style={styles.cardContent}>
         <Title style={styles.header}>{e.Text}</Title>
       </Card.Content>
       <Card.Cover source={{ uri: e.Img_uri }} />
     </Card>)
     })}

    

    </ScrollView>
  </SafeAreaView>
)

    }

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center'
  },
  cardBox:{
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10
  },
  cardContent:{
    marginTop:-13,
  },
  header:{
    fontSize: 15,
    fontFamily:'Sarabun_400Regular',
    padding:10,
    lineHeight: 25,
    color:'#292929'
  }
});

