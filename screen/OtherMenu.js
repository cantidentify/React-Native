import React from 'react';
import {View, Text, SafeAreaView, StyleSheet, Button, TouchableOpacity, Image} from 'react-native';


const Seperator = () => <View style={styles.seperator} />;

const Info = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.detail}>
        <View style={styles.otherMenu}>

          <View style={styles.otherMenuIcon}>
            
          <TouchableOpacity
            style={styles.shadowButtonGallery}
            onPress={() => alert('hi')}>
            <View style={{alignItems: 'center',marginTop:10}}>
              <Image
                style={styles.icon}
                source={require('../asset/icon/photo.png')}
              />
              <Text style={styles.iconTextGallery}>Gallery</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.shadowButtonInfo}
            onPress={() => alert('hi')}>
            <View style={{alignItems: 'center',marginTop:10}}>
              <Image
                style={styles.icon}
                source={require('../asset/icon/temple.png')}
              />
              <Text style={styles.iconTextInfo}>ประวัติ</Text>
            </View>
          </TouchableOpacity>
          </View>

          <Seperator/>

        </View>
        <View style={styles.contact}>
          <Text style={styles.contactHeader}>ช่องทางติดต่อ</Text>
        </View>

        {/* <Button
          title="Slide"
          onPress={() => navigation.navigate('SlideShow')}
        /> */}
      </View>
    </SafeAreaView>
  );
};

export default Info;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f6f6f6',
  },
  detail: {
    backgroundColor: 'white',
    flex:1
  },
  otherMenu:{
    marginTop:20,
  },
  otherMenuIcon:{
    flexDirection:'row',
    justifyContent:'center'
  },
  icon: {
    justifyContent: 'center',
    height: 50,
    width: 50,
    marginTop:4
  },
  topBox: {
    backgroundColor: 'white',
    color: 'black',
    fontSize: 21,
    fontWeight: 'bold',
  },
  shadowButtonGallery: {
    shadowColor: 'rgba(0,0,0, .4)', // IOS
    shadowOffset: {height: 1, width: 1}, // IOS
    shadowOpacity: 1, // IOS
    shadowRadius: 1, //IOS
    backgroundColor: '#aec7ea',
    elevation: 4, // Android
    height: 80,
    width: 80,
    borderRadius: 50,

  },
  iconTextGallery: {
    textAlign: 'center',
    marginTop: 26,
    opacity:0.6,
    fontWeight:'bold',
    fontSize:14,
    color:'black'
  },
  shadowButtonInfo: {
    shadowColor: 'rgba(0,0,0, .4)', // IOS
    shadowOffset: {height: 1, width: 1}, // IOS
    shadowOpacity: 1, // IOS
    shadowRadius: 1, //IOS
    backgroundColor: '#fef3ee',
    elevation: 4, // Android
    height: 80,
    width: 80,
    borderRadius: 50,
    marginLeft:80
  },
  iconTextInfo: {
    textAlign: 'center',
    marginTop: 26,
    opacity:0.6,
    fontWeight:'bold',
    fontSize:14,
    color:'black'
  },
  seperator: {
    marginTop:60,
    marginHorizontal:20,
    borderBottomColor: 'grey',
    borderBottomWidth: StyleSheet.hairlineWidth,
    opacity:0.13,
    borderWidth:1.5
  },
  contact:{
    marginVertical:20
  },
  contactHeader:{
    fontSize:20,
    textAlign:'center',
    opacity:0.6,
    fontWeight:'bold'
  }
});
