import React from "react";
import { StyleSheet, View } from "react-native";
 
import { SliderBox } from "react-native-image-slider-box";


const imageSource = [
  require('../../asset/map/location11.jpg'),
  require('../../asset/map/location13.jpg'),
  require('../../asset/map/location9.jpg'),
  require('../../asset/map/location8.jpg'),
  require('../../asset/map/location5.jpg'),
  require('../../asset/map/location4.jpg'),
]


const slideShow = () =>{



  return(
    <View>
        <SliderBox
          images={imageSource}
          autoplay
          circleLoop
          sliderBoxHeight={150}
          dotColor={'transparent'}
          dotStyle={{
            width: 0,
            height: 0
          }}
        />
      </View>
  )
}

const pressLink = ( {index} ) =>{
  console.warn(`image ${imageLink[index]} pressed`)
}

export default slideShow;
