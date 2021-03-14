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



const image1 = [
    "https://scontent.fbkk8-4.fna.fbcdn.net/v/t1.0-9/154247004_3648532571883127_345667366006724873_o.jpg?_nc_cat=100&ccb=3&_nc_sid=0debeb&_nc_eui2=AeGnfelxOABmgFQmuJHGlRW183dz3Yo7nmrzd3Pdijueav7ISSZeU6xuMBCn7XgO3-tszp-Y9LMzOHqFjk2zOdNQ&_nc_ohc=mXfvKQQ6gp8AX9xqu0I&_nc_ht=scontent.fbkk8-4.fna&oh=1fa96ea00165845d61b61c7a4ca6f54c&oe=6061C74F",
    "https://scontent.fbkk12-2.fna.fbcdn.net/v/t1.0-9/123464265_3344538938949160_2780093869234449133_o.jpg?_nc_cat=105&ccb=3&_nc_sid=0debeb&_nc_eui2=AeHIlhnRvHLgPVqWsKMab-5Pp5x7dZAK-BynnHt1kAr4HEG7fYS9qzdPuIF97Y9KmbGhiXxfhwYGSpEkjfCDYEkX&_nc_ohc=bL-I2CX7Jj0AX9-jqMo&_nc_ht=scontent.fbkk12-2.fna&oh=46b2a4be82832b284e361a336fe847aa&oe=605E6236",
    "https://scontent.fbkk12-1.fna.fbcdn.net/v/t1.0-9/123070642_3344517132284674_8540936599406026200_o.jpg?_nc_cat=101&ccb=3&_nc_sid=0debeb&_nc_eui2=AeExw6FSnwAbG24NW6ojxunsWWpBw0s3IQFZakHDSzchATN4htzZwivQAjPL89eJ-KNpOSfnOrW730WbTh6lkpYR&_nc_ohc=iyDxzyb0-bkAX8wo2gv&_nc_ht=scontent.fbkk12-1.fna&oh=85e0c7e4740b8e6059f65757930e3664&oe=605E2CCB",
    "https://scontent.fbkk13-2.fna.fbcdn.net/v/t1.0-9/123108702_3344503985619322_6214677977482801366_o.jpg?_nc_cat=107&ccb=3&_nc_sid=0debeb&_nc_eui2=AeERp_uKfTdeM5U6K3BN6vwmz58zAyI1rQvPnzMDIjWtC35qjSh2IlIFfVlk82MSqY15KXg9ual6jwUQzWEq8-E1&_nc_ohc=QxpVhldXqkkAX9pfYhx&_nc_oc=AQnbB_33lLYl0-9R4yuAAwVZNkg4bumLy9ZClNxbQFtr84n9iha1zHTOjM8cvO3RdtM&_nc_ht=scontent.fbkk13-2.fna&oh=c75b82f3e3fa117373d039a1771d8ec6&oe=605EC559"
  ]
  
const image2 = [
    "https://i.ytimg.com/vi/3AjXCjXQ8ns/maxresdefault.jpg",
    "http://img.painaidii.com/images/20120822_3_1345626916_808806.jpg",
    "https://www.wreathnawat.com/wp-content/uploads/2018/temple/Wnw_thepleela_24.JPG",
    "https://web.archive.org/web/20161103200012if_/http://static.panoramio.com/photos/large/130283534.jpg"
  ]

const image3 = [
    "https://scontent.fbkk8-4.fna.fbcdn.net/v/t1.0-9/150512292_3648513391885045_5228506713721339669_o.jpg?_nc_cat=100&ccb=3&_nc_sid=0debeb&_nc_eui2=AeHvY_aOPkGPiku0KMOhjqfnFkzO0_n4QOgWTM7T-fhA6AdFsF5KQAuK-lt88E2fXxf6b79eURPVE28UCdGXI2Y7&_nc_ohc=1iBZEm4Qu8MAX8aE11h&_nc_ht=scontent.fbkk8-4.fna&oh=2fb82455555f1650a0fa45cb44fcf5dc&oe=605E2709",
    "https://scontent.fbkk8-3.fna.fbcdn.net/v/t1.0-9/154284951_3648515658551485_7331168171198220766_o.jpg?_nc_cat=111&ccb=3&_nc_sid=0debeb&_nc_eui2=AeFfk02MoSywlv17M0wPutiq5vj655duOjnm-Prnl246ObmMcvnCOb_vSZtQgJ-ANx6jVjKfRcijGbLFDjU53SuX&_nc_ohc=7IKBEQpSyIEAX-q_bPn&_nc_ht=scontent.fbkk8-3.fna&oh=ab7118e51a6b8ee8862ac35aeaa1047d&oe=6060D03B",
    "https://scontent.fbkk8-3.fna.fbcdn.net/v/t1.0-9/149696457_3648514835218234_2382800981081136182_o.jpg?_nc_cat=111&ccb=3&_nc_sid=0debeb&_nc_eui2=AeF0DbxwHeV3XhBCdbeOziehAapZ7M4W_EkBqlnszhb8SVltP3HmK5aisswmrZkFtvfbIOKEdYBA2Z8jfR2G3tI0&_nc_ohc=H9O4FQNsKDMAX96Evy1&_nc_ht=scontent.fbkk8-3.fna&oh=5af5415e408877bebfebe1ec7fe412df&oe=605F021C",
    "https://scontent.fbkk13-2.fna.fbcdn.net/v/t1.0-9/152815816_3648512171885167_2905712121881810438_o.jpg?_nc_cat=106&ccb=3&_nc_sid=0debeb&_nc_eui2=AeHGEi0wpdQxP9c7_HiZaURBWYvuj25ZQSVZi-6PbllBJaRYyzsVBwq8nII62bwj61qBvDXw1Vsc_ENm4_Yl0qeS&_nc_ohc=FHXCqOSvU84AX9AQe95&_nc_ht=scontent.fbkk13-2.fna&oh=3ffe7a953710238deb830193a31f5e19&oe=60603EA5",
    "https://scontent.fbkk13-1.fna.fbcdn.net/v/t1.0-9/150110046_3648521541884230_7492630160866296920_o.jpg?_nc_cat=108&ccb=3&_nc_sid=0debeb&_nc_eui2=AeES93T4d4wRKevV7vso_yGYLrHPZyqh_akusc9nKqH9qVEPIARvdZoR8n-5xbC5sbAjuRb11RfcDE6lGAc7C3Sv&_nc_ohc=1zS_a5lGXzIAX9X8O-M&_nc_ht=scontent.fbkk13-1.fna&oh=64b8fcc039cde80b91f98ee9ace6cffa&oe=605EB35C",
    "https://scontent.fbkk13-1.fna.fbcdn.net/v/t1.0-9/152515660_3648530355216682_8825392859611852326_o.jpg?_nc_cat=105&ccb=3&_nc_sid=0debeb&_nc_eui2=AeFEOpYYLFbeEiFtqtNTVETnV_cJlYope1xX9wmViil7XLI4fKVOifJVutJUxXqgPp86n12oC-HzX1eBjRSR7PbI&_nc_ohc=Tmrvt0RTSBwAX821nus&_nc_ht=scontent.fbkk13-1.fna&oh=ccd59e730fff11887988054d92dbac69&oe=60611784",
    "https://scontent.fbkk12-2.fna.fbcdn.net/v/t1.0-9/154472766_3648531238549927_5941582107928897355_o.jpg?_nc_cat=104&ccb=3&_nc_sid=0debeb&_nc_eui2=AeEpB7bWR_NG1278NM-BCxbHi2Xns10_K3aLZeezXT8rdrlOKo_c4AX_oOjUEVBeI3qwx3r2N8FHDutc4FYIzHzT&_nc_ohc=a_qrlnlM0OoAX9qW7g6&_nc_ht=scontent.fbkk12-2.fna&oh=4771d20eb69eedc241b41c9b48f05388&oe=605FF15B"
  ]




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


  <View style={styles.box}>
    <Text style={styles.topic}>กิจกรรมต่างๆ</Text>
    <SliderBox
      images={image1}
      onCurrentImagePressed={() => navigation.navigate('SubGallery')}
      autoplay
      circleLoop
      sliderBoxHeight={200}
      dotColor={'orange'}
      ImageComponentStyle={{borderRadius: 15, width: '93%', marginTop: 5,}}
    />
    <View style={styles.SpaceBox}>
      
    </View>
  </View>
  <View style={styles.box}>
    <Text style={styles.topic}>สถานที่ในวัด</Text>
    <SliderBox
      images={image2}
      onCurrentImagePressed={index =>
        pressLink({index})
      }
      autoplay
      circleLoop
      sliderBoxHeight={200}
      dotColor={'orange'}
      ImageComponentStyle={{borderRadius: 15, width: '93%', marginTop: 5,}}
    />
    <View style={styles.SpaceBox}>
      
    </View>
  </View>

  <View style={styles.box}>
    <Text style={styles.topic}>26 ก.พ. 64 วันมาฆบูชา</Text>
    <SliderBox
      images={image3}
      onCurrentImagePressed={index =>
        pressLink({index})
      }
      autoplay
      circleLoop
      sliderBoxHeight={200}
      dotColor={'orange'}
      ImageComponentStyle={{borderRadius: 15, width: '93%', marginTop: 5,}}
    />
    <View style={styles.SpaceBox}>
      
    </View>
  </View>
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


