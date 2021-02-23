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

import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';

const App = () => (
  <SafeAreaView style={styles.container}>
    <ScrollView>
      <Card style={styles.cardBox}>
        <Card.Content style={styles.cardContent}>
          <Title style={styles.header}>ขอเชิญร่วมงาน "วันมาฆบูชา" 26 กุมภาพันธ์ 2564</Title>
        </Card.Content>
        <Card.Cover source={{ uri: 'https://scontent.fbkk5-7.fna.fbcdn.net/v/t1.0-9/149313279_3618343074902077_2196514958409431446_o.jpg?_nc_cat=107&ccb=3&_nc_sid=730e14&_nc_eui2=AeFYJchW3-vLRh3A5bXBELtGaH2eOTepV-dofZ45N6lX5_24na1alU7KDMUB0wYRbAo3ycqLWZGFOnuMaSYa1kIT&_nc_ohc=NVbApBSd_lAAX9RkNRv&_nc_ht=scontent.fbkk5-7.fna&oh=cdf7518d375e3c2e638b7b581c236e72&oe=605638BF' }} />
      </Card>

      <Card style={styles.cardBox}>
        <Card.Content style={styles.cardContent}>
          <Title style={styles.header}>ขอเชิญร่วมทำบุญถวายน้ำปานะ</Title>
        </Card.Content>
        <Card.Cover source={{ uri: 'https://scontent.fbkk5-5.fna.fbcdn.net/v/t1.0-9/131150559_3461473450589041_1387151040445099716_o.jpg?_nc_cat=104&ccb=3&_nc_sid=730e14&_nc_eui2=AeESfrkWD-nbs-QKjFnNqSjKMKgquJVHwMQwqCq4lUfAxHH_x0pCkyI8eFP5aF3C5jyJU7BY3bVFwoYNUgy90Ya-&_nc_ohc=6rOdxY0S9N4AX-XKB-X&_nc_ht=scontent.fbkk5-5.fna&oh=ae382ef730c05b9b7448e3281b356fa0&oe=6057685C' }} />
      </Card>
      

      <Card style={styles.cardBox}>
        <Card.Content style={styles.cardContent}>
          <Title style={styles.header}>ปลอดภัยจาก Covid-19</Title>
        </Card.Content>
        <Card.Cover source={{ uri: 'https://scontent.fbkk5-3.fna.fbcdn.net/v/t1.0-9/134356458_3504372996299086_1810291658902047233_o.png?_nc_cat=105&ccb=3&_nc_sid=e3f864&_nc_eui2=AeEjlISKEfcvx84C9ffL8zEq7fBkjwh40HLt8GSPCHjQctAaWoi6CFj6eqbi7VG4UTO4d23UytxOO0ByyWtkPXRa&_nc_ohc=qnt1lcRPpRgAX-osQHK&_nc_oc=AQkQxPTEF-3iBp56Zh7t_SGfcnW-dpHOb_CVI-jTULY6WQee7U_QAJGUN8tiJltYmkA&_nc_ht=scontent.fbkk5-3.fna&oh=1f07bda8bfc630fe0fb5593169b1e996&oe=6057DDE1' }} />
      </Card>

    </ScrollView>
  </SafeAreaView>
);

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
    fontSize: 17,
    fontWeight: 'bold',
    lineHeight: 25,
    color:'#292929'
  }
});

export default App;
