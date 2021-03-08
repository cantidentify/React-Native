import React from 'react';
import {View, Text, SafeAreaView, StyleSheet, ScrollView} from 'react-native';

const Info =()=> {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>

        {/* <View style={styles.header}>
          <View style={{}}>
            <Text style={{color: 'black'}}>Home</Text>
          </View>

          <View style={{position: 'absolute', marginLeft: '20%'}}>
            <Text style={styles.headerfont}>วัดเทพลีลาพระอารามหลวง</Text>
          </View>
        </View> */}

        <View style={styles.box3}>
          <Text style={styles.topBox}>วัดเทพลีลาพระอารามหลวง</Text>
        </View>

        <View style={styles.box3}>
          <Text style={styles.topBox}>ประวัติความเป็นมา</Text>
          <Text style={styles.detailText}>
          วัดเทพลีลา หรือชื่อเดิมคือ วัดตึก เป็นพระอารามหลวงชนิดสามัญ สังกัดคณะสงฆ์มหานิกาย[1] ตั้งอยู่ในแขวงหัวหมาก เขตบางกะปิ กรุงเทพมหานคร ริมคลองแสนแสบ

เจ้าพระยาบดินทรเดชา (สิงห์ สิงหเสนี) ซึ่งเป็นผู้ดูแลการขุดคลองแสนแสบ ในระหว่างที่ขุดคลองบางขนากนั้น นายทหารได้พบพระพุทธรูปปางลีลาศิลปะสุโขทัย เจ้าพระยาบดินทรเดชา (สิงห์ สิงหเสนี) จึงให้สร้างวัดขึ้น สันนิษฐานว่าสร้างขึ้นในช่วง พ.ศ. 2381–2382 ก่อนหน้าที่เจ้าพระยาบดินทรเดชา (สิงห์ สิงหเสนี) จะยกทัพไปเมืองพระตะบอง ภายหลังสร้างวัดแล้วได้อัญเชิญพระพุทธรูปปางลีลาที่ประดิษฐานที่ริมคลองแสนแสบองค์นั้นมาประดิษฐานเป็นพระประธานในพระอุโบสถ และตั้งชื่อวัดว่า วัดเทพลีลา

โบราณสถานสำคัญในวัดเทพลีลา ที่สันนิษฐานว่าสร้างขึ้นในสมัยที่เจ้าพระยาบดินทรเดชา (สิงห์ สิงหเสนี) ได้แก่ พระเจดีย์ย่อมุมไม้สิบสองทรงเครื่อง ด้านหน้าพระวิหารหลังเก่า ซึ่งมีลักษณะรูปแบบเป็นพระเจดีย์ศิลปะร่วมสมัยรัชกาลที่ 3[2]

ในปี พ.ศ. 2549 มีการยกฐานะวัดเทพลีลาขึ้นเป็นพระอารามหลวงในโอกาสที่พระบาทสมเด็จพระมหาภูมิพลอดุลยเดชมหาราชทรงครองสิริราชสมบัติครบ 60 ปี[3] เจ้าอาวาสองค์ปัจจุบันคือ พระเทพรัตนากร (ประสาร เตชสีโล)[4]
          </Text>
        </View>
        


      </ScrollView>
    </SafeAreaView>
  );
}

export default Info;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f6f6f6',
    marginLeft:14,
    marginRight:14
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
    height:50,
  },
  headerfont: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ff884b',
  },
  box1: {
    marginTop: 30,
    justifyContent: 'center',
    width: '100%',
    height: 170,
    backgroundColor: '#e27802',
  },
  box2: {
    padding: 15,
    justifyContent: 'space-around',
    backgroundColor: 'white',
    marginTop: 20,
    flexDirection: 'row',
  },
  box3: {
    marginTop: 20,
    width: '100%',
    backgroundColor: 'white',
  },
  icon1: {
    borderRadius: 10,
    justifyContent: 'center',
    backgroundColor: '#e27802',
    height: 100,
    width: 100,
  },
  topBox: {
    backgroundColor: 'white',
    color: 'black',
    fontSize: 21,
    fontWeight: 'bold',
    marginBottom:14
  },
  detailText:{
    fontSize:16
  },
  buttom_navigator:{
    backgroundColor: 'white',
    marginTop:20,
    
    height:50,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 1,
    shadowRadius: 3.84,
    elevation: 9,
    
    
  }
});
