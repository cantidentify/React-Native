import React from "react";
import { StyleSheet, View } from "react-native";
 
import { SliderBox } from "react-native-image-slider-box";


const imageSource = [
  "https://source.unsplash.com/1024x768/?temple",
  "https://source.unsplash.com/1024x768/?water",
  "https://source.unsplash.com/1024x768/?nature",
  "https://source.unsplash.com/1024x768/?house"
]

const imageLink = [
  "https://source.unsplash.com/1024x768/?nature",
  "https://source.unsplash.com/1024x768/?water",
  "https://source.unsplash.com/1024x768/?nature",
  "https://source.unsplash.com/1024x768/?house"
]

const slideShow = ({navigation}) =>{
  return(
    <View>
        <SliderBox
          images={imageSource}
          onCurrentImagePressed={() => navigation.navigate('Activity')}
          autoplay
          circleLoop
          sliderBoxHeight={150}
          dotColor={'orange'}
          ImageComponentStyle={{borderRadius: 15, width: '93%', marginTop: 5}}
        />
      </View>
  )
}

const pressLink = ( {index} ) =>{
  console.warn(`image ${imageLink[index]} pressed`)
}

export default slideShow;
