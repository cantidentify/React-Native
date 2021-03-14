import React from "react";
import { View, Text, SafeAreaView, StyleSheet, ScrollView } from "react-native";
import { Avatar, Button, Card, Title, Paragraph } from "react-native-paper";
import { useFonts, Kanit_100Thin,Kanit_500Medium } from '@expo-google-fonts/kanit';
import { Sarabun_100Thin } from '@expo-google-fonts/sarabun';

import { Feather ,FontAwesome5   } from '@expo/vector-icons'; 

const Info = () => {

  let [fontsLoaded] = useFonts({
    Kanit_100Thin,Kanit_500Medium,Sarabun_100Thin
  });

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>


        <View style={styles.box3}>
          <Text style={styles.topBox}>ประวัติความเป็นมา</Text>
          <Card>
            <Card.Content>
              <Card.Cover style={styles.image} source={{ uri: "https://i.ytimg.com/vi/3AjXCjXQ8ns/maxresdefault.jpg" }} />
              <Paragraph style={styles.paragraph}>
              <Feather  name="map-pin" size={25} color="#ffab73" />{'\t'}  วัดเทพลีลาพระอารามหลวง {'\n'}ตั้งอยู่ในแขวงหัวหมาก เขตบางกะปิกรุงเทพมหานคร ริมคลองแสนแสบ
                {'\n'}{'\n'}
                <FontAwesome5 name="info-circle" size={24} color="#ffab73" />{'\t'}  เจ้าพระยาบดินทรเดชา ซึ่งเป็นผู้ดูแลการขุดคลองแสนแสบ ในระหว่างที่ขุดคลองบางขนากนั้น นายทหารได้พบพระพุทธรูปปางลีลาศิลปะสุโขทัย เจ้าพระยาบดินทรเดชา จึงให้สร้างวัดขึ้น สันนิษฐานว่าสร้างขึ้นในช่วง พ.ศ.2381–2382 ก่อนหน้าที่เจ้าพระยาบดินทรเดชา (สิงห์ สิงหเสนี) จะยกทัพไปเมืองพระตะบอง ภายหลังสร้างวัดแล้วได้อัญเชิญพระพุทธรูปปางลีลาที่ประดิษฐานที่ริมคลองแสนแสบองค์นั้นมาประดิษฐานเป็นพระประธานในพระอุโบสถ และตั้งชื่อวัดว่า วัดเทพลีลา
              </Paragraph>

            </Card.Content>
          </Card>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Info;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f6f6f6",
    marginLeft: 14,
    marginRight: 14,
  },
  box3: {
    marginTop: 5,
    width: "100%",
    backgroundColor: "white",
  },
  paragraph:{
    fontSize:16,
    lineHeight: 35,
    padding:15,
    fontFamily:'Sarabun_400Regular',
    color:'#292929',
    textAlign:'center'
    
  },
  topBox: {
    fontSize: 16,
    fontFamily:'Kanit_500Medium',
    backgroundColor:'#f4d160',
    padding:7,
    borderRadius:15,
    color:'#4a3933',
    marginLeft: 8,
    marginTop: 10,
    marginBottom: 10
  },
  detailText: {
    fontSize: 16,
  },
  image:{
    borderWidth:3,
    borderRadius:20,
    borderColor:'#ffab73'
  }
});
