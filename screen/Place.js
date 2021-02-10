import React, { useState } from 'react'
import {Text, View, StyleSheet, TextInput, Alert, Button} from 'react-native'

const App = ()=> {

  const [TextInputName,setName] = useState('');
  const [TextInputTitle,setTitle] = useState('');
  const [TextInputlastName,setLname] = useState('');
  const [TextInputStreet,setStreet] = useState('');
  const [TextInputNo,setNo] = useState('');
  const [TextInputCity,setCity] = useState('');
  const [TextInputPostal,setPostal] = useState('');
  const [TextInputEmail,setEmail] = useState('');
  const [TextInputPhone,setPhone] = useState('');
  const [TextInputMessage,setMess] = useState('');

  // CheckTextInput = ()=>{
  //   if (TextInputName != ''){
  //     if(TextInputEmail != ''){
  //       alert("Success");
  //     }else{
  //       alert("Email is required")
  //     }
  //   }else{
  //     alert("Name is required")
  //   }
  // }

  return(
    <View style = {styles.container}>
      <View style = {{flexDirection:"row"}}>
        <TextInput
        placeholder='Enter Name*'
        underlineColorAndroid='transparent'
        style = {styles.TextInput50}
        onChangeText = {(TextInputName) => setName({TextInputName})}
        />
        <TextInput
        placeholder='Enter Last Name*'
        underlineColorAndroid='transparent'
        style = {styles.TextInput50}
        onChangeText = {(TextInputlastName) => setLname({TextInputlastName})}
      />
     </View>
      <View style = {{flexDirection:"row"}}>
        <TextInput
        placeholder='Street*'
        underlineColorAndroid='transparent'
        style = {styles.TextInput70}
        onChangeText = {(TextInputStreet) => setEmail({TextInputStreet})}
        />
        <TextInput
        placeholder='No.'
        underlineColorAndroid='transparent'
        style = {styles.TextInput30}
        onChangeText = {(TextInputNo) => setEmail({TextInputNo})}
        />
      </View>
      <View style = {{flexDirection:"row"}}>
        <TextInput
        placeholder='City*'
        underlineColorAndroid='transparent'
        style = {styles.TextInput70}
        onChangeText = {(TextInputCity) => setEmail({TextInputCity})}
        />
        <TextInput
        placeholder='Postal*'
        underlineColorAndroid='transparent'
        style = {styles.TextInput30}
        onChangeText = {(TextInputPostal) => setEmail({TextInputPostal})}
        />
       </View> 
      <View style = {{flexDirection:"row"}}>
        <TextInput
        placeholder='Enter Email'
        underlineColorAndroid='transparent'
        style = {styles.TextInput50}
        onChangeText = {(TextInputEmail) => setEmail({TextInputEmail})}
        />
        <TextInput
        placeholder='Phone Number*'
        underlineColorAndroid='transparent'
        style = {styles.TextInput50}
        onChangeText = {(TextInputPhone) => setPhone({TextInputPhone})}
        />
      </View>
      <TextInput
        placeholder='Type your message here*'
        underlineColorAndroid='transparent'
        style = {styles.MessInput}
        onChangeText = {(TextInputMessage) => setMess({TextInputMessage})}
      />
      <View style = {{marginTop:15}}>
      <Text style={styles.text}>
       </Text>
        <Button
          title = "Sent"
          // onPress = {CheckTextInput}
          color = '#ff9f33'
        />
      </View>
    </View>
    )
  }



 const styles = StyleSheet.create({
  container:{
    flex:1,
    /* alignItems:'center',
    justifyContent:'center', */
    margin:35
  },
  TextInput:{
    paddingLeft:5,
    marginTop:10,
    height:30,
    width:'100%',
    borderWidth:1,
    borderColor:'#606070',
    borderRadius:7
  },
  TextInput40:{
    paddingLeft:5,
    marginTop:10,
    height:30,
    width:'40%',
    borderWidth:1,
    borderColor:'#606070',
    borderRadius:7
  },
  TextInput50:{
    paddingLeft:5,
    marginTop:10,
    marginRight:10,
    height:30,
    width:'50%',
    borderWidth:1,
    borderColor:'#606070',
    borderRadius:7
  },
  TextInput30:{
    paddingLeft:5,
    marginTop:10,
    height:30,
    width:'30%',
    borderWidth:1,
    borderColor:'#606070',
    borderRadius:7
  },
  TextInput70:{
    paddingLeft:5,
    marginTop:10,
    marginRight:10,
    height:30,
    width:'70%',
    borderWidth:1,
    borderColor:'#606070',
    borderRadius:7
  },
  MessInput:{
    paddingLeft:5,
    marginTop:10,
    height:100,
    width:'100%',
    borderWidth:1,
    borderColor:'#606070',
    borderRadius:7
  }
})

export default App;
