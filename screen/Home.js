import React from 'react';
import {View, Text, SafeAreaView, StyleSheet, Button} from 'react-native';

const Home =({ navigation })=> {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        {/* <View style={styles.header}>
          <View style={{}}>
            <Text style={{color: 'black'}}>Home</Text>
          </View>

          <View style={{position: 'absolute', marginLeft: '20%'}}>
            <Text style={styles.headerfont}>วัดเทพลีลาพระอารามหลวง</Text>
          </View>
        </View> */}

        <View style={styles.box1}>
          <Text
            style={{textAlign: 'center', fontWeight: 'bold', color: 'white'}}>
            Gallerry
          </Text>

        </View>

        <View style={styles.box2}>
          <View style={styles.icon1}>
            <Text
              style={{textAlign: 'center', fontWeight: 'bold', color: 'white'}}>
              ข้อมูลวัด
            </Text>
            <Button
            title="Click"
            onPress ={() => navigation.push("Info")}
            />
          </View>
          <View style={styles.icon1}>
            <Text
              style={{textAlign: 'center', fontWeight: 'bold', color: 'white'}}>
              บุคลากร
            </Text>
          </View>
        </View>

        <View style={styles.box3}>
          <Text style={styles.topBox}>ประกาศ</Text>
        </View>

        <View style={styles.box3}>
          <Text style={styles.topBox}>กิจกรรม</Text>
        </View>

      </View>
    </SafeAreaView>
  );
}

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f6f6f6',
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
    height: 100,
    backgroundColor: '#e27802',
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
