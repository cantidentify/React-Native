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
import { DataTable } from 'react-native-paper';

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
        <View>
          <DataTable>
            <DataTable.Row>
              <DataTable.Cell>รถไฟ</DataTable.Cell>
              <DataTable.Cell>ARL รถไฟฟ้าเชื่อมท่าอากาศยานสุวรรณภูมิ</DataTable.Cell>
            </DataTable.Row>

            <DataTable.Row>
              <DataTable.Cell>รถบัส</DataTable.Cell>
              <DataTable.Cell>113, 113 (ปอ.) (AC), 171 (ปอ.) (AC) 501 (ปอ.) (AC), 545 (ปอ.) (AC), 99</DataTable.Cell>
            </DataTable.Row>

            <DataTable.Row>
              <DataTable.Cell>เรือ</DataTable.Cell>
              <DataTable.Cell>สายนิด้า NIDA LINE</DataTable.Cell>
            </DataTable.Row>
          </DataTable>
        </View>
      </View>
      <View style={styles.cardBox}>
        <Image
          style={styles.MainImage}
          source={require('../../asset/map/location2.png')}
        />
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
    height: 320,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#E5E5E5',
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
    marginTop: 8,
  }
});

export default App;
