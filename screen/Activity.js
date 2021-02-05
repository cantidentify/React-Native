import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  Button,
  Alert,
  Image,
} from 'react-native';

const Seperator = () => <View style={styles.seperator} />;

const App = () => (
  <SafeAreaView style={styles.container}>
    <View>
      <View style={styles.box}>
        <Text style={styles.title}>ข่าวสาร</Text>
        <View style={styles.imageBox}>
          <Text style={styles.imageText}>รูปภาพ</Text>
        </View>
        <View style={styles.seeMoreBox}>
          <Text style={styles.seeMoreText}>ดูทั้งหมด</Text>
        </View>
        <Seperator />
      </View>

      <View style={styles.box}>
        <Text style={styles.title}>กิจกรรม</Text>
        <View style={styles.imageBox}>
          <Text style={styles.imageText}>รูปภาพ</Text>
        </View>
        <View style={styles.seeMoreBox}>
          <Text style={styles.seeMoreText}>ดูทั้งหมด</Text>
        </View>
        <Seperator />
      </View>
    </View>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    margin: 10,
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
    paddingTop: 5,
    marginBottom: 0,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  imageBox: {
    backgroundColor: '#F0F0F0',
    height: 100,
    borderRadius: 7,
  },
  imageText: {
    margin: 'auto',
    color: '#7CC5A8',
    fontSize: 25,
  },
  imageMap: {
    width: '100%',
    height: 240,
    backgroundColor: 'black',
  },
  seeMoreBox: {
    marginTop: 5,
    borderRadius: 7,
  },
  seeMoreText: {
    paddingTop: 10,
    fontSize: 15,
    color: '#41A77F',
    marginBottom: 10,
  },
  seperator: {
    marginVertical: 8,
    borderBottomColor: '#00BF74',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});

export default App;
