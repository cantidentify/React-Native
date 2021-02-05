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

const App = () => (
  <SafeAreaView style={styles.container}>
    <View>
      <View style={styles.box}>
        <Text style={styles.title}>สถานที่ในวัด</Text>
        <View style={styles.imageBox}>
          <Text style={styles.imageText}>รูปภาพ</Text>
        </View>
      </View>
      <View style={styles.box}>
        <Text style={styles.title}>สถานที่ต่างๆ</Text>
        <View style={styles.secondBox}>
          <Text style={styles.secondTitle}>เขตพุทธาวาส</Text>
        </View>
        <View style={styles.secondBox}>
          <Text style={styles.secondTitle}>เขตสังฆาวาส</Text>
        </View>
        <View style={styles.secondBox}>
          <Text style={styles.secondTitle}>เขตธรณีสงฆ์</Text>
        </View>
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
    paddingTop: 10,
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
  secondBox: {
    backgroundColor: '#F0F0F0',
    borderRadius: 7,
    marginBottom: 5,
  },
  secondTitle: {
    margin: 'auto',
    paddingTop: 10,
    fontSize: 17,
    fontWeight: 'bold',
    color: '#41A77F',
    marginBottom: 10,
  },
});

export default App;
