import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  Alert,
  Image,
  ScrollView
} from 'react-native';

const App = () => (
  <SafeAreaView style={styles.container}>
    <ScrollView>
      <View>
        <Image
          style={styles.MainImage}
          source={require('../../asset/map/location1.jpeg')}
        />
      </View>
      <View style={styles.cardBox}>
        <Text style={styles.header}>การเดินทาง</Text>
        <Text style={styles.detailBox}>
          การเดินทางมายังวัดเทพลีลาพระอารามหลวงนั้น สามารถมาได้หลากหลายเส้นทางและยานพาหนะ โดยมีรายละเอียดดังนี้
        </Text>
        <Image
          style={styles.goToImage}
          source={require('../../asset/map/location2.jpeg')}
        />
        <Text style={styles.detailHeader}> - Airport Rail Link</Text>
        <Text style={styles.detailBox}> ลง ณ สถานีรามคำแหง แล้วนั่งรถเมล์หรือรถสองแถวต่อมายังซอยรามคำแหง 39</Text>
        <Text style={styles.detailHeader}> - รถเมล์</Text>
        <Text style={styles.detailBox}> นั่งรถเมล์ตามสายดังภาพ แล้วลง ณ ป้ายรถเมล์หน้าโรงเรียนวัดเทพลีลา</Text>
        <Text style={styles.detailHeader}> - เรือโดยสาร</Text>
        <Text style={styles.detailBox}> นั่งเรือโดยสารคลองแสนแสบ ลง ณ ป้ายวัดเทพลีลา</Text>
      </View>
        
      <View style={styles.cardBox}>
        <Text style={styles.header}>สถานที่ภายในวัด</Text>
        <Image
          style={styles.insideImage}
          source={require('../../asset/map/location3.jpeg')}
        />
        <Text style={styles.header2}>1. ที่จำหน่ายสังฆทานของวัด</Text>
        <Image
          style={styles.insideImage}
          source={require('../../asset/map/location4.jpg')}
        />
        <Text style={styles.header2}>2. วิหารปัญญาเนรมิตดี</Text>
        <Image
          style={styles.insideImage}
          source={require('../../asset/map/location5.jpg')}
        />
        <Text style={styles.header2}>3. ศาลา 1</Text>
        <Image
          style={styles.insideImage}
          source={require('../../asset/map/location6.jpg')}
        />
        <Text style={styles.header2}>4. ที่ถวายสังฆทาน ภัตตาหาร</Text>
        <Image
          style={styles.insideImage}
          source={require('../../asset/map/location7.jpg')}
        />
        <Text style={styles.header2}>5. ศาลาปุ่นเอม - กรรณสูต</Text>
        <Image
          style={styles.insideImage}
          source={require('../../asset/map/location8.jpg')}
        />
        <Text style={styles.header2}>6. สำนักเลขาณุการ สำนักเรียนวัดเทพลีลา</Text>
        <Image
          style={styles.insideImage}
          source={require('../../asset/map/location9.jpg')}
        />
        <Text style={styles.header2}>7. หอสมุดกาญจนาภิเษก</Text>
        <Image
          style={styles.insideImage}
          source={require('../../asset/map/location13.jpg')}
        />
        <Text style={styles.header2}>8. สำนักงานกลาง</Text>
        <Image
          style={styles.insideImage}
          source={require('../../asset/map/location10.jpg')}
        />
        <Text style={styles.header2}>9. ศาลาเอี่ยมเจริญ</Text>
        <Image
          style={styles.insideImage}
          source={require('../../asset/map/location11.jpg')}
        />
        <Text style={styles.header2}>10. ห้องน้ำ</Text>
        <Text style={styles.header2}>11. ลานจอดรถ</Text>
        <Text style={styles.header2}>12. ท่าเรือวัดเทพลีลา</Text>
      </View>
    </ScrollView>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    margin: 10,
  },
  MainImage: {
    justifyContent: 'center',
    width: '100%',
    height: 340,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#E5E5E5',
    marginBottom: 10
  },
  goToImage:{
    justifyContent: 'center',
    width: '100%',
    height: 160,
    marginBottom: 10
  },
  insideImage:{
    justifyContent: 'center',
    width: '100%',
    height: 230,
    marginBottom: 10
  },
  cardBox:{
    backgroundColor: 'white',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#E5E5E5',
    marginBottom: 10
  },
  header:{
    fontSize: 17,
    fontWeight: 'bold',
    color:'#292929',
    marginLeft: 8,
    marginTop: 8
  },
  header2:{
    fontSize: 15,
    fontWeight: 'bold',
    color:'#343434',
    marginLeft: 8,
    marginTop: 8,
    marginBottom: 2
  },
  detailBox:{
    marginLeft: 8,
    marginBottom: 6
  },
  detailHeader:{
    fontSize: 14,
    fontWeight: 'bold',
    color:'#292929',
  }
});

export default App;

