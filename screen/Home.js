import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  Button,
  TouchableOpacity,
} from 'react-native';

const Home = ({navigation}) => {
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
          <TouchableOpacity
            style={styles.shadowButton}
            onPress={() => navigation.navigate('Location')}>
            <View style={{alignItems: 'center'}}>
              <Image
                style={styles.icon}
                source={require('../asset/icon/map.png')}
              />
              <Text style={styles.iconText}>สถานที่ต่างๆ</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.shadowButton}
            onPress={() => navigation.navigate('Info')}>
            <View style={{alignItems: 'center'}}>
              <Image
                style={styles.icon}
                source={require('../asset/icon/temple.png')}
              />
              <Text style={styles.iconText}>ประวัติความเป็นมา</Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.box3}>
          <View style={styles.textBackground}>
            <Text style={styles.topBoxText}>ประกาศ</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

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
    backgroundColor: '#fff',
    elevation: 2, // Android
    height: 110,
    width: 120,
    borderRadius: 10,
  },

});
